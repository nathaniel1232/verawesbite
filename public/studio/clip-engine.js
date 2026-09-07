/*  clip-engine.js — Optimally's scan-clip renderer.
 *
 *  ONE ENGINE, THREE CONSUMERS. `tools/marketing/clip.html` (headless Chrome
 *  frame capture, opened over file://), `website/studio.html` (the gated
 *  in-browser studio, which encodes frames itself) and anything else that
 *  wants a frame. They must not drift, so there is exactly one copy of this
 *  file and the marketing page reaches across to it with a relative <script
 *  src>. A classic script, NOT an ES module: Chrome refuses a module over
 *  file:// as cross-origin, which is the same trap that once made every
 *  exported frame come out in a fallback typeface.
 *
 *  THE ANIMATION IS A PURE FUNCTION OF TIME. No CSS keyframes, no wall clock,
 *  no requestAnimationFrame inside the drawing code. `render(t)` given the
 *  same `t` produces the same pixels forever, which is what lets the capture
 *  script restart a dead Chrome mid-render and resume at the frame it died on,
 *  and what lets the studio encode 150 frames as fast as the CPU allows
 *  instead of in real time.
 *
 *  CANVAS, NOT DOM. The previous clip was HTML elements moved with transforms.
 *  That cost a full-page re-raster per frame (a 1080x1920 photograph
 *  re-rasterised 130 times is what used to OOM headless Chrome around frame
 *  90), it could not be exported from the browser at all, and it could not
 *  draw the one thing this rebuild is for: a point lattice that lights up
 *  under a moving sweep.
 */
