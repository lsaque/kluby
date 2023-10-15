import { ColorTupleTypes } from './generateRandomColors'

export const compareTwoColors = (
  color1: ColorTupleTypes,
  color2: ColorTupleTypes
) => {
  let blackPoints = 0 // correct color + correct index
  let whitePoints = 0 // correct color

  const colorCount1 = new Map<string, number>()
  const colorCount2 = new Map<string, number>()

  for (let i = 0; i < 4; i++) {
    if (color1[i] === color2[i]) {
      blackPoints++
    } else {
      const colorCount1Value = colorCount1.get(color1[i]) || 0
      const colorCount2Value = colorCount2.get(color2[i]) || 0

      colorCount1.set(color1[i], colorCount1Value + 1)
      colorCount2.set(color2[i], colorCount2Value + 1)
    }
  }

  for (const [color, count] of Array.from(colorCount1.entries())) {
    if (colorCount2.has(color)) {
      whitePoints += Math.min(count, colorCount2.get(color)!)
    }
  }

  return { blackPoints, whitePoints }
}
