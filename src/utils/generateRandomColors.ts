export const POSSIBLE_COLORS = ['R', 'G', 'B', 'Y']

const getRandomColor = () => POSSIBLE_COLORS[Math.floor(Math.random() * 4)]

export type ColorTupleTypes = [string, string, string, string]

export const generateRandomColors = (): ColorTupleTypes => [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
]