(function (global) {
  "use strict";

  /* ================================================================== *
   *  Palette — Brand's LIGHT side, verbatim.
   *
   *  ContentView sets .preferredColorScheme(.light): the app is light by
   *  default, and a promo drawn in dark tokens sells an app that does not
   *  exist. The one deliberate exception is `night`, below, which is the
   *  SCAN stage — the app really does dim the camera feed behind the
   *  analysing overlay, so a dark scan is the app, not a liberty.
   * ================================================================== */
  var C = {
    bg:        "#F6F6F8",  // Brand.bg
    card:      "#FFFFFF",  // Brand.card
    track:     "#EFEFF2",  // Brand.bgElevated — the ring's unfilled arc
    stroke:    "#E6E6EA",
    ink:       "#1C1D19",  // Brand.ink
    ink2:      "#66655B",  // Brand.textSecondary
    ink3:      "#9A988C",  // Brand.textTertiary
    accent:    "#2A5A3E",  // Brand.accent, forest green

    // ScoreBand.color, identical in both appearances.
    excellent: "#0FA968",
    good:      "#86C440",
    poor:      "#F5960A",
    bad:       "#E5484D",
    posi:      "#10B981",  // Brand.positive — VerdictView's "good" tone

    /* THE ONLY DARK IN THE FILM IS INSIDE THE PHOTO CARD WHILE IT IS BEING
     * READ, which is the app's own analysing overlay dimming the camera feed.
     *
     * A whole dark stage shipped for one round and the note back was that the
     * colouring did not match the app. It did not: `ContentView` sets
     * `.preferredColorScheme(.light)`, so the app everybody opens is bone and
     * forest green, and a clip drawn on near-black sells an app that does not
     * exist. This is the same mistake the very first promo made with the dark
     * tokens; it is now made twice and should not be made again. If a dark
     * clip is ever wanted, it has to use Brand's REAL dark side
     * (bg #0E0F12, card #191B20, accent #2CB463) and be a deliberate choice,
     * not a design flourish. */
    night:     "#12140F",   // the dim inside the card, and nothing else
    line:      "#E6E6EA"    // Brand.stroke, the hairline everywhere
  };

  /** The real leaf-and-ring mark, as an ALPHA MASK.
   *
   *  The first cut drew a bezier approximation and the note back was "the logo
   *  is completely off" — it was, it was a leaf-V and the mark is a broken
   *  ring with a leaf in the gap. Shipping the actual artwork is the only way
   *  to be sure. It is the alpha channel alone (5.8 KB of base64 rather than
   *  24 KB of RGBA) because the mark is one flat colour and the clip needs to
   *  tint it: forest on bone, a lifted green on black.
   *
   *  IT IS WHITE PIXELS WITH THE MARK IN THE ALPHA CHANNEL, not a greyscale
   *  image. A single-channel PNG draws to a canvas fully OPAQUE, so
   *  `source-in` had nothing to clip against and the header showed a solid
   *  green square where the logo should be. */
  /* THE APP STORE GLYPH, TRACED FROM THE REAL ICON.
   *
   *  The first version was drawn from memory as two strokes and a crossbar —
   *  an "A" outline — and the note back was that it is supposed to be the App
   *  Store logo. It is not an A: it is THREE OVERLAPPING ROUNDED STROKES that
   *  cross above the apex (leaving two small horns at the top), a horizontal
   *  bar, and a DETACHED STUB at the lower left. None of that survives being
   *  remembered, so this is the alpha channel of the actual glyph, lifted out
   *  of /System/Applications/App Store.app/Contents/Resources/AppIcon.icns by
   *  de-saturating against the blue and windowing out the drop shadows.
   *
   *  The blue square underneath is DRAWN rather than embedded, so it stays
   *  crisp at any size: the gradient is sampled from the same icon (#17B6F1
   *  at the top, #1868E3 at the bottom) and the glyph sits at 15.53-84.22%
   *  across and 18.45-78.40% down, also measured.
   *
   *  NOTE this is Apple's artwork. Apple publishes official "Download on the
   *  App Store" badges with their own guidelines; if a clip is ever run as a
   *  PAID ad, use those instead. */
  var APPSTORE_SRC = "data:image/png;base64,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";
  var appStoreGlyph = null;

  var MARK_SRC = "data:image/png;base64,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";
  var markImage = null;
  var markCache = {};

  /** The mark, filled with `color`, at `size` px. Cached: this is called on
      every frame and a composite per frame is a composite too many. */
  function markAt(color, size) {
    if (!markImage) return null;
    var key = color + "@" + Math.round(size);
    if (markCache[key]) return markCache[key];
    var c = document.createElement("canvas");
    c.width = c.height = Math.round(size);
    var x = c.getContext("2d");
    x.drawImage(markImage, 0, 0, c.width, c.height);
    x.globalCompositeOperation = "source-in";
    x.fillStyle = color;
    x.fillRect(0, 0, c.width, c.height);
    markCache[key] = c;
    return c;
  }

  var BANDS = ["bad", "poor", "good", "excellent"];

  /** ScoreBand.from, ported. */
  function bandIndex(score) {
    return score >= 75 ? 3 : score >= 50 ? 2 : score >= 25 ? 1 : 0;
  }
  function bandKey(score)   { return BANDS[bandIndex(score)]; }
  /** ScoreBand.color, and there is only one set of them — the app's. */
  function bandColor(score) { return C[bandKey(score)]; }

  /** ScoreBand.label, ported. */
  var BAND_LABEL = ["Very bad", "Poor", "Good", "Very optimal"];

  /* VerdictView.color(for:): `warn` is the POOR band's amber and `good` is
     Brand.positive, NOT the excellent band's green. Getting this wrong makes
     a green tick and a 92 look like two different greens. */
  var TONE = { bad: C.bad, warn: C.poor, good: C.posi };

  /* ================================================================== *
   *  Tier vocabularies — the "sub-5 to Chad" ask.
   *
   *  EVERY VOCABULARY HAS EXACTLY FOUR RUNGS AND THEY SIT ON THE APP'S OWN
   *  BAND BOUNDARIES (25 / 50 / 75). A five-rung ladder would need a cut
   *  point the engine does not have, and the tier would then disagree with
   *  the colour beside it — a 74 labelled one thing and coloured another is
   *  the single fastest way to look like the numbers are made up.
   *
   *  The rungs describe THE FOOD. "Sub-5" is being said about a bag of
   *  crisps, never about the person holding it.
   * ================================================================== */
  var TIERS = {
    looksmax:  ["SUB-5", "LTN", "HTN", "CHAD"],
    grade:     ["F", "C", "B", "A"],
    optimally: ["VERY BAD", "POOR", "GOOD", "VERY OPTIMAL"],
    verdict:   ["AVOID", "SKIP", "DECENT", "ELITE"]
  };

  /* THERE IS NO KICKER LINE ANY MORE.
   *
   *  There used to be one under the tier word — "IT'S OVER FOR THIS ONE",
   *  "COPING", "PEAK FOOD" — and the instruction was to drop it and anything
   *  else that is not doing work. It was right: the tier word already says
   *  the thing, and a caption restating a caption is the definition of
   *  unnecessary. Removed rather than defaulted off, so it cannot drift back. */

  /* ================================================================== *
   *  Maths
   * ================================================================== */
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  /** Progress through the window [a,b], clamped. The engine's only clock. */
  function span(t, a, b) { return b <= a ? (t >= b ? 1 : 0) : clamp01((t - a) / (b - a)); }

  function outCubic(p)   { return 1 - Math.pow(1 - p, 3); }
  function outQuint(p)   { return 1 - Math.pow(1 - p, 5); }
  function outExpo(p)    { return p >= 1 ? 1 : 1 - Math.pow(2, -10 * p); }
  function inOutCubic(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
  function inCubic(p)    { return p * p * p; }
  function outBack(p, s) {
    var c = s === undefined ? 1.9 : s;
    return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2);
  }
  /** A settle with two decaying bounces. Used only where a hard stop reads as a bug. */
  function outElastic(p) {
    if (p <= 0) return 0;
    if (p >= 1) return 1;
    return Math.pow(2, -9 * p) * Math.sin((p * 10 - 0.75) * (2 * Math.PI) / 3) + 1;
  }

  /** Deterministic PRNG. Seeded from the spec so a lattice is stable across
      frames AND across re-renders of the same clip — a lattice reseeded per
      frame is television static. */
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var x = Math.imul(a ^ (a >>> 15), 1 | a);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hashString(s) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  /* ================================================================== *
   *  Colour helpers
   * ================================================================== */
  function rgba(hex, a) {
    var h = hex.replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
  }
  function mix(a, b, p) {
    var pa = parseInt(a.replace("#", ""), 16), pb = parseInt(b.replace("#", ""), 16);
    var r = Math.round(lerp((pa >> 16) & 255, (pb >> 16) & 255, p));
    var g = Math.round(lerp((pa >> 8) & 255, (pb >> 8) & 255, p));
    var bl = Math.round(lerp(pa & 255, pb & 255, p));
    return "rgb(" + r + "," + g + "," + bl + ")";
  }

  /* ================================================================== *
   *  Type
   *
   *  Satoshi is the app's face and the pages supply it (font.css, embedded as
   *  a data URI so a file:// render cannot silently fall back). The stack
   *  still names system faces after it, because a studio preview on a machine
   *  that failed to load the font should be ugly, not blank.
   * ================================================================== */
  var FAMILY = '"Satoshi", -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, sans-serif';

  function font(ctx, size, weight, tracking) {
    ctx.font = (weight || 700) + " " + size + "px " + FAMILY;
    if ("letterSpacing" in ctx) ctx.letterSpacing = (tracking || 0) + "px";
    return ctx;
  }
  /** Canvas letterSpacing is Chrome 99+/Safari 17.4+. Where it is missing the
      tracked capitals below would silently set solid, so measure and draw per
      character instead. */
  var HAS_TRACKING = (function () {
    try {
      var c = document.createElement("canvas").getContext("2d");
      return "letterSpacing" in c;
    } catch (e) { return false; }
  })();

  function textWidth(ctx, s, tracking) {
    if (HAS_TRACKING || !tracking) return ctx.measureText(s).width;
    var w = 0;
    for (var i = 0; i < s.length; i++) w += ctx.measureText(s[i]).width + tracking;
    return w - tracking;
  }
  function drawText(ctx, s, x, y, tracking) {
    if (HAS_TRACKING || !tracking) { ctx.fillText(s, x, y); return; }
    var cx = x;
    for (var i = 0; i < s.length; i++) {
      ctx.fillText(s[i], cx, y);
      cx += ctx.measureText(s[i]).width + tracking;
    }
  }
  /** Largest size at or below `start` that fits `max`. A product name is
      user data and will one day be 60 characters long. */
  function fitSize(ctx, s, max, start, weight, tracking) {
    var size = start;
    while (size > 10) {
      font(ctx, size, weight, tracking);
      if (textWidth(ctx, s, tracking) <= max) break;
      size -= 1;
    }
    return size;
  }
  function wrap(ctx, s, max) {
    var words = String(s).split(/\s+/), lines = [], line = "";
    for (var i = 0; i < words.length; i++) {
      var probe = line ? line + " " + words[i] : words[i];
      if (ctx.measureText(probe).width > max && line) { lines.push(line); line = words[i]; }
      else line = probe;
    }
    if (line) lines.push(line);
    return lines;
  }

  /* ================================================================== *
   *  Shapes
   * ================================================================== */
  function roundRect(ctx, x, y, w, h, r) {
    var rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    if (ctx.roundRect) { ctx.roundRect(x, y, w, h, rr); return; }
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  /** The four corner brackets of the app's own viewfinder. `grow` pushes them
      outward from the rect (used for the converge-in and the lock kick). */
  function brackets(ctx, r, len, w, color, alpha, grow) {
    var g = grow || 0;
    var x0 = r.x - g, y0 = r.y - g, x1 = r.x + r.w + g, y1 = r.y + r.h + g;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = w;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    var corners = [
      [x0, y0 + len, x0, y0, x0 + len, y0],
      [x1 - len, y0, x1, y0, x1, y0 + len],
      [x1, y1 - len, x1, y1, x1 - len, y1],
      [x0 + len, y1, x0, y1, x0, y1 - len]
    ];
    for (var i = 0; i < corners.length; i++) {
      var c = corners[i];
      ctx.beginPath();
      ctx.moveTo(c[0], c[1]); ctx.lineTo(c[2], c[3]); ctx.lineTo(c[4], c[5]);
      ctx.stroke();
    }
    ctx.restore();
  }

  /* ================================================================== *
   *  The lattice
   *
   *  The single most recognisable beat in every face-scanner on TikTok: a
   *  cloud of landmarks appears over the subject and wires itself together.
   *  Here it is over a jar of honey rather than a jawline, and it is honest
   *  about what it is — a scan animation, not a claim that the app performs
   *  geometry on the photograph.
   *
   *  Points light as the SWEEP PASSES THEM rather than all at once. That one
   *  detail is the difference between "a mesh faded in" and "something is
   *  reading this".
   * ================================================================== */
  function buildLattice(rect, seed, count) {
    var rand = mulberry32(seed);
    var pts = [];
    // A jittered grid rather than pure random: uniform noise clumps, and a
    // clump reads as a rendering fault rather than as a sensor.
    var cols = Math.max(3, Math.round(Math.sqrt(count * (rect.w / rect.h))));
    var rows = Math.max(3, Math.ceil(count / cols));
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var u = (c + 0.5 + (rand() - 0.5) * 0.85) / cols;
        var v = (r + 0.5 + (rand() - 0.5) * 0.85) / rows;
        // Thin the corners so the cloud reads as a soft oval over the subject.
        var dx = (u - 0.5) * 2, dy = (v - 0.5) * 2;
        if (dx * dx + dy * dy > 1.25 && rand() < 0.72) continue;
        pts.push({
          x: rect.x + u * rect.w,
          y: rect.y + v * rect.h,
          // Per-point phase so the settled cloud shimmers instead of sitting dead.
          ph: rand() * Math.PI * 2,
          big: rand() < 0.18
        });
      }
    }
    // Edges to the nearest few neighbours. O(n^2) over ~90 points, once.
    var edges = [];
    for (var i = 0; i < pts.length; i++) {
      var d = [];
      for (var j = 0; j < pts.length; j++) {
        if (i === j) continue;
        var ddx = pts[i].x - pts[j].x, ddy = pts[i].y - pts[j].y;
        d.push({ j: j, d: ddx * ddx + ddy * ddy });
      }
      d.sort(function (a, b) { return a.d - b.d; });
      var k = 2 + (i % 2);
      for (var n = 0; n < k && n < d.length; n++) {
        var a = Math.min(i, d[n].j), b = Math.max(i, d[n].j);
        edges.push(a * 4096 + b);
      }
    }
    // Dedupe.
    var seen = {}, out = [];
    for (var e = 0; e < edges.length; e++) {
      if (seen[edges[e]]) continue;
      seen[edges[e]] = 1;
      out.push([Math.floor(edges[e] / 4096), edges[e] % 4096]);
    }
    return { pts: pts, edges: out };
  }

  /* ================================================================== *
   *  Spec
   * ================================================================== */
  /* SQUARE FIRST.
   *
   *  1:1 is the default everywhere now, on instruction. It is the shape that
   *  drops into a 9:16 edit without being cropped and into a 1:1 or 4:5 feed
   *  without being letterboxed, which is what an insert cut between the
   *  founder's own clips actually needs. The other two stay available; nothing
   *  reaches for them unless it is asked to.
   *
   *  Every layout below is therefore designed for the square first and given
   *  room in the taller shapes, rather than the other way round. */
  var ASPECTS = { "1:1": [1080, 1080], "4:5": [1080, 1350], "9:16": [1080, 1920] };

  /* NO SUGAR AXIS.
   *
   *  Dropped on the founder's instruction: this app leans on Peat-ish
   *  metabolic thinking, where sugar is an energy source and whether it counts
   *  against a food depends entirely on the food. A bar labelled "Sugar"
   *  sitting between "Seed oils" and "Additives" makes it a contaminant by
   *  association, which is an argument the app does not make. */
  var DEFAULT_METRICS = [
    { label: "Seed oils",    value: 0 },
    { label: "Additives",    value: 0 },
    { label: "Processing",   value: 0 },
    { label: "Whole food",   value: 0 },
    { label: "Protein",      value: 0 }
  ];

  function normalise(raw) {
    var s = {};
    var r = raw || {};
    s.format    = ["tier", "metrics", "ring", "versus", "card"].indexOf(r.format) >= 0 ? r.format : "tier";
    s.aspect    = ASPECTS[r.aspect] ? r.aspect : "1:1";
    s.score     = clamp(Math.round(+r.score), 0, 100);
    if (isNaN(s.score)) s.score = 0;
    s.name      = r.name || "";
    s.brand     = r.brand || "";
    s.image     = r.image || "";
    s.fit       = r.fit === "cover" ? "cover" : "contain";
    s.tiers     = TIERS[r.tiers] ? r.tiers : "looksmax";
    s.method    = r.method || "barcode";
    s.wordmark  = r.wordmark === undefined ? true : !!r.wordmark;
    /* OFF BY DEFAULT. The claim is true and it is the app's own line, but at
       23px in a three-second clip nobody reads it, and it was one of the
       things meant by "any other unnecessary text". The footer keeps the scan
       METHOD, which is short and actually says something. `trust=1` puts the
       claim back. */
    s.trust     = r.trust === undefined ? false : !!r.trust;
    s.intensity = r.intensity === undefined ? 1 : clamp01(+r.intensity);
    s.duration  = clamp(+r.duration || 3.0, 1.5, 12);
    s.hold      = Math.max(0, +r.hold || 0);
    s.seed      = r.seed !== undefined ? (+r.seed | 0) : hashString((s.name || "optimally") + s.score);
    s.reasons   = (r.reasons || []).slice(0, 4).map(function (x) {
      return { tone: TONE[x.tone] ? x.tone : "warn", text: String(x.text || "") };
    });
    s.metrics   = (r.metrics && r.metrics.length ? r.metrics : DEFAULT_METRICS).slice(0, 6)
      .map(function (m) {
        return {
          label: String(m.label || ""),
          value: clamp(Math.round(+m.value || 0), 0, 100),
          note: m.note ? String(m.note) : ""
        };
      });
    s.b = r.b ? {
      name:  r.b.name || "",
      brand: r.b.brand || "",
      score: clamp(Math.round(+r.b.score) || 0, 0, 100),
      image: r.b.image || "",
      fit:   r.b.fit === "cover" ? "cover" : "contain"
    } : null;
    return s;
  }

  /** URL query -> spec. Reasons and metrics travel as `tone:text` / `label:value`
      pipe-joined, because a nested JSON blob in a query string is unreadable in
      a terminal and this is a string the founder types by hand. */
  function specFromQuery(qs) {
    var Q = new URLSearchParams(qs || "");
    var g = function (k, d) { return Q.has(k) ? Q.get(k) : d; };
    var raw = {
      format: g("format"), aspect: g("aspect"), score: g("score", 0),
      name: g("name"), brand: g("brand"), image: g("image") || g("photo"),
      // `layout` is make_promo_video.py's word for the same decision: it
      // picks `bleed` for a photo the user took and `card` for a packshot.
      fit: g("fit") || (Q.get("layout") === "bleed" ? "cover"
                      : Q.get("layout") === "card" ? "contain" : undefined),
      tiers: g("tiers"),
      method: g("method"), intensity: g("intensity"),
      duration: g("duration") || g("seconds"), hold: g("hold"), seed: g("seed"),
      wordmark: Q.has("wordmark") ? g("wordmark") !== "0" : undefined,
      trust: Q.has("trust") ? g("trust") !== "0" : undefined
    };
    if (Q.has("reasons")) {
      /* BOTH CONVENTIONS, BECAUSE BOTH EXIST IN THE REPO.
         This page's own links write `tone:text`; make_promo_video.py's
         --from-scan has always written `text:tone`, and a reason's text
         legitimately contains a colon ("Very high sugar: 25g per 100g"), so
         neither a first-colon nor a last-colon split is safe on its own. The
         tone is one of three known words, so look for it at either end and
         fall back to `warn` — which is the tone that reads as "we are telling
         you something", the safest thing to guess. */
      raw.reasons = g("reasons").split("|").filter(Boolean).map(function (p) {
        var tail = p.slice(p.lastIndexOf(":") + 1).trim();
        if (TONE[tail] && p.indexOf(":") >= 0) {
          return { tone: tail, text: p.slice(0, p.lastIndexOf(":")).trim() };
        }
        var head = p.slice(0, p.indexOf(":")).trim();
        if (TONE[head]) return { tone: head, text: p.slice(p.indexOf(":") + 1).trim() };
        return { tone: "warn", text: p };
      });
    }
    if (Q.has("metrics")) {
      raw.metrics = g("metrics").split("|").filter(Boolean).map(function (p) {
        var i = p.lastIndexOf(":");
        return i < 0 ? { label: p, value: 0 } : { label: p.slice(0, i), value: +p.slice(i + 1) };
      });
    }
    if (Q.has("bscore") || Q.has("bname") || Q.has("bimage")) {
      raw.b = { name: g("bname"), brand: g("bbrand"), score: g("bscore", 0),
                image: g("bimage"), fit: g("bfit") };
    }
    return normalise(raw);
  }

  /* ================================================================== *
   *  The timeline
   *
   *  In seconds, in one place, so retiming the film is editing numbers here
   *  and nothing else. Everything before `cut` is shared by every format:
   *  the scan is the app's signature and it should be the same shot no
   *  matter which reveal follows it.
   *
   *  THREE SECONDS, AND THE BUDGET IS SPENT ON TWO STATES RATHER THAN ON
   *  TRANSITIONS. An insert is cut between the founder's own clips, so it
   *  competes with the cut and not with the feed — but the first cut spent
   *  its whole 2.6s moving: eight things happened in the first second and the
   *  finished frame held for four tenths of one. Both halves read as rushed
   *  for the same reason, and the fix was not more seconds, it was fewer
   *  events.
   *
   *  Now: ONE slow sweep over 0.8s with four checks under it, and a held
   *  final frame of roughly three quarters of a second. Same order of length,
   *  half the number of moving parts.
   *
   *  `hold=` extends the tail. That is the honest way to make a clip longer:
   *  more time on the finished frame, never a slower count-up.
   * ================================================================== */
  function timeline(spec) {
    var T = {
      /* THE SCAN OPENS ON FRAME 0 ALREADY RUNNING.
       *
       * `brackets` and `dim` used to begin at 0.02 and ramp for a quarter of a
       * second, so the film opened on a plain photograph and then faded a HUD
       * in over it. Two tenths of a second of nothing is a long time at the
       * top of a three second clip, and it is the part a viewer decides on.
       * Both now start at zero: the first frame is a scan in progress. */
      dim:       [0.00, 0.16],
      brackets:  [0.00, 0.24],
      dots:      [0.04, 0.30],
      /* ONE PASS, AND IT NOW TAKES 0.62 RATHER THAN 0.80.
       *
       * The history is worth keeping because it has swung both ways. The
       * first cut ran the sweep in 0.48s with a fast confirm back up and five
       * checks ticking inside the same window — eight events in under a
       * second, and the note back was that the analysing part looked too
       * quick. So it was slowed to 0.80 with one pass, and the note back was
       * "slow and just weird to the eye".
       *
       * BOTH NOTES WERE ABOUT THE SAME FAULT and neither was really about
       * duration: the lattice used to stay lit everywhere the sweep had been,
       * so by the end of the pass the product was under a full web of wires
       * (see `drawScan`). Busy reads as frantic when it is fast and as
       * dragging when it is slow. With the mesh now travelling WITH the sweep
       * instead of accumulating behind it, the pass can be shorter without
       * going back to frantic, and the 0.20 saved goes to the verdict, which
       * is the part anybody actually stops for. */
      sweepDown: [0.03, 0.65],
      sweepUp:   [10, 10],       // off. Kept so nothing downstream needs a guard.
      readout:   [0.04, 0.68],
      lock:      [0.65, 0.80],
      flash:     [0.76, 0.88],   // the reveal beat: one short colour pop
      cut:        0.80
    };
    if (spec.format === "tier") {
      /* THE PHOTOGRAPH'S TRAVEL GETS 0.54 OF THE 3.0, and every other beat is
       * arranged around it. It used to get 0.26 on an ease that spent 91% of
       * that in the first 0.1 — the move was over before the eye found it.
       * A move this large is the biggest single gesture in the film and it is
       * now the longest one. */
      T.settle   = [0.78, 1.34];
      T.slam     = [0.98, 1.34];   // the word lands as the picture settles
      T.score    = [1.26, 1.86];
      /* THE ROWS COME IN WHILE THE NUMBER IS STILL COUNTING.
       *
       * They used to start well after the card had appeared, which left a
       * full-height white panel standing empty under the score for about half
       * a second — a hole in the middle of the frame at the exact moment the
       * verdict is supposed to be arriving. Overlapping them means the card
       * fills as the number climbs, and both finish together. */
      T.rows     =  1.48; T.rowStep = 0.10;
      T.foot     = [2.06, 2.22];
      T.end      =  3.00;
    } else if (spec.format === "metrics") {
      T.light    = [0.76, 0.86];  // the stage comes UP to bone at the cut
      T.settle   = [0.78, 1.34];
      T.head     = [1.10, 1.34];
      T.rows     =  1.36; T.rowStep = 0.10;
      T.score    = [1.78, 2.24];
      T.foot     = [2.30, 2.46];
      T.end      =  3.00;
    } else if (spec.format === "versus") {
      T.light    = [0.76, 0.86];
      T.settle   = [0.78, 1.34];
      T.score    = [1.16, 1.84];
      T.crown    = [1.88, 2.08];
      T.foot     = [2.12, 2.30];
      T.end      =  3.00;
    } else if (spec.format === "card") {
      T.light    = [0.76, 0.86];
      T.settle   = [0.78, 1.28];
      T.score    = [1.08, 1.76];
      T.band     = [1.70, 1.86];
      T.foot     = [1.92, 2.08];
      T.end      =  3.00;
    } else { // ring
      T.light    = [0.76, 0.86];
      T.settle   = [0.78, 1.34];
      T.sheet    = [0.82, 1.36];
      T.score    = [1.04, 1.74];
      T.band     = [1.68, 1.84];
      T.lead     = [1.74, 1.92];
      T.rows     =  1.94; T.rowStep = 0.09;
      T.foot     = [2.32, 2.48];
      T.end      =  3.00;
    }
    /* LENGTH IS A DIAL, NOT A CONSTANT.
     *
     * This has now been retimed by guess three times — 4.3s, then 2.6s on
     * "make it 2 or 3 seconds", then 3.0s, and the note back was still "too
     * quick". Guessing again is not a plan. Everything above is a SHAPE, in
     * relative units; `duration` scales the whole thing so the film keeps its
     * proportions at any length, and the studio has a slider on it.
     *
     * Back to 3.0s on instruction, now that the kicker and the small print
     * are gone and there is less to read: about 1s of scanning, 1s of the
     * answer arriving, and 1s of a finished frame that does not move. Change
     * the number, not the beats. */
    var base = T.end;
    var k = clamp(+spec.duration || 3.0, 1.5, 12) / base;
    for (var key in T) {
      var v = T[key];
      if (typeof v === "number") T[key] = v * k;
      else if (v && v.length === 2) T[key] = [v[0] * k, v[1] * k];
    }
    // The hold is added AFTER the scale, so "half a second more on the end"
    // means exactly that at any length.
    T.end += spec.hold;
    return T;
  }

  /* ================================================================== *
   *  Image loading
   * ================================================================== */
  /* `load` MEANS THE BYTES ARRIVED, NOT THAT THERE IS A BITMAP.
   *
   * Decoding is a separate step, and whether `drawImage` waits for it is a
   * per-browser decision: Chromium decodes synchronously inside drawImage,
   * Firefox can decode asynchronously and draw nothing in the meantime. The
   * export is a promise chain with no macrotask turn in it, so in principle an
   * async decoder can be starved for a whole encode. `decode()` is the promise
   * that says the bitmap is ready, so it is awaited before the clip reports
   * itself ready.
   *
   * IT IS RACED AGAINST A TIMEOUT, AND THAT PART IS NOT OPTIONAL.
   * `img.decode()` NEVER SETTLES on a backgrounded tab in Chromium — measured,
   * not assumed: `onload` fires, `complete` is true, `naturalWidth` is right,
   * and the promise simply never resolves or rejects. Awaiting it flatly is
   * how an export in a hidden tab hangs on "Loading the encoder…" forever,
   * which is a worse bug than the one this guards against. So: take the decode
   * if it comes promptly, and otherwise carry on with an image that has loaded
   * and let drawImage deal with it, exactly as before this existed. */
  var DECODE_MS = 1500;

  function decoded(img, resolve) {
    if (!img.decode) { resolve(img); return; }
    var done = false;
    function finish() { if (!done) { done = true; resolve(img); } }
    img.decode().then(finish, finish);
    setTimeout(finish, DECODE_MS);
  }

  function loadImage(src) {
    return new Promise(function (resolve) {
      if (!src) { resolve(null); return; }
      var img = new Image();
      // Harmless over file:// and required for a studio preview of a remote
      // packshot; a failure here resolves null and the clip draws its
      // placeholder rather than dying.
      img.crossOrigin = "anonymous";
      img.onload = function () { decoded(img, resolve); };
      img.onerror = function () {
        // Retry once WITHOUT the CORS attribute: a server that sends no
        // Access-Control-Allow-Origin refuses the request outright, and a
        // tainted canvas is still better than no photograph in a preview.
        var plain = new Image();
        plain.onload = function () { decoded(plain, resolve); };
        plain.onerror = function () { resolve(null); };
        plain.src = src;
      };
      img.src = src;
    });
  }

  function fontsReady() {
    if (!document.fonts) return Promise.resolve();
    // Ask for the extremes explicitly. `document.fonts.ready` alone resolves
    // before a weight nothing has drawn yet is loaded, and the first frame
    // then measures 900-weight text in the fallback face.
    var want = ["900 100px Satoshi", "800 40px Satoshi", "700 30px Satoshi", "500 24px Satoshi"];
    return Promise.all(want.map(function (f) {
      try { return document.fonts.load(f); } catch (e) { return Promise.resolve(); }
    })).then(function () { return document.fonts.ready; }).catch(function () {});
  }

  /* ================================================================== *
   *  Photo drawing
   * ================================================================== */
  /** Source rect for `cover` / `contain` inside a destination box. */
  function fitRect(img, box, mode) {
    var ir = img.width / img.height, br = box.w / box.h;
    if (mode === "cover") {
      var sw = img.width, sh = img.height;
      if (ir > br) { sw = img.height * br; } else { sh = img.width / br; }
      return { sx: (img.width - sw) / 2, sy: (img.height - sh) / 2, sw: sw, sh: sh,
               dx: box.x, dy: box.y, dw: box.w, dh: box.h };
    }
    var dw = box.w, dh = box.h;
    if (ir > br) { dh = box.w / ir; } else { dw = box.h * ir; }
    return { sx: 0, sy: 0, sw: img.width, sh: img.height,
             dx: box.x + (box.w - dw) / 2, dy: box.y + (box.h - dh) / 2, dw: dw, dh: dh };
  }

  /** THE PHOTO IS A CARD, NEVER THE BACKGROUND — unless the founder shot it.
   *
   *  Most scans are barcodes and a barcode's picture is a packshot on a white
   *  studio sweep. Full-bleed that and the clip is a white rectangle with a
   *  jar in the middle. A photo the user actually took has a room in it and
   *  earns the frame, which is what `fit=cover` selects. */
  function drawPhotoCard(ctx, img, box, radius, opts) {
    var o = opts || {};
    ctx.save();
    if (o.shadow !== false) {
      // Scaled to the card for the same reason the corner radius is: a fixed
      // 46px blur is 4.9% of a full-frame card and 19% of a thumbnail, so a
      // shrinking card grew a bigger and bigger shadow as it went.
      ctx.shadowColor = rgba("#0A0C0A", o.dark ? 0.55 : 0.14);
      ctx.shadowBlur = box.w * 0.048;
      ctx.shadowOffsetY = box.w * 0.019;
    }
    roundRect(ctx, box.x, box.y, box.w, box.h, radius);
    ctx.fillStyle = o.dark ? "#1A1D19" : C.card;
    ctx.fill();
    ctx.restore();

    ctx.save();
    roundRect(ctx, box.x, box.y, box.w, box.h, radius);
    ctx.clip();
    if (img) {
      var inset = o.fit === "cover" ? 0 : Math.round(box.w * 0.055);
      var inner = { x: box.x + inset, y: box.y + inset, w: box.w - inset * 2, h: box.h - inset * 2 };
      var z = o.zoom || 1;
      if (z !== 1) {
        var cx = inner.x + inner.w / 2, cy = inner.y + inner.h / 2;
        inner = { x: cx - inner.w * z / 2, y: cy - inner.h * z / 2, w: inner.w * z, h: inner.h * z };
      }
      var f = fitRect(img, inner, o.fit);
      if (o.desat) {
        // A studio ramp, not a filter chain: draw the photo, then wash it with
        // the stage colour. `ctx.filter` is unevenly supported in the exporters
        // this has to survive and a silently ignored filter is a wrong frame.
        ctx.drawImage(img, f.sx, f.sy, f.sw, f.sh, f.dx, f.dy, f.dw, f.dh);
        ctx.globalAlpha = o.desat * 0.55;
        ctx.fillStyle = C.night;
        ctx.fillRect(box.x, box.y, box.w, box.h);
        ctx.globalAlpha = 1;
      } else {
        ctx.drawImage(img, f.sx, f.sy, f.sw, f.sh, f.dx, f.dy, f.dw, f.dh);
      }
    } else {
      drawPlaceholder(ctx, box, o.dark);
    }
    ctx.restore();

    if (o.stroke !== false) {
      ctx.save();
      roundRect(ctx, box.x + 0.5, box.y + 0.5, box.w - 1, box.h - 1, radius);
      ctx.strokeStyle = o.dark ? rgba("#FFFFFF", 0.10) : C.stroke;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    }
  }

  /** Deliberately a DRAWING and deliberately unfinished-looking.
   *
   *  A stock food photograph in an advert is somebody's licensed image, and a
   *  diagram of food is a far weaker hook than food — which is the point. If
   *  this ships in a clip, the clip is missing its photograph and should look
   *  like it is. */
  function drawPlaceholder(ctx, box, dark) {
    var cx = box.x + box.w / 2, cy = box.y + box.h / 2, r = Math.min(box.w, box.h) * 0.19;
    ctx.save();
    ctx.strokeStyle = dark ? rgba("#FFFFFF", 0.22) : rgba(C.ink3, 0.45);
    ctx.lineWidth = Math.max(3, r * 0.09);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(cx - r, cy - r * 0.35);
    ctx.lineTo(cx, cy - r * 0.85);
    ctx.lineTo(cx + r, cy - r * 0.35);
    ctx.lineTo(cx + r, cy + r * 0.75);
    ctx.lineTo(cx, cy + r * 1.25);
    ctx.lineTo(cx - r, cy + r * 0.75);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - r, cy - r * 0.35); ctx.lineTo(cx, cy + r * 0.15);
    ctx.lineTo(cx + r, cy - r * 0.35);
    ctx.moveTo(cx, cy + r * 0.15); ctx.lineTo(cx, cy + r * 1.25);
    ctx.stroke();
    ctx.restore();
  }

  /* ================================================================== *
   *  THE SEARCH PILL
   *
   *  Replaces the old "Scanned with Optimally" line, and it is a better piece
   *  of branding for the same pixels: a wordmark tells you the name, a search
   *  bar with an App Store badge in it tells you the name AND where to type
   *  it. It is the convention every app ad on TikTok uses, and it is what was
   *  asked for.
   *
   *  ON FROM FRAME ZERO AND IT NEVER ANIMATES. A brand element that fades in
   *  means the first nine frames of somebody else's video are a bare
   *  photograph with no app in them.
   * ================================================================== */
  function drawSearchPill(ctx, g, dark) {
    if (!g.spec.wordmark) return;
    var W = g.W;
    var h = Math.round(W * 0.088);
    var x = g.pad, y = g.pad * 0.72, w = W - g.pad * 2;

    ctx.save();
    roundRect(ctx, x, y, w, h, h / 2);
    ctx.fillStyle = dark ? "#161821" : "#FFFFFF";
    if (!dark) { ctx.shadowColor = rgba(C.ink, 0.10); ctx.shadowBlur = 26; ctx.shadowOffsetY = 6; }
    ctx.fill();
    ctx.shadowColor = "transparent";
    roundRect(ctx, x + 0.75, y + 0.75, w - 1.5, h - 1.5, h / 2);
    ctx.strokeStyle = dark ? C.line : C.stroke;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // The magnifier, drawn: a web page has no SF Symbols and a missing glyph
    // in an advert is a tofu box where the icon should be.
    var r = h * 0.19, cx = x + h * 0.60, cy = y + h / 2;
    ctx.strokeStyle = dark ? rgba("#FFFFFF", 0.55) : C.ink3;
    ctx.lineWidth = Math.max(2.5, h * 0.058);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, cy - r * 0.12, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + r * 0.72, cy + r * 0.60);
    ctx.lineTo(cx + r * 1.35, cy + r * 1.22);
    ctx.stroke();

    ctx.textBaseline = "middle";
    // The App Store listing's own name, not just the brand: a search bar with
    // one word in it is a logo, and a search bar with a query in it tells
    // somebody exactly what to type.
    var query = "Optimally: Food Scanner";
    var tx = cx + r * 1.9;
    var room = (x + w - h * 1.05) - tx;
    var fs = fitSize(ctx, query, room, Math.round(h * 0.38), 800, -0.4);
    ctx.fillStyle = dark ? "#FFFFFF" : C.ink;
    drawText(ctx, query, tx, cy + fs * 0.03, -0.4);

    // A caret, because a search field with nothing blinking in it is a label.
    var tw = textWidth(ctx, query, -0.4);
    ctx.fillStyle = dark ? rgba("#FFFFFF", 0.32) : rgba(C.ink, 0.28);
    ctx.fillRect(tx + tw + fs * 0.22, cy - fs * 0.52, Math.max(2, W * 0.0022), fs * 1.04);

    drawAppStoreBadge(ctx, x + w - h * 0.86, y + h * 0.16, h * 0.68);
    ctx.restore();
  }

  /** The App Store mark: a drawn square, the real glyph. See `APPSTORE_SRC`. */
  function drawAppStoreBadge(ctx, x, y, s) {
    ctx.save();
    roundRect(ctx, x, y, s, s, s * 0.225);
    var grad = ctx.createLinearGradient(x, y, x, y + s);
    grad.addColorStop(0, "#17B6F1");
    grad.addColorStop(1, "#1868E3");
    ctx.fillStyle = grad;
    ctx.fill();
    if (appStoreGlyph) {
      // Measured off the real icon, not eyeballed.
      var gx = x + s * 0.1553, gy = y + s * 0.1845;
      ctx.drawImage(appStoreGlyph, gx, gy, s * (0.8422 - 0.1553), s * (0.7840 - 0.1845));
    }
    ctx.restore();
  }

  /* THE TRUST LINE, AND IT IS NOT THE OLD ONE.
   *
   *  Both this clip and ScanClip.swift used to print "SCORED BY FIXED RULES,
   *  NEVER AI". The app retired that claim on purpose — ingredient ratings
   *  and swap suggestions are model-written (IngredientVerdictService), so a
   *  blanket "never AI" is false, and VerdictView carries a comment saying in
   *  as many words not to reinstate it. What IS true, and is the harder thing
   *  for a competitor to match, is that a rating is written once and then
   *  frozen for everyone. */
  var TRUST = "SAME INGREDIENT, SAME RATING, EVERY TIME";

  function drawTrust(ctx, g, alpha, dark) {
    if (alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.textBaseline = "alphabetic";
    var size = Math.round(g.W * 0.0235);
    font(ctx, size, 800, 1.9);
    ctx.fillStyle = dark ? rgba("#FFFFFF", 0.38) : C.ink3;
    var method = g.spec.method ? "SCANNED BY " + g.spec.method.toUpperCase() : "";
    var label = g.spec.trust ? (method ? method + "  ·  " + TRUST : TRUST) : method;
    if (!label) { ctx.restore(); return; }
    var w = textWidth(ctx, label, 1.9);
    if (w > g.W - g.pad * 2) { label = method || TRUST; w = textWidth(ctx, label, 1.9); }
    drawText(ctx, label, (g.W - w) / 2, g.H - g.pad - size * 0.4, 1.9);
    ctx.restore();
  }

  /* ================================================================== *
   *  THE SCAN
   *
   *  This is the shot the rebuild exists for. Five layers, all inside the
   *  photo card, all drawn in WHITE while the scan is running:
   *
   *    1. a dim + vignette that takes the room down around the subject
   *    2. corner brackets converging from outside the card
   *    3. a lattice whose points light as the sweep passes them
   *    4. the sweep itself — a bright leading edge with a trailing wake
   *    5. a telemetry column that ticks off what is being read
   *
   *  WHITE, NOT ACCENT. #2A5A3E is a dark colour and it disappears on a dark
   *  photograph. The brackets take the band colour only at the lock, which is
   *  the same white -> verdict-colour move AnalyzingOverlay makes in the app.
   * ================================================================== */

  /* What the scan says it is reading. These are the real stages of a scan and
     they are named the way the app names them, so the HUD is a description
     rather than set dressing. */
  /* FOUR, NOT FIVE, AND SUGAR IS NOT ONE OF THEM.
   *
   *  Five ticking inside half a second was most of why the scan read as
   *  frantic; four across 0.8s is a machine working through a list.
   *
   *  SUGARS came out on the founder's instruction: this app leans on Peat-ish
   *  metabolic thinking, where sugar is an energy source and the answer
   *  genuinely depends on the food. A HUD that lists it beside seed oils and
   *  additives frames it as a contaminant, which is not what the app argues.
   *  NOTE that ReasonEngine still emits "Very high sugar: Ng per 100g" above
   *  22.5g/100g of NON-INTRINSIC sugar (Reasons.swift:158) — so a real scan
   *  can still say it, and that is an app decision, not a clip one. */
  var CHECKS = ["INGREDIENTS", "OILS", "ADDITIVES", "PROCESSING"];

  function drawScan(ctx, g, t) {
    var T = g.T, spec = g.spec, k = spec.intensity;
    if (k <= 0) return;
    var box = g.scanBox;                       // the photo card, right now
    var inset = box.w * 0.085;
    var hud = { x: box.x + inset, y: box.y + inset, w: box.w - inset * 2, h: box.h - inset * 2 };

    var lockP = span(t, T.lock[0], T.lock[1]);
    // Out fast, and finished before the reveal: a HUD still dissolving over
    // the verdict is the app appearing not to have finished thinking.
    // Finished before the card starts travelling, not during it. A lattice
    // being compressed as the photograph shrinks under it is a second thing
    // happening in the same frames as the biggest gesture in the film.
    var live  = 1 - clamp01(span(t, T.lock[1] - 0.08, T.lock[1] + 0.00));
    if (live <= 0) return;

    ctx.save();
    roundRect(ctx, box.x, box.y, box.w, box.h, g.scanRadius);
    ctx.clip();

    /* ---- 1. dim + vignette ------------------------------------------ *
     * THE STAGE IS ALREADY DARK, so this is a falloff and not a veil: 0.20
     * flat, and the vignette does the rest. The first cut put 0.62 of flat
     * black over the photograph on a BONE stage, which left a small grey card
     * floating in a bright empty frame — the subject was the dimmest thing on
     * screen. On a dark stage the card is the lit thing, which is how a scan
     * actually looks.
     *
     * inOutCubic, NOT outCubic. Frame statistics on the old clip found mean
     * brightness dropping 11 points between frame 0 and frame 1, so the film
     * flinched darker the instant it was spliced into somebody else's video.
     * The ease is chosen for the incoming cut, not for the beat. */
    var dim = inOutCubic(span(t, T.dim[0], T.dim[1])) * 0.20 * k * live;
    if (dim > 0) {
      ctx.fillStyle = rgba(C.night, dim);
      ctx.fillRect(box.x, box.y, box.w, box.h);
      var vg = ctx.createRadialGradient(
        box.x + box.w / 2, box.y + box.h / 2, box.w * 0.18,
        box.x + box.w / 2, box.y + box.h / 2, box.w * 0.78);
      vg.addColorStop(0, rgba(C.night, 0));
      vg.addColorStop(0.58, rgba(C.night, dim * 1.6));
      vg.addColorStop(1, rgba(C.night, Math.min(0.86, dim * 3.8)));
      ctx.fillStyle = vg;
      ctx.fillRect(box.x, box.y, box.w, box.h);
    }

    /* ---- 3+4. lattice and sweep ------------------------------------- */
    var lat = g.lattice;
    // Sweep position as a fraction of the HUD's height. Two passes: a slow
    // read down, then a fast confirm back up. One pass reads as a wipe; two
    // read as a machine going over its own work.
    var downP = span(t, T.sweepDown[0], T.sweepDown[1]);
    var upP   = span(t, T.sweepUp[0], T.sweepUp[1]);
    var sweepY = null, sweepAlpha = 0;
    if (t >= T.sweepDown[0] && t < T.sweepUp[0]) {
      sweepY = hud.y + inOutCubic(downP) * hud.h;
      // IN over the first 6% of the pass, OUT over the last 12%. Without the
      // fade the line reached the bottom of the card and simply stayed there
      // — a bright white rule sitting under the photograph for the whole
      // reveal, which is what the second pass used to hide.
      sweepAlpha = (downP < 0.06 ? downP / 0.06 : 1) * (1 - clamp01((downP - 0.88) / 0.12));
    } else if (t >= T.sweepUp[0] && T.sweepUp[0] < T.end) {
      sweepY = hud.y + (1 - outCubic(upP)) * hud.h;
      sweepAlpha = 1 - clamp01((upP - 0.82) / 0.18);
    }
    // The high-water mark of the DOWN pass is what lights the lattice. The up
    // pass is a flourish; if it re-lit points the cloud would blink off.
    var litY = hud.y + inOutCubic(downP) * hud.h;

    var dotsIn = outCubic(span(t, T.dots[0], T.dots[1]));
    if (dotsIn > 0) {
      var contract = 1 - lockP * 0.045;                 // the cloud pulls in at the lock
      var cxm = hud.x + hud.w / 2, cym = hud.y + hud.h / 2;
      var P = new Array(lat.pts.length);
      for (var i = 0; i < lat.pts.length; i++) {
        var p = lat.pts[i];
        /* A BAND OF ACTIVITY THAT TRAVELS, NOT A WEB THAT ACCUMULATES.
         *
         * Points used to settle to 0.55 of full and stay there, so every point
         * the sweep had crossed kept glowing: by the end of the pass the
         * entire packshot was under a lit constellation with a glow on every
         * wire. That is the thing that read as "weird to the eye" — the
         * product, which is the only reason the clip exists, spent the whole
         * scan buried under a network diagram.
         *
         * They now light as the line reaches them and fall away to 0.10 just
         * behind it, over a fifth of the card rather than a third. What you
         * see is a bright band moving down the pack, which is both quieter
         * and a better picture of what a scanner does. */
        var passed = clamp01((litY - p.y) / (hud.h * 0.08));
        var heat = passed * (1 - 0.90 * clamp01((litY - p.y) / (hud.h * 0.20)));
        var shimmer = 0.86 + 0.14 * Math.sin(t * 5.2 + p.ph);
        P[i] = {
          x: cxm + (p.x - cxm) * contract,
          y: cym + (p.y - cym) * contract,
          a: heat * dotsIn * shimmer * live * k,
          big: p.big
        };
      }
      // Edges first so the points sit on top of their own wires.
      ctx.lineWidth = Math.max(1, g.W * 0.0019);
      ctx.save();
      for (var e = 0; e < lat.edges.length; e++) {
        var a = P[lat.edges[e][0]], b = P[lat.edges[e][1]];
        var ea = Math.min(a.a, b.a) * 0.55;
        if (ea < 0.02) continue;
        ctx.strokeStyle = lockP > 0 ? rgba(g.band, ea * (0.4 + lockP * 0.6)) : rgba("#FFFFFF", ea);
        // A faint glow on the wires; without it the mesh is hairlines on a
        // photograph and disappears the moment the clip is compressed.
        ctx.shadowColor = rgba("#FFFFFF", ea * 0.5);
        ctx.shadowBlur = g.W * 0.004;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      ctx.restore();
      var rDot = g.W * 0.0044;
      for (var d = 0; d < P.length; d++) {
        var q = P[d];
        if (q.a < 0.03) continue;
        var rr = rDot * (q.big ? 1.75 : 1);
        ctx.fillStyle = lockP > 0 ? rgba(g.band, q.a) : rgba("#FFFFFF", q.a);
        ctx.beginPath();
        ctx.arc(q.x, q.y, rr, 0, Math.PI * 2);
        ctx.fill();
        if (q.big && q.a > 0.4) {                       // a halo on the anchors only
          ctx.strokeStyle = rgba(lockP > 0 ? g.band : "#FFFFFF", q.a * 0.30);
          ctx.lineWidth = Math.max(1, g.W * 0.0014);
          ctx.beginPath();
          ctx.arc(q.x, q.y, rr * 2.9, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }

    if (sweepY !== null && sweepAlpha > 0.01) {
      var wake = hud.h * 0.19;
      var goingDown = t < T.sweepUp[0];
      var gy0 = goingDown ? sweepY - wake : sweepY;
      var grad = ctx.createLinearGradient(0, gy0, 0, gy0 + wake);
      if (goingDown) {
        grad.addColorStop(0, rgba("#FFFFFF", 0));
        grad.addColorStop(1, rgba("#FFFFFF", 0.20 * sweepAlpha * k * live));
      } else {
        grad.addColorStop(0, rgba("#FFFFFF", 0.20 * sweepAlpha * k * live));
        grad.addColorStop(1, rgba("#FFFFFF", 0));
      }
      ctx.fillStyle = grad;
      ctx.fillRect(box.x, gy0, box.w, wake);

      ctx.save();
      ctx.shadowColor = rgba("#FFFFFF", 0.85 * sweepAlpha);
      ctx.shadowBlur = g.W * 0.022;
      ctx.fillStyle = rgba("#FFFFFF", 0.95 * sweepAlpha * live);
      ctx.fillRect(box.x, sweepY - g.W * 0.0018, box.w, g.W * 0.0036);
      ctx.restore();
    }

    /* ---- 2. brackets ------------------------------------------------- *
     * They converge from outside the card, then kick outward at the lock and
     * take the band colour. Everything else in the scan is white. */
    /* THE BRACKETS ARE ALREADY THERE ON FRAME 0.
     *
     * Easing them from zero means the film opens on a plain photograph and
     * only becomes a scan a few frames later. That first frame is the one the
     * eye lands on and the one a thumbnail is cut from, and it should say
     * what this is. They start at 40% and grow in from there, so there is
     * still an arrival — it just happens to something already on screen. */
    var bIn = 0.40 + 0.60 * outQuint(span(t, T.brackets[0], T.brackets[1]));
    if (bIn > 0) {
      var grow = (1 - bIn) * box.w * 0.10 + outBack(lockP) * box.w * 0.022;
      var col = lockP > 0.02 ? mix("#FFFFFF", g.band, outCubic(lockP)) : "#FFFFFF";
      brackets(ctx, hud, hud.w * 0.16, g.W * 0.0055,
               col, bIn * live * (0.85 + lockP * 0.15), grow);
    }

    /* ---- the lock pulse --------------------------------------------- */
    if (lockP > 0 && lockP < 1) {
      var pr = outExpo(lockP);
      ctx.strokeStyle = rgba(g.band, (1 - lockP) * 0.55);
      ctx.lineWidth = g.W * 0.006 * (1 - lockP);
      roundRect(ctx, hud.x - pr * hud.w * 0.30, hud.y - pr * hud.h * 0.30,
                hud.w + pr * hud.w * 0.60, hud.h + pr * hud.h * 0.60, g.scanRadius);
      ctx.stroke();
    }

    /* ---- 5. telemetry ------------------------------------------------ */
    drawTelemetry(ctx, g, t, box, hud, live);

    ctx.restore();
  }

  /** The HUD column: a percentage that tracks the sweep, and the five checks
   *  ticking green as the read passes them. FAKE PRECISION IS A LIE; these
   *  are the stages a scan really goes through, so the readout is a
   *  description of the work rather than decoration. */
  function drawTelemetry(ctx, g, t, box, hud, live) {
    var T = g.T;
    if (g.quietHUD) return;
    var a = outCubic(span(t, T.readout[0], T.readout[0] + 0.22)) * live;
    if (a <= 0.01) return;
    // Against the pass that actually runs. It used to read to sweepUp[1],
    // which is parked far past the end of the film now that there is only one
    // pass — so the counter sat on 0% for the whole scan.
    var prog = span(t, T.sweepDown[0], T.sweepDown[1]);
    var pct = Math.min(100, Math.round(inOutCubic(prog) * 100));

    ctx.save();
    ctx.globalAlpha = a;
    ctx.textBaseline = "alphabetic";

    // Top-left: what it is doing, and how far in.
    var s1 = Math.round(g.W * 0.0265);
    font(ctx, s1, 800, 2.6);
    ctx.fillStyle = rgba("#FFFFFF", 0.92);
    var dots = ".".repeat(1 + (Math.floor(t * 3.4) % 3));
    drawText(ctx, "ANALYSING" + dots, hud.x, hud.y - s1 * 0.9, 2.6);

    font(ctx, s1, 800, 1.4);
    var pctStr = String(pct).padStart(3, " ") + "%";
    ctx.fillStyle = rgba("#FFFFFF", 0.92);
    var pw = textWidth(ctx, pctStr, 1.4);
    drawText(ctx, pctStr, hud.x + hud.w - pw, hud.y - s1 * 0.9, 1.4);

    // A hairline progress rule under the label, because a percentage on its
    // own is a number and a bar is a machine.
    ctx.fillStyle = rgba("#FFFFFF", 0.20);
    ctx.fillRect(hud.x, hud.y - s1 * 0.45, hud.w, Math.max(1, g.W * 0.0012));
    ctx.fillStyle = rgba("#FFFFFF", 0.85);
    ctx.fillRect(hud.x, hud.y - s1 * 0.45, hud.w * inOutCubic(prog), Math.max(1, g.W * 0.0012));

    // Bottom-left: the checklist.
    var s2 = Math.round(g.W * 0.0235);
    var lh = s2 * 1.85;
    var baseY = hud.y + hud.h - s2 * 0.4;
    for (var i = CHECKS.length - 1; i >= 0; i--) {
      var at = T.sweepDown[0] + (T.sweepDown[1] - T.sweepDown[0]) * ((i + 0.85) / CHECKS.length);
      var appear = outCubic(span(t, at - 0.16, at));
      var done = span(t, at, at + 0.14);
      if (appear <= 0) continue;
      var y = baseY - (CHECKS.length - 1 - i) * lh;
      var x = hud.x;
      ctx.globalAlpha = a * appear;

      // The tick, drawn: a web page has no SF Symbols and a missing glyph in
      // an advert is a tofu box where the confirmation should be.
      var r = s2 * 0.46, cxm = x + r, cym = y - s2 * 0.30;
      ctx.strokeStyle = done > 0 ? rgba(C.posi, 0.30 + done * 0.7) : rgba("#FFFFFF", 0.35);
      ctx.lineWidth = Math.max(1.4, g.W * 0.0018);
      ctx.beginPath(); ctx.arc(cxm, cym, r, 0, Math.PI * 2); ctx.stroke();
      if (done > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(cxm - r, cym - r, r * 2 * outCubic(done), r * 2);
        ctx.clip();
        ctx.strokeStyle = C.posi;
        ctx.lineCap = "round"; ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(cxm - r * 0.46, cym + r * 0.04);
        ctx.lineTo(cxm - r * 0.10, cym + r * 0.42);
        ctx.lineTo(cxm + r * 0.52, cym - r * 0.42);
        ctx.stroke();
        ctx.restore();
      }
      font(ctx, s2, 800, 1.7);
      ctx.fillStyle = rgba("#FFFFFF", done > 0 ? 0.94 : 0.55);
      drawText(ctx, CHECKS[i], x + r * 2 + s2 * 0.55, y, 1.7);
    }
    ctx.restore();
  }

  /* ================================================================== *
   *  Presentation
   *
   *  Every frame is drawn to an offscreen at design size and then blitted.
   *
   *  THERE IS NO GLITCH ON THE REVEAL, AND THAT WAS ASKED FOR DIRECTLY.
   *  Earlier cuts tore the frame into displaced horizontal slices over the
   *  flash beat, on the reasoning that a hard cut stops a thumb where a
   *  crossfade does not. It does stop a thumb, but it stops it on "this app
   *  is broken": the product being scanned is the thing on screen, and
   *  shredding it for four frames reads as a rendering fault rather than as
   *  an edit. A scanner has to look like it works.
   *
   *  The beat is carried by the motion instead — the photograph's 0.54s
   *  travel and the word landing on it — with one short flash to punctuate
   *  the moment the verdict arrives. Everything else is a clean blit. */
  function present(dst, off, g, t) {
    var T = g.T, W = g.W, H = g.H;
    var ctx = dst;
    var fp = span(t, T.flash[0], T.flash[1]);
    var flashing = fp > 0 && fp < 1 && g.spec.intensity > 0;

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, g.pxW, g.pxH);
    ctx.scale(g.k, g.k);

    // The frame, whole and unmodified. Nothing is ever displaced, torn,
    // offset or split; the only thing `present` adds is the flash below.
    ctx.drawImage(off, 0, 0, W, H);

    if (!flashing) { ctx.restore(); return; }

    /* THE FLASH, AND WHY IT IS THE ONLY EFFECT LEFT.
     *
     * A single brightening over ~4 frames, in the band colour, on the frame
     * the verdict arrives. It punctuates without deforming: the pack, the
     * score and the wordmark all stay exactly where they are and stay
     * readable the whole way through, which is the difference between an edit
     * and a fault.
     *
     * The alpha is deliberately low. On the DARK stage the earliest drafts
     * used, a strong pop read as a camera flash; on Brand.bg, which is nearly
     * white already, the same alpha is a wash over a pale frame and reads as
     * a colour error. Kept in the band colour rather than white so the flash
     * itself carries the answer. */
    var pop = clamp01(1 - Math.abs(fp - 0.15) / 0.30);
    if (pop > 0) {
      ctx.globalAlpha = pop * pop * 0.34 * g.spec.intensity;
      ctx.fillStyle = mix("#FFFFFF", g.band, 0.30);
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;
    }
    ctx.restore();
  }

  /* ================================================================== *
   *  The stage — Brand.bg, in every format, for the whole film.
   *
   *  The drama comes from the photo card going dark under the scan, which is
   *  what the app does, and not from the ground. See the note on the palette.
   * ================================================================== */
  function drawStage(ctx, g, t) {
    g.stageDark = 0;
    g.band = bandColor(g.spec.score);
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, g.W, g.H);
  }

  /* ================================================================== *
   *  Reveal parts, shared by the formats
   * ================================================================== */

  /** The app's ScoreRing: stroke 8.5% of the diameter, round cap, opening at
      twelve o'clock. Ported rather than approximated, because the ring is the
      one piece of the app people recognise from a two-second clip. */
  function drawRing(ctx, cx, cy, d, p, color) {
    var stroke = d * 0.085, r = (d - stroke) / 2;
    ctx.save();
    ctx.lineWidth = stroke;
    ctx.lineCap = "round";
    ctx.strokeStyle = C.track;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    if (p > 0.001) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * p);
      ctx.stroke();
    }
    ctx.restore();
  }

  /** The count-up. outQuint: most of the distance early, then a long settle,
      so the last few points tick over slowly enough to read. */
  function counted(t, win, target) {
    return Math.round(outQuint(span(t, win[0], win[1])) * target);
  }

  /** The three tone marks VerdictView draws beside a reason, as paths.
      Octagon / triangle / check-circle, matching SF Symbols by shape. */
  function toneGlyph(ctx, tone, cx, cy, s) {
    var col = TONE[tone] || TONE.warn;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = col;
    if (tone === "good") {
      ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#FFFFFF"; ctx.lineWidth = s * 0.24;
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(-s * 0.42, s * 0.04); ctx.lineTo(-s * 0.10, s * 0.36); ctx.lineTo(s * 0.46, -s * 0.30);
      ctx.stroke();
    } else if (tone === "bad") {
      var o = s * 0.42;                                 // octagon
      ctx.beginPath();
      ctx.moveTo(-o, -s); ctx.lineTo(o, -s); ctx.lineTo(s, -o); ctx.lineTo(s, o);
      ctx.lineTo(o, s); ctx.lineTo(-o, s); ctx.lineTo(-s, o); ctx.lineTo(-s, -o);
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "#FFFFFF"; ctx.lineWidth = s * 0.23; ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.46); ctx.lineTo(0, s * 0.10);
      ctx.moveTo(0, s * 0.42); ctx.lineTo(0, s * 0.44);
      ctx.stroke();
    } else {
      ctx.beginPath();                                  // triangle
      ctx.moveTo(0, -s * 1.02); ctx.lineTo(s * 1.02, s * 0.78); ctx.lineTo(-s * 1.02, s * 0.78);
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "#FFFFFF"; ctx.lineWidth = s * 0.22; ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.24); ctx.lineTo(0, s * 0.24);
      ctx.moveTo(0, s * 0.50); ctx.lineTo(0, s * 0.52);
      ctx.stroke();
    }
    ctx.restore();
  }

  /** One labelled bar. Higher is always better, on the same 0-100 scale and
      the same four bands as the overall score, so a green bar and a green
      number can never mean two different things. */
  function drawMetricRow(ctx, g, m, x, y, w, p, dark) {
    var lab = Math.round(g.W * 0.0300);
    var barH = Math.round(g.W * 0.0160);
    var val = Math.round(outQuint(p) * m.value);
    var col = bandColor(m.value);

    ctx.save();
    ctx.textBaseline = "alphabetic";
    font(ctx, lab, 800, -0.2);
    ctx.fillStyle = dark ? rgba("#FFFFFF", 0.90) : C.ink;
    drawText(ctx, m.label, x, y, -0.2);

    font(ctx, Math.round(lab * 1.14), 900, 0);
    var vs = String(val);
    var vw = textWidth(ctx, vs, 0);
    ctx.fillStyle = col;
    drawText(ctx, vs, x + w - vw, y, 0);

    var by = y + lab * 0.52;
    ctx.fillStyle = dark ? rgba("#FFFFFF", 0.13) : C.track;
    roundRect(ctx, x, by, w, barH, barH / 2); ctx.fill();
    var fw = w * (m.value / 100) * outQuint(p);
    if (fw > barH * 0.6) {
      ctx.fillStyle = col;
      roundRect(ctx, x, by, fw, barH, barH / 2); ctx.fill();
    }
    ctx.restore();
  }

  /** A reason line: tone mark, then ReasonEngine's own sentence. The clip
      QUOTES THE APP, it does not paraphrase it — a share asset that invents
      its own wording is a second source of truth nobody keeps in step. */
  function drawReasonRow(ctx, g, r, x, y, w, p, dark) {
    var size = Math.round(g.W * 0.0300);
    var gs = size * 0.62;
    ctx.save();
    ctx.globalAlpha = p;
    ctx.translate(0, (1 - outQuint(p)) * size * 0.9);
    toneGlyph(ctx, r.tone, x + gs, y - size * 0.30, gs);
    font(ctx, size, 700, -0.2);
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = dark ? rgba("#FFFFFF", 0.86) : C.ink;
    var tx = x + gs * 2 + size * 0.55;
    var lines = wrap(ctx, r.text, w - (tx - x));
    for (var i = 0; i < Math.min(2, lines.length); i++) {
      drawText(ctx, lines[i], tx, y + i * size * 1.28, -0.2);
    }
    ctx.restore();
    return Math.min(2, lines.length);
  }

  /** Product name + brand, one block. Returns the baseline it finished on. */
  function drawTitle(ctx, g, x, y, w, p, dark, align) {
    var name = g.spec.name, brand = g.spec.brand;
    if (!name && !brand) return y;
    ctx.save();
    ctx.globalAlpha = p;
    ctx.textBaseline = "alphabetic";
    var yy = y;
    if (name) {
      var s = fitSize(ctx, name, w, Math.round(g.W * 0.042), 900, -0.8);
      ctx.fillStyle = dark ? "#FFFFFF" : C.ink;
      var nw = textWidth(ctx, name, -0.8);
      drawText(ctx, name, align === "center" ? x + (w - nw) / 2 : x, yy, -0.8);
      yy += s * 0.95;
    }
    if (brand) {
      var bs = Math.round(g.W * 0.026);
      font(ctx, bs, 700, 1.4);
      ctx.fillStyle = dark ? rgba("#FFFFFF", 0.52) : C.ink2;
      var bw = textWidth(ctx, brand.toUpperCase(), 1.4);
      drawText(ctx, brand.toUpperCase(), align === "center" ? x + (w - bw) / 2 : x, yy, 1.4);
      yy += bs * 0.9;
    }
    ctx.restore();
    return yy;
  }

  /* ================================================================== *
   *  FORMAT: tier — the sub-5-to-Chad reveal
   *
   *  The loud one, and the only one that deliberately does NOT return to the
   *  app's light tokens. It is a meme format: a black stage, one enormous
   *  word, and a number under it. Every other format sells the app by looking
   *  like the app; this one sells it by being shareable, and it is honest
   *  about which it is because the tier sits on the app's real band
   *  boundaries and the number under it is the app's real score.
   *
   *  THE RUNGS DESCRIBE THE FOOD. "Sub-5" is said about a cereal bar.
   * ================================================================== */
  function renderTier(ctx, g, t) {
    var T = g.T, W = g.W, H = g.H, spec = g.spec;
    /* inOutCubic, NOT outQuint.
       outQuint puts 91% of the travel into the first 0.1s: measured frame by
       frame at 30fps the card went 946px -> 306px in FOUR frames and then sat
       almost still for seven more. That is not a fast move, it is a snap
       followed by a stall, which is why it read as "too fast and just weird".
       An in-out ease over twice the window is one continuous gesture. */
    var settle = inOutCubic(span(t, T.settle[0], T.settle[1]));

    drawStage(ctx, g, t);

    /* ---- LAID OUT FROM THE BOTTOM UP -------------------------------- *
     *
     * The results card is pinned to the content line, the tier block stacks
     * above it, and the photograph takes whatever is left at the top. Every
     * position used to be a fraction of H with a `g.tall ? a : b` beside it,
     * which is two layouts pretending to be one — and in a square the third
     * one nobody checked had the tier word sitting on top of the score. This
     * derives one layout for any shape, and the only thing that changes
     * between shapes is how much room the picture gets. */
    var rs = spec.reasons.filter(function (r) {
      return spec.score >= 50 || r.tone !== "good";
    }).slice(0, 3);

    var cardX = W * 0.075, cardW = W * 0.85;
    var headH = W * 0.105;
    var rowH  = W * 0.062;
    var cardH = headH + (rs.length ? rowH * rs.length + W * 0.020 : 0);
    var cardY = g.contentBottom - cardH;

    /* THE PICTURE TAKES ITS SHARE FIRST, THEN THE WORD FITS WHAT IS LEFT.
     *
     * The first attempt did the reverse — stacked the type upward from the
     * card and gave the photograph whatever remained, with a floor under it
     * so it could not vanish. In a square there WAS no room
     * left, the floor won, and the plate grew back down over the product
     * name. A layout with a floor in it has a shape it silently refuses to
     * be; this one shrinks the type instead, which is the thing that can
     * afford to give. */
    var big      = g.scanRect;
    var plateTop = g.contentTop;
    var plateH   = Math.min((cardY - plateTop) * 0.44, W * 0.58);
    var plateW   = Math.min(W * 0.50, plateH * (big.w / big.h));
    plateH       = plateW * (big.h / big.w);
    var plate    = { x: (W - plateW) / 2, y: plateTop, w: plateW, h: plateH };

    var nameSize = Math.round(W * 0.0255);
    var word     = TIERS[spec.tiers][bandIndex(spec.score)];
    var gapTop   = plate.y + plate.h;
    var gapH     = cardY - gapTop;
    var fixed    = nameSize * 1.45;
    // As big as the frame will take, then as big as the gap will take.
    var tierSize = fitSize(ctx, word, W * 0.86,
                           Math.round(W * (word.length > 8 ? 0.125 : 0.205)), 900, -2);
    tierSize     = Math.min(tierSize, Math.max(W * 0.06, (gapH * 0.90 - fixed) / 0.95));
    var blockH   = fixed + tierSize * 0.95;
    var nameY    = gapTop + (gapH - blockH) / 2 + nameSize;
    var tierY    = nameY + tierSize * 0.90;

    var box = {
      x: lerp(big.x, plate.x, settle), y: lerp(big.y, plate.y, settle),
      w: lerp(big.w, plate.w, settle), h: lerp(big.h, plate.h, settle)
    };
    /* A FRACTION OF THE CARD'S OWN WIDTH. Lerping absolute pixels meant the
       radius went from 5.1% of the width to 14.2% of it during the shrink —
       the card visibly morphed from a photo card into a rounded blob while it
       moved, which is a shape change riding on top of a size change and half
       of what looked wrong about it. */
    var radius = box.w * 0.055;

    drawPhotoCard(ctx, g.img, box, radius, {
      fit: spec.fit, dark: false,
      zoom: 1 + 0.05 * outCubic(span(t, 0, T.end))
    });
    g.scanBox = box; g.scanRadius = radius;
    drawScan(ctx, g, t);

    /* ---- the name, as a label rather than as a headline -------------- *
     * Tracked caps at 58% white. It used to be white and bold directly under
     * the picture, where it competed with the tier word one line below it for
     * the same job. */
    var nameP = outCubic(span(t, T.settle[0] + 0.06, T.settle[1] + 0.08));
    if (spec.name && nameP > 0) {
      ctx.save();
      ctx.globalAlpha = nameP;
      ctx.textBaseline = "alphabetic";
      var label = spec.name.toUpperCase();
      fitSize(ctx, label, W * 0.80, nameSize, 800, 3.0);
      ctx.fillStyle = C.ink3;
      var nw = textWidth(ctx, label, 3.0);
      drawText(ctx, label, (W - nw) / 2, nameY, 3.0);
      ctx.restore();
    }

    /* ---- the slam --------------------------------------------------- */
    var sp = span(t, T.slam[0], T.slam[1]);
    if (sp > 0) {
      var e = outBack(sp, 2.1);
      ctx.save();
      ctx.textBaseline = "alphabetic";
      ctx.translate(W / 2, tierY);
      ctx.scale(lerp(1.22, 1, e), lerp(1.22, 1, e));
      ctx.globalAlpha = clamp01(sp * 3);
      font(ctx, tierSize, 900, -tierSize * 0.02);
      var ww = textWidth(ctx, word, -tierSize * 0.02);
      // A soft halo of the band colour rather than a glow: on bone a glow is
      // a smudge. Enough to give the word weight, not enough to be an effect.
      ctx.shadowColor = rgba(g.band, 0.30 * (1 - sp * 0.5));
      ctx.shadowBlur = W * 0.055;
      ctx.fillStyle = g.band;
      drawText(ctx, word, -ww / 2, 0, -tierSize * 0.02);
      ctx.restore();

    }

    /* ---- the results card ------------------------------------------- *
     * A CARD, and that is the point of it. The first cut left the score and
     * the reasons as free-floating text under a 200px word, and the note back
     * was that they looked "almost random" — they did: nothing aligned to
     * anything. One container, a header rule, and rows on a shared grid is
     * what turns a pile of facts into a readout. */
    var scoreP = span(t, T.score[0], T.score[1]);
    if (scoreP > 0) {
      ctx.save();
      ctx.globalAlpha = clamp01(scoreP * 5);
      ctx.translate(0, (1 - outQuint(clamp01(scoreP * 3))) * H * 0.016);

      // Brand.card on Brand.bg with Brand.stroke, exactly as the app draws a
      // card. The shadow is the app's too — soft, low, barely there.
      ctx.save();
      ctx.shadowColor = rgba(C.ink, 0.10);
      ctx.shadowBlur = 40; ctx.shadowOffsetY = 14;
      roundRect(ctx, cardX, cardY, cardW, cardH, W * 0.034);
      ctx.fillStyle = C.card;
      ctx.fill();
      ctx.restore();
      roundRect(ctx, cardX + 0.75, cardY + 0.75, cardW - 1.5, cardH - 1.5, W * 0.034);
      ctx.strokeStyle = C.stroke;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      var padX = W * 0.042;
      var midY = cardY + headH * 0.52;
      ctx.textBaseline = "middle";

      var mk = markAt(C.accent, W * 0.040);
      if (mk) ctx.drawImage(mk, cardX + padX, midY - mk.height / 2, mk.width, mk.height);

      var ls = Math.round(W * 0.0215);
      font(ctx, ls, 800, 2.8);
      ctx.fillStyle = C.ink3;
      drawText(ctx, "SCORE", cardX + padX + W * 0.056, midY + 1, 2.8);

      var v = String(counted(t, T.score, spec.score));
      var vs = Math.round(W * 0.060);
      font(ctx, Math.round(vs * 0.40), 800, 0.8);
      var sw = textWidth(ctx, "/100", 0.8);
      font(ctx, vs, 900, -1.5);
      var vw = textWidth(ctx, v, -1.5);
      var right = cardX + cardW - padX;
      font(ctx, Math.round(vs * 0.40), 800, 0.8);
      ctx.fillStyle = C.ink3;
      drawText(ctx, "/100", right - sw, midY + vs * 0.20, 0.8);
      font(ctx, vs, 900, -1.5);
      ctx.fillStyle = C.ink;
      drawText(ctx, v, right - sw - vw - W * 0.008, midY + 1, -1.5);

      if (rs.length) {
        ctx.fillStyle = C.stroke;
        ctx.fillRect(cardX + padX, cardY + headH - 1, cardW - padX * 2, 1.5);
      }
      ctx.restore();
    }

    ctx.textBaseline = "alphabetic";
    for (var i = 0; i < rs.length; i++) {
      var p = outCubic(span(t, T.rows + i * T.rowStep, T.rows + i * T.rowStep + 0.30));
      if (p <= 0) continue;
      var y = cardY + headH + W * 0.012 + rowH * (i + 0.62);
      ctx.save();
      ctx.globalAlpha = p;
      ctx.translate((1 - outQuint(p)) * W * 0.018, 0);
      var gs = W * 0.0088;
      // A dot, not a warning triangle. Inside a card the tone is carried by
      // colour and position; three alert glyphs in a column is a klaxon.
      ctx.fillStyle = TONE[rs[i].tone] || TONE.warn;
      ctx.beginPath();
      ctx.arc(cardX + W * 0.042 + gs, y - W * 0.010, gs, 0, Math.PI * 2);
      ctx.fill();
      var tx2 = cardX + W * 0.042 + gs * 2 + W * 0.020;
      var maxW = cardX + cardW - W * 0.042 - tx2;
      var fs2 = fitSize(ctx, rs[i].text, maxW, Math.round(W * 0.0295), 700, -0.2);
      ctx.fillStyle = C.ink;
      drawText(ctx, rs[i].text, tx2, y, -0.2);
      ctx.restore();
    }

    drawSearchPill(ctx, g, false);
    drawTrust(ctx, g, outCubic(span(t, T.foot[0], T.foot[1])), false);
  }

  /* ================================================================== *
   *  FORMAT: metrics — the breakdown
   *
   *  The Ascension "here are your facial thirds" screen, in the app's own
   *  light tokens: five axes, each on the same 0-100 scale as the overall
   *  score, filling one after another, with the number landing last. The
   *  format that survives being watched on mute.
   * ================================================================== */
  function renderMetrics(ctx, g, t) {
    var T = g.T, W = g.W, H = g.H, spec = g.spec;
    /* inOutCubic, NOT outQuint.
       outQuint puts 91% of the travel into the first 0.1s: measured frame by
       frame at 30fps the card went 946px -> 306px in FOUR frames and then sat
       almost still for seven more. That is not a fast move, it is a snap
       followed by a stall, which is why it read as "too fast and just weird".
       An in-out ease over twice the window is one continuous gesture. */
    var settle = inOutCubic(span(t, T.settle[0], T.settle[1]));

    drawStage(ctx, g, t);

    /* AGAINST THE CONTENT BAND, NOT AGAINST H.
       Every position here was a fraction of the frame height tuned on a 9:16;
       in a square they all landed above `contentTop`, which is where the
       search pill lives — the thumbnail was half behind it and the product
       name sat across it. */
    var big = g.scanRect;
    var thumbW = W * (g.tall ? 0.20 : 0.155);
    var thumb = { x: W * 0.075, y: g.contentTop, w: thumbW, h: thumbW };
    var box = {
      x: lerp(big.x, thumb.x, settle), y: lerp(big.y, thumb.y, settle),
      w: lerp(big.w, thumb.w, settle), h: lerp(big.h, thumb.h, settle)
    };
    /* A FRACTION OF THE CARD'S OWN WIDTH. Lerping absolute pixels meant the
       radius went from 5.1% of the width to 14.2% of it during the shrink —
       the card visibly morphed from a photo card into a rounded blob while it
       moved, which is a shape change riding on top of a size change and half
       of what looked wrong about it. */
    var radius = box.w * 0.055;
    drawPhotoCard(ctx, g.img, box, radius, {
      fit: spec.fit, dark: false,
      zoom: 1 + 0.05 * outCubic(span(t, 0, T.end))
    });
    g.scanBox = box; g.scanRadius = radius;
    drawScan(ctx, g, t);

    var headP = outCubic(span(t, T.head[0], T.head[1]));
    drawTitle(ctx, g, thumb.x + thumb.w + W * 0.035,
              thumb.y + thumb.h * 0.46, W * 0.62, headP, false, "left");

    /* THE CARD IS PINNED TO THE BOTTOM AND THE ROWS SHARE WHAT IS LEFT.
       Fixed row pitch put the conclusion two thirds down the frame with 400px
       of bone under it. */
    var rx = W * 0.075, rw = W * 0.85;
    var lab = Math.round(W * 0.030);
    var n = Math.min(5, spec.metrics.length);
    var cardH = W * (g.tall ? 0.152 : 0.175);
    var cardY = g.contentBottom - cardH;
    var rowsTop = thumb.y + thumb.h + W * 0.052;
    var rh = (cardY - W * 0.030 - rowsTop) / n;
    for (var i = 0; i < n; i++) {
      var p = span(t, T.rows + i * T.rowStep, T.rows + i * T.rowStep + 0.46);
      if (p <= 0) continue;
      ctx.save();
      ctx.globalAlpha = clamp01(p * 2.6);
      ctx.translate(0, (1 - outQuint(p)) * H * 0.012);
      drawMetricRow(ctx, g, spec.metrics[i], rx, rowsTop + i * rh + lab, rw, p, false);
      ctx.restore();
    }

    /* The overall, in a card so it reads as the conclusion rather than as a
       sixth axis. */
    var sp = span(t, T.score[0], T.score[1]);
    if (sp > 0) {
      ctx.save();
      ctx.globalAlpha = clamp01(sp * 3.4);
      ctx.translate(0, (1 - outQuint(clamp01(sp * 2.4))) * H * 0.018);
      ctx.shadowColor = rgba(C.ink, 0.10); ctx.shadowBlur = 40; ctx.shadowOffsetY = 14;
      roundRect(ctx, rx, cardY, rw, cardH, W * 0.032);
      ctx.fillStyle = C.card; ctx.fill();
      ctx.shadowColor = "transparent";

      var d = cardH * 0.70, cx = rx + rw - d * 0.72, cy = cardY + cardH / 2;
      drawRing(ctx, cx, cy, d, outQuint(sp) * (spec.score / 100), g.band);
      var v = counted(t, T.score, spec.score);
      ctx.textBaseline = "middle";
      font(ctx, Math.round(d * 0.34), 900, -1);
      ctx.fillStyle = C.ink;
      var vw = textWidth(ctx, String(v), -1);
      drawText(ctx, String(v), cx - vw / 2, cy, -1);

      ctx.textBaseline = "alphabetic";
      var ts = Math.round(W * 0.0215);
      font(ctx, ts, 800, 3.0);
      ctx.fillStyle = C.ink3;
      drawText(ctx, "SCORE", rx + W * 0.045, cy - ts * 0.55, 3.0);
      var bs = Math.round(W * 0.055);
      font(ctx, bs, 900, -1);
      ctx.fillStyle = g.band;
      drawText(ctx, BAND_LABEL[bandIndex(spec.score)], rx + W * 0.045, cy + bs * 0.72, -1);
      ctx.restore();
    }

    drawSearchPill(ctx, g, false);
    drawTrust(ctx, g, outCubic(span(t, T.foot[0], T.foot[1])), false);
  }

  /* ================================================================== *
   *  FORMAT: ring — the app's own verdict screen
   *
   *  The brand-safe one, and the closest to what a viewer meets after they
   *  install: the sheet rises, the ring counts up, and ReasonEngine's own
   *  sentences step in under it. NOTHING GOOD UNDER "WHY IT SCORES LOW":
   *  below 50 the positives are filtered out, because a green tick landing
   *  third under a heading that has just promised to explain a 36 reads as
   *  the app arguing with itself.
   * ================================================================== */
  function renderRing(ctx, g, t) {
    var T = g.T, W = g.W, H = g.H, spec = g.spec;
    /* inOutCubic, NOT outQuint.
       outQuint puts 91% of the travel into the first 0.1s: measured frame by
       frame at 30fps the card went 946px -> 306px in FOUR frames and then sat
       almost still for seven more. That is not a fast move, it is a snap
       followed by a stall, which is why it read as "too fast and just weird".
       An in-out ease over twice the window is one continuous gesture. */
    var settle = inOutCubic(span(t, T.settle[0], T.settle[1]));
    var sheetP = outQuint(span(t, T.sheet[0], T.sheet[1]));

    drawStage(ctx, g, t);

    var big = g.scanRect;
    var thumbW = W * (g.tall ? 0.155 : 0.125);
    var thumb = { x: W * 0.075, y: g.contentTop, w: thumbW, h: thumbW };
    var box = {
      x: lerp(big.x, thumb.x, settle), y: lerp(big.y, thumb.y, settle),
      w: lerp(big.w, thumb.w, settle), h: lerp(big.h, thumb.h, settle)
    };
    /* A FRACTION OF THE CARD'S OWN WIDTH. Lerping absolute pixels meant the
       radius went from 5.1% of the width to 14.2% of it during the shrink —
       the card visibly morphed from a photo card into a rounded blob while it
       moved, which is a shape change riding on top of a size change and half
       of what looked wrong about it. */
    var radius = box.w * 0.055;
    drawPhotoCard(ctx, g.img, box, radius, {
      fit: spec.fit, dark: false,
      zoom: 1 + 0.05 * outCubic(span(t, 0, T.end))
    });
    g.scanBox = box; g.scanRadius = radius;
    drawScan(ctx, g, t);

    drawTitle(ctx, g, thumb.x + thumb.w + W * 0.030,
              thumb.y + thumb.h * 0.44, W * 0.66, settle, false, "left");

    /* The sheet. Auto-height, pinned to the bottom, slid in with a translate
       — it was a fixed pixel number and it went stale the moment a second
       aspect ratio existed. */
    var reasons = spec.reasons.filter(function (r) {
      return spec.score >= 50 || r.tone !== "good";
    }).slice(0, 3);
    var sheetTop = thumb.y + thumb.h + W * 0.045;
    var sy = lerp(H, sheetTop, sheetP);
    ctx.save();
    ctx.shadowColor = rgba(C.ink, 0.13); ctx.shadowBlur = 60; ctx.shadowOffsetY = -10;
    roundRect(ctx, 0, sy, W, H - sy + W * 0.1, W * 0.05);
    ctx.fillStyle = C.card; ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath(); ctx.rect(0, sy, W, H - sy); ctx.clip();

    // Grabber, exactly as the app draws it.
    ctx.fillStyle = C.track;
    roundRect(ctx, W / 2 - W * 0.055, sy + W * 0.020, W * 0.11, W * 0.008, W * 0.004);
    ctx.fill();

    /* Measured first: the ring is then centred in whatever the list leaves,
       rather than pinned to the top of the sheet with a hole under it. */
    var rsz = Math.round(W * 0.0300);
    var gap = H * 0.0245;
    var indent = rsz * 0.62 * 2 + rsz * 0.55;
    font(ctx, rsz, 700, -0.2);
    var counts = reasons.map(function (r) {
      return Math.min(2, wrap(ctx, r.text, W * 0.83 - indent).length);
    });
    var blockH = counts.reduce(function (a, c) { return a + c * rsz * 1.28; }, 0)
               + gap * Math.max(0, reasons.length - 1);
    var firstY = g.contentBottom - blockH + rsz * 0.30;
    var hs = Math.round(W * 0.0385);
    var headY = firstY - rsz * 1.05 - H * 0.016;

    var ringTop = sy + W * 0.055, ringBot = headY - hs * 1.45;
    var d = clamp((ringBot - ringTop) * 0.80, W * 0.24, W * 0.46);
    var cx = W / 2, cy = (ringTop + ringBot) / 2;
    var sp = span(t, T.score[0], T.score[1]);
    drawRing(ctx, cx, cy, d, outQuint(sp) * (spec.score / 100), g.band);
    ctx.textBaseline = "middle";
    font(ctx, Math.round(d * 0.29), 900, -2);
    ctx.fillStyle = C.ink;
    var v = String(counted(t, T.score, spec.score));
    var vw = textWidth(ctx, v, -2);
    drawText(ctx, v, cx - vw / 2, cy - d * 0.02, -2);

    var bp = outCubic(span(t, T.band[0], T.band[1]));
    if (bp > 0) {
      ctx.globalAlpha = bp;
      ctx.textBaseline = "alphabetic";
      var bs = Math.round(d * 0.075);
      font(ctx, bs, 800, 1.5);
      ctx.fillStyle = g.band;
      var bl = BAND_LABEL[bandIndex(spec.score)].toUpperCase();
      var bw = textWidth(ctx, bl, 1.5);
      drawText(ctx, bl, cx - bw / 2, cy + d * 0.21, 1.5);
      ctx.globalAlpha = 1;
    }

    /* THE LIST IS LAID OUT FROM THE BOTTOM UP.
     *
     * Flowing it down from the ring left 500px of empty sheet under the last
     * reason on a 9:16 — a verdict screen that stops halfway. The rows are
     * measured first (a reason can be two lines), then the whole block is
     * pinned so its last line sits on the content line, and the heading takes
     * whatever gap is left above it. */
    var hp = outCubic(span(t, T.lead[0], T.lead[1]));
    if (hp > 0) {
      ctx.save();
      ctx.globalAlpha = hp;
      ctx.textBaseline = "alphabetic";
      font(ctx, hs, 900, -0.6);
      ctx.fillStyle = C.ink;
      // The breakdown's OWN heading, quoted from VerdictView rather than invented.
      drawText(ctx, spec.score >= 50 ? "What to know" : "Why it scores low", W * 0.085, headY, -0.6);
      ctx.restore();
    }

    var ty = firstY;
    for (var i = 0; i < reasons.length; i++) {
      var p = outCubic(span(t, T.rows + i * T.rowStep, T.rows + i * T.rowStep + 0.34));
      if (p > 0) drawReasonRow(ctx, g, reasons[i], W * 0.085, ty, W * 0.83, p, false);
      ty += counts[i] * rsz * 1.28 + gap;
    }
    ctx.restore();

    drawSearchPill(ctx, g, false);
    drawTrust(ctx, g, outCubic(span(t, T.foot[0], T.foot[1])), false);
  }

  /* ================================================================== *
   *  FORMAT: versus — two products, one shelf
   *
   *  The format that makes the app's argument without a word of copy: the
   *  two things look equally healthy on the shelf and they do not score the
   *  same. Both are scanned at once, both numbers land together, and only
   *  then does one of them get the tick.
   *
   *  There is no "winner" language beyond BETTER PICK. A clip that declares
   *  a food good is making a health claim; a clip that says one of these two
   *  scores higher is reporting its own output.
   * ================================================================== */
  function renderVersus(ctx, g, t) {
    var T = g.T, W = g.W, H = g.H, spec = g.spec;
    var b = spec.b || { name: "", brand: "", score: 0, image: "", fit: "contain" };
    /* inOutCubic, NOT outQuint.
       outQuint puts 91% of the travel into the first 0.1s: measured frame by
       frame at 30fps the card went 946px -> 306px in FOUR frames and then sat
       almost still for seven more. That is not a fast move, it is a snap
       followed by a stall, which is why it read as "too fast and just weird".
       An in-out ease over twice the window is one continuous gesture. */
    var settle = inOutCubic(span(t, T.settle[0], T.settle[1]));

    drawStage(ctx, g, t);

    /* THE BAND IS A BUDGET AND THE BLOCK IS SPENT INSIDE IT.
       The first version guessed a card height and a ring size and then centred
       whatever came out; in a square that came to 905px inside a 783px band,
       so the rings ran through the small print. Now the fixed parts are
       measured, the cards take a share of what is left, and the rings take a
       share of what is left after that — which fits any shape by construction
       and still centres in a tall one. */
    /* THE ARITHMETIC IS WRITTEN OUT BECAUSE IT KEPT BEING WRONG.
     * Measured down from the bottom of a panel's photograph:
     *     gap 0.028W → name → 0.62d to the ring's centre
     *     → 0.86d to the BETTER PICK pill → its own height
     * so everything under the picture is `0.028W + nameH + 1.48d + pillH`.
     * Two earlier passes budgeted d, then d * 1.16, then d * 1.36 for that,
     * and each time the pill landed a little further through the small print. */
    var gap = W * 0.035, side = (W - W * 0.15 - gap) / 2;
    var nameH = W * 0.030 * 1.05;
    var pillH = W * 0.0235 * 2.1;
    var avail = g.contentBottom - g.contentTop;
    var slack = Math.max(0, avail - (W * 0.028 + nameH + pillH));
    var cardH = Math.min(side * 1.34, slack * 0.56);
    var d     = Math.min(side * 0.70, Math.max(W * 0.16, (slack - cardH) / 1.48));
    var blockH = cardH + W * 0.028 + nameH + d * 1.48 + pillH;
    var topY = g.contentTop + Math.max(0, (avail - blockH) / 2);
    var L = { x: W * 0.075, y: topY, w: side, h: cardH };
    var R = { x: W * 0.075 + side + gap, y: topY, w: side, h: cardH };

    var lWins = spec.score >= b.score;
    var crown = outCubic(span(t, T.crown[0], T.crown[1]));

    // The loser dims rather than disappearing: the comparison has to stay
    // legible in the final frame, which is the frame people screenshot.
    function panel(box, sc, nm, br, img, fit, lat, isWin) {
      var fade = isWin ? 1 : 1 - crown * 0.42;
      ctx.save();
      ctx.globalAlpha = fade;
      drawPhotoCard(ctx, img, box, W * 0.032, {
        fit: fit, dark: false,
        zoom: 1 + 0.05 * outCubic(span(t, 0, T.end))
      });
      ctx.restore();

      g.scanBox = box; g.scanRadius = W * 0.032; g.lattice = lat; g.quietHUD = true;
      drawScan(ctx, g, t);

      ctx.save();
      ctx.globalAlpha = fade * settle;
      ctx.textBaseline = "alphabetic";
      var ny = box.y + box.h + W * 0.028 + nameH;
      if (nm) {
        var ns = fitSize(ctx, nm, box.w, Math.round(W * 0.030), 900, -0.4);
        ctx.fillStyle = C.ink;
        var nw2 = textWidth(ctx, nm, -0.4);
        drawText(ctx, nm, box.x + (box.w - nw2) / 2, ny, -0.4);
        ny += ns * 1.05;
      }
      ctx.restore();

      var sp = span(t, T.score[0], T.score[1]);
      if (sp > 0) {
        ctx.save();
        ctx.globalAlpha = fade;
        var cx = box.x + box.w / 2, cy = ny + d * 0.62;
        drawRing(ctx, cx, cy, d, outQuint(sp) * (sc / 100), bandColor(sc));
        ctx.textBaseline = "middle";
        font(ctx, Math.round(d * 0.30), 900, -2);
        ctx.fillStyle = C.ink;
        var vs = String(counted(t, T.score, sc));
        var vw2 = textWidth(ctx, vs, -2);
        drawText(ctx, vs, cx - vw2 / 2, cy, -2);
        ctx.textBaseline = "alphabetic";
        var bls = Math.round(W * 0.0215);
        font(ctx, bls, 800, 1.6);
        ctx.fillStyle = bandColor(sc);
        var bl2 = BAND_LABEL[bandIndex(sc)].toUpperCase();
        var bw2 = textWidth(ctx, bl2, 1.6);
        drawText(ctx, bl2, cx - bw2 / 2, cy + d * 0.66, 1.6);

        if (isWin && crown > 0) {
          ctx.globalAlpha = crown;
          var pill = "BETTER PICK";
          var ps = Math.round(W * 0.0235);
          font(ctx, ps, 900, 2.0);
          var pw = textWidth(ctx, pill, 2.0);
          var padx = ps * 0.95, ph = ps * 2.1;
          var px = cx - (pw + padx * 2) / 2, py = cy + d * 0.86;
          ctx.save();
          ctx.scale(1, 1);
          roundRect(ctx, px, py, pw + padx * 2, ph, ph / 2);
          ctx.fillStyle = C.posi; ctx.fill();
          ctx.fillStyle = "#FFFFFF";
          ctx.textBaseline = "middle";
          drawText(ctx, pill, px + padx, py + ph / 2, 2.0);
          ctx.restore();
        }
        ctx.restore();
      }
    }

    panel(L, spec.score, spec.name, spec.brand, g.img, spec.fit, g.lattice0, lWins);
    panel(R, b.score, b.name, b.brand, g.imgB, b.fit, g.latticeB, !lWins);
    g.lattice = g.lattice0; g.quietHUD = false;

    // One shared telemetry line across the top, not two: the same readout
    // twice reads as two apps rather than one comparing two products.
    var hp = outCubic(span(t, T.readout[0], T.readout[0] + 0.22)) *
             (1 - clamp01(span(t, T.lock[1] - 0.06, T.lock[1] + 0.04)));
    if (hp > 0.01) {
      ctx.save();
      ctx.globalAlpha = hp;
      ctx.textBaseline = "alphabetic";
      var hs2 = Math.round(W * 0.0225);
      font(ctx, hs2, 800, 3.0);
      ctx.fillStyle = C.ink2;
      var pct = Math.round(inOutCubic(span(t, T.sweepDown[0], T.sweepDown[1])) * 100);
      var lab = "COMPARING  ·  " + pct + "%";
      var lw2 = textWidth(ctx, lab, 3.0);
      drawText(ctx, lab, (W - lw2) / 2, topY - W * 0.024, 3.0);
      ctx.restore();
    }

    drawSearchPill(ctx, g, false);
    drawTrust(ctx, g, outCubic(span(t, T.foot[0], T.foot[1])), false);
  }

  /* ================================================================== *
   *  FORMAT: card — the short one
   *
   *  Four seconds, no reasons, no bars: photograph, sweep, number. For the
   *  insert cut between the founder's own clips, where the job is one shot
   *  and the sentence either side belongs to the person talking.
   * ================================================================== */
  function renderCard(ctx, g, t) {
    var T = g.T, W = g.W, H = g.H, spec = g.spec;
    /* inOutCubic, NOT outQuint.
       outQuint puts 91% of the travel into the first 0.1s: measured frame by
       frame at 30fps the card went 946px -> 306px in FOUR frames and then sat
       almost still for seven more. That is not a fast move, it is a snap
       followed by a stall, which is why it read as "too fast and just weird".
       An in-out ease over twice the window is one continuous gesture. */
    var settle = inOutCubic(span(t, T.settle[0], T.settle[1]));

    drawStage(ctx, g, t);

    /* TWO LAYOUTS, AND THE SPLIT IS THE SHAPE OF THE FRAME.
     *
     * TALL: the ring sits under the photograph, which is what this format has
     * always been — a picture, a sweep, a number.
     *
     * SQUARE: the ring goes ON the photograph, over a scrim, with the band
     * label inside it. There is simply no room below: stacking a 0.30W ring,
     * a band label and a product name under a picture inside a 783px band
     * leaves a 946x276 letterbox of a photo, and the first attempt at it put
     * "Very bad" straight through the small print. An overlay keeps the
     * picture whole, which on the format whose entire content is a picture is
     * the right thing to protect. */
    var big = g.scanRect;
    var overlay = !g.tall;
    var ringD = W * (g.tall ? 0.34 : 0.29);
    var showName = g.tall && !!spec.name;
    var underRing = overlay ? 0
                  : ringD * 1.28 + W * 0.085 + (showName ? W * 0.028 * 1.7 : 0);
    var endH = overlay ? Math.min(big.h, g.contentBottom - g.contentTop)
             : clamp(g.contentBottom - g.contentTop - underRing, W * 0.30, big.h);
    var box = {
      x: big.x, y: lerp(big.y, g.contentTop, settle),
      w: big.w, h: lerp(big.h, endH, settle)
    };
    var radius = box.w * 0.055;
    drawPhotoCard(ctx, g.img, box, radius, {
      fit: spec.fit, dark: false,
      zoom: 1 + 0.05 * outCubic(span(t, 0, T.end))
    });
    g.scanBox = box; g.scanRadius = radius;
    drawScan(ctx, g, t);

    var sp = span(t, T.score[0], T.score[1]);
    if (sp > 0) {
      var d = ringD;
      var cx = W / 2;
      var cy = overlay ? box.y + box.h - d * 0.72
                       : box.y + box.h + W * 0.055 + d / 2;
      var bp = outCubic(span(t, T.band[0], T.band[1]));

      if (overlay) {
        // A scrim under the ring, clipped to the card, so a white number on a
        // white packshot is still a number.
        ctx.save();
        roundRect(ctx, box.x, box.y, box.w, box.h, radius);
        ctx.clip();
        // Weighted to where the ring actually sits rather than a linear ramp:
        // a white number over a lit supermarket aisle needs the scrim to be
        // dark AT the ring, not only at the very bottom edge.
        var sc = ctx.createLinearGradient(0, box.y + box.h - d * 1.9, 0, box.y + box.h);
        sc.addColorStop(0, rgba(C.night, 0));
        sc.addColorStop(0.45, rgba(C.night, 0.42));
        sc.addColorStop(1, rgba(C.night, 0.86));
        ctx.globalAlpha = clamp01(sp * 4);
        ctx.fillStyle = sc;
        ctx.fillRect(box.x, box.y + box.h - d * 2.1, box.w, d * 2.1);
        ctx.restore();
      }

      ctx.save();
      ctx.globalAlpha = clamp01(sp * 4);
      ctx.translate(0, (1 - outQuint(clamp01(sp * 3))) * W * 0.02);
      if (overlay) {
        // The track has to be visible on a photograph, not on bone.
        ctx.save();
        ctx.lineWidth = d * 0.085;
        ctx.strokeStyle = rgba("#FFFFFF", 0.22);
        ctx.beginPath();
        ctx.arc(cx, cy, (d - d * 0.085) / 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineCap = "round";
        ctx.strokeStyle = bandColor(spec.score);
        ctx.beginPath();
        ctx.arc(cx, cy, (d - d * 0.085) / 2, -Math.PI / 2,
                -Math.PI / 2 + Math.PI * 2 * outQuint(sp) * (spec.score / 100));
        ctx.stroke();
        ctx.restore();
      } else {
        drawRing(ctx, cx, cy, d, outQuint(sp) * (spec.score / 100), g.band);
      }
      ctx.textBaseline = "middle";
      font(ctx, Math.round(d * 0.31), 900, -2);
      ctx.fillStyle = overlay ? "#FFFFFF" : C.ink;
      var v = String(counted(t, T.score, spec.score));
      var vw = textWidth(ctx, v, -2);
      drawText(ctx, v, cx - vw / 2, cy - (overlay ? d * 0.03 : 0), -2);
      if (overlay && bp > 0) {
        ctx.globalAlpha = clamp01(sp * 4) * bp;
        ctx.textBaseline = "alphabetic";
        var obs = Math.round(d * 0.088);
        font(ctx, obs, 800, 1.6);
        ctx.fillStyle = bandColor(spec.score);
        var obl = BAND_LABEL[bandIndex(spec.score)].toUpperCase();
        var obw = textWidth(ctx, obl, 1.6);
        drawText(ctx, obl, cx - obw / 2, cy + d * 0.24, 1.6);
      }
      ctx.restore();

      if (!overlay && bp > 0) {
        ctx.save();
        ctx.globalAlpha = bp;
        ctx.textBaseline = "alphabetic";
        var bs = Math.round(W * 0.052);
        font(ctx, bs, 900, -1);
        ctx.fillStyle = g.band;
        var bl = BAND_LABEL[bandIndex(spec.score)];
        var bw = textWidth(ctx, bl, -1);
        drawText(ctx, bl, cx - bw / 2, cy + d * 0.78, -1);
        if (showName) {
          var ns = Math.round(W * 0.028);
          font(ctx, ns, 700, 0.6);
          ctx.fillStyle = C.ink2;
          var nw = textWidth(ctx, spec.name, 0.6);
          drawText(ctx, spec.name, cx - nw / 2, cy + d * 0.78 + ns * 1.7, 0.6);
        }
        ctx.restore();
      }
    }

    drawSearchPill(ctx, g, false);
    drawTrust(ctx, g, outCubic(span(t, T.foot[0], T.foot[1])), false);
  }

  var RENDERERS = {
    tier: renderTier, metrics: renderMetrics, ring: renderRing,
    versus: renderVersus, card: renderCard
  };

  /* ================================================================== *
   *  Public API
   * ================================================================== */

  /**
   * @param {HTMLCanvasElement} canvas  drawn at the spec's native size
   * @param {object} rawSpec
   * @param {object} [opts] {scale} — 0.5 for a cheap studio preview
   * @returns {{duration:number, render:function(number), spec:object, ready:Promise}}
   */
  function create(canvas, rawSpec, opts) {
    var spec = normalise(rawSpec);
    var o = opts || {};
    var dims = ASPECTS[spec.aspect];
    var W = dims[0], H = dims[1];
    var k = o.scale || 1;

    canvas.width = Math.round(W * k);
    canvas.height = Math.round(H * k);

    // The offscreen the frame is composed on, so `present` blits a FINISHED
    // frame rather than reading back the canvas it is writing to.
    var off = document.createElement("canvas");
    off.width = canvas.width; off.height = canvas.height;
    var octx = off.getContext("2d");
    var dctx = canvas.getContext("2d");

    var T = timeline(spec);
    var pad = W * 0.062;
    var tall = H / W >= 1.3;

    /* The card the scan happens in. Every format starts here and moves it, so
       the lattice is built once against this rect and cannot drift.

       ITS SHAPE COMES FROM THE PHOTOGRAPH — see `reshape`, run once the image
       has decoded. A fixed near-square card letterboxes a portrait packshot
       with two white bands the width of a finger, and the scan then spends a
       second visibly reading empty card. */
    var top = H * (tall ? 0.150 : 0.115), bot = H * (tall ? 0.720 : 0.790);
    var scanRect = { x: pad, y: top, w: W - pad * 2,
                     h: Math.min(bot - top, (W - pad * 2) * 1.12) };
    scanRect.y = top + (bot - top - scanRect.h) / 2;

    function reshape(img) {
      if (!img) return;
      var w = W - pad * 2, avail = bot - top;
      var h = spec.fit === "cover" ? avail
            : clamp(w / (img.width / img.height), avail * 0.52, avail);
      scanRect.h = h;
      scanRect.y = top + (avail - h) / 2;
    }

    var g = {
      W: W, H: H, k: k, pxW: canvas.width, pxH: canvas.height,
      pad: pad, tall: tall, spec: spec, T: T,
      band: bandColor(spec.score),
      // A row of bars all reading 0 looks broken rather than unfinished, and
      // the engine publishes no per-axis sub-scores to fill them with — so on
      // `tier` the block is simply absent unless real numbers were passed.
      hasBars: spec.metrics.some(function (m) { return m.value > 0; }),
      scanRect: scanRect, scanBox: scanRect, scanRadius: W * 0.045,
      // The band between the wordmark and the small print. Every format lays
      // out against these two lines rather than against the frame edges,
      // which is what stops a 9:16 clip from finishing two thirds of the way
      // down and leaving a third of the most expensive real estate on TikTok
      // as empty bone.
      contentTop: pad * 0.72 + W * 0.088 + H * 0.022,
      contentBottom: H - pad - W * 0.058,
      // How dark the ground is right now. Every format opens dark (see
      // `stageWash`) and only `tier` stays that way.
      stageDark: 1,
      img: null, imgB: null, quietHUD: false
    };
    g.lattice0 = buildLattice(scanRect, spec.seed, tall ? 66 : 54);
    g.lattice = g.lattice0;

    var ready = Promise.all([
      fontsReady(),
      loadImage(MARK_SRC).then(function (im) { markImage = im; }),
      loadImage(APPSTORE_SRC).then(function (im) { appStoreGlyph = im; }),
      loadImage(spec.image).then(function (im) { g.img = im; }),
      spec.b ? loadImage(spec.b.image).then(function (im) { g.imgB = im; }) : Promise.resolve()
    ]).then(function () {
      reshape(g.img);
      g.lattice0 = buildLattice(scanRect, spec.seed, tall ? 66 : 54);
      g.lattice = g.lattice0;
      if (spec.format === "versus") {
        // Two panels, two clouds, two seeds. One lattice reused would put the
        // identical constellation on both products, which reads as a texture.
        // Rebuilt against the SAME geometry renderVersus computes, and the two
        // must be derived the same way or the mesh floats off the packs.
        var gap = W * 0.035, side = (W - W * 0.15 - gap) / 2;
        var nameH = W * 0.030 * 1.05, pillH = W * 0.0235 * 2.1;
        var avail = g.contentBottom - g.contentTop;
        var slack = Math.max(0, avail - (W * 0.028 + nameH + pillH));
        var cardH = Math.min(side * 1.34, slack * 0.56);
        var dd = Math.min(side * 0.70, Math.max(W * 0.16, (slack - cardH) / 1.48));
        var blockH = cardH + W * 0.028 + nameH + dd * 1.48 + pillH;
        var topY = g.contentTop + Math.max(0, (avail - blockH) / 2);
        g.lattice0 = buildLattice({ x: W * 0.075, y: topY, w: side, h: cardH }, spec.seed, 34);
        g.latticeB = buildLattice({ x: W * 0.075 + side + gap, y: topY, w: side, h: cardH },
                                  spec.seed ^ 0x9E3779B9, 34);
        g.lattice = g.lattice0;
      }
      return true;
    });

    function render(t) {
      var tt = clamp(t, 0, T.end);
      octx.setTransform(1, 0, 0, 1, 0, 0);
      octx.clearRect(0, 0, off.width, off.height);
      octx.scale(k, k);
      octx.textBaseline = "alphabetic";
      (RENDERERS[spec.format] || renderTier)(octx, g, tt);
      present(dctx, off, g, tt);
    }

    return { duration: T.end, render: render, spec: spec, ready: ready,
             geometry: g, canvas: canvas };
  }

  global.OptimallyClip = {
    create: create,
    specFromQuery: specFromQuery,
    normalise: normalise,
    FORMATS: ["tier", "metrics", "ring", "versus", "card"],
    ASPECTS: Object.keys(ASPECTS),
    TIERS: TIERS,
    BAND_LABEL: BAND_LABEL,
    bandIndex: bandIndex,
    bandColor: bandColor,
    COLORS: C,
    TRUST: TRUST
  };
})(window);
