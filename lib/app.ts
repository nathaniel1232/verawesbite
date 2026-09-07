/**
 * The App Store facts, in one place.
 *
 * WHY A FILE FOR FOUR CONSTANTS: the site shipped for weeks with a hard-coded
 * "Coming soon to the App Store" span and a placeholder
 * `apps.apple.com/app/idYOURAPPID` in a comment beside it. Optimally went live
 * on 4 September 2026 and the official website still had no way to download
 * it — the one thing every visitor is there to do. A constant that is imported
 * everywhere is a constant somebody notices is wrong.
 *
 * Verified against the iTunes lookup API, not typed from memory:
 *   curl "https://itunes.apple.com/lookup?bundleId=com.nathanielfiskaa.vera"
 */
export const APP_STORE_ID = '6794813704'

/** The canonical short link. Apple resolves it to the localised listing. */
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`

/** Exactly as it reads on the store listing, capital S and all. */
export const APP_STORE_NAME = 'Optimally: Food Scanner'

/** Bundle id, for anyone cross-checking against the app project. */
export const BUNDLE_ID = 'com.nathanielfiskaa.vera'
