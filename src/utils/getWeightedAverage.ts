type Grade = {
  value: number
  weight: number
}

export const getWeightedAverage = (grades: Grade[]) => {
  const totalOfWeights = grades.reduce((acc, cur) => acc + cur.weight, 0)
  const totalOfGrades = grades.reduce(
    (acc, cur) => acc + cur.value * cur.weight,
    0
  )

  const weightedAverage = totalOfGrades / totalOfWeights

  return Number(weightedAverage.toFixed(2))
}
