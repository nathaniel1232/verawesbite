import type { GuideTopic } from './guides'

export const GUIDE_TOPICS: {
  id: GuideTopic
  label: string
  description: string
}[] = [
  {
    id: 'approach',
    label: 'Primal & Ray Peat',
    description:
      'The ideas behind Optimally, and how to put them into practice.',
  },
  {
    id: 'food',
    label: 'Everyday foods',
    description:
      'Eggs, dairy, meat, fish, fruit, and the details worth checking.',
  },
  {
    id: 'scanning',
    label: 'Labels & scanning',
    description:
      'Better scans, clearer labels, and useful answers at the shelf.',
  },
  {
    id: 'comparison',
    label: 'Choosing an app',
    description: 'Find the food scanner that fits the way you want to eat.',
  },
]
