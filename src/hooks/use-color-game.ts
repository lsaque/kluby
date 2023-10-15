import { useMemo, useState } from 'react'

import { ColorTupleTypes, generateRandomColors } from '../utils'
import { compareTwoColors } from '../utils/compareColors'

const INITIAL_ATTEMPTS_VALUE = 10
const INITIAL_USER_GUESS = ['', '', '', ''] as ColorTupleTypes

export const useColorGame = () => {
  const sequence = useMemo(() => generateRandomColors(), [])
  const [attempts, setAttempts] = useState(INITIAL_ATTEMPTS_VALUE)
  const [userGuess, setUserGuess] = useState(INITIAL_USER_GUESS)

  const { blackPoints, whitePoints } = compareTwoColors(sequence, userGuess)
  const tips = `${blackPoints}B ${whitePoints}W`

  const didYouLoose = attempts === 0
  const didYouWin = JSON.stringify(sequence) === JSON.stringify(userGuess)

  const hasGameFinished = didYouLoose || didYouWin

  const handleGameReset = () => {
    setAttempts(INITIAL_ATTEMPTS_VALUE)
    setUserGuess(INITIAL_USER_GUESS)
  }

  const handleGuess = (_userGuess: ColorTupleTypes) => {
    setUserGuess(_userGuess)
    setAttempts((curAttempts) => curAttempts - 1)
  }

  return {
    sequence,
    tips,
    userGuess,
    attempts,
    didYouLoose,
    didYouWin,
    handleGuess,
    handleGameReset,
    hasGameFinished,
  }
}
