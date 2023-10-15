import React, { createElement } from 'react'

import { ReactComponent as FeedingCatSVG } from '../assets/app/feeding-cat.svg'
import { ReactComponent as ManCallingWithADogSVG } from '../assets/app/man-calling-with-dog.svg'
import { ReactComponent as ManInAParkSVG } from '../assets/app/man-in-a-park.svg'
import { ReactComponent as RunningWomanSVG } from '../assets/app/running-woman.svg'
import { ROUTES } from '../router'

type RouteProgramKeys = keyof typeof ROUTES.APP
type RouteProgramKeysWithoutRoot = Exclude<RouteProgramKeys, 'ROOT'>
type RouteNamePaths = RouteProgramKeysWithoutRoot

type ProgramTypes = {
  id: string
  title: string
  description: React.ReactNode
  icon: React.ReactNode
  getPath: () => string
}

type ProgramsObject = Record<RouteNamePaths, ProgramTypes>

const PRIME_NUMBER_VERIFICATION_NAME = 'Prime number verification'
const WEIGHTED_AVERAGE_CALCULATOR_NAME = 'Weighted average calculator'
const THE_GAME_OF_COLORS_NAME = 'The game of colors'
const TASK_LIST_NAME = 'Task list'

const OBJECT_OF_PROGRAMS: ProgramsObject = {
  PRIME_NUMBER_VERIFICATION: {
    id: 'a756e0c1-f0ce-429b-b6c7-ca190eb883f0',
    title: PRIME_NUMBER_VERIFICATION_NAME,
    description:
      'Quickly and accurately verify prime numbers with our intuitive and efficient program.',
    icon: createElement(FeedingCatSVG, {
      title: PRIME_NUMBER_VERIFICATION_NAME,
    }),
    getPath: () => ROUTES.APP.PRIME_NUMBER_VERIFICATION,
  },
  WEIGHTED_AVERAGE_CALCULATOR: {
    id: 'f10dbc6b-cca8-4c88-b0b7-94665b730fef',
    title: WEIGHTED_AVERAGE_CALCULATOR_NAME,
    description:
      'Calculate weighted averages effortlessly with our user-friendly program.',
    icon: createElement(ManCallingWithADogSVG, {
      title: WEIGHTED_AVERAGE_CALCULATOR_NAME,
    }),
    getPath: () => ROUTES.APP.WEIGHTED_AVERAGE_CALCULATOR,
  },
  THE_GAME_OF_COLORS: {
    id: '9cc35de3-845f-4064-9626-43bb5867ca56',
    title: THE_GAME_OF_COLORS_NAME,
    description: `In this game, you must guess a 4-color sequence (R, G, B, Y) with limited attempts. Black dots (B) indicate correct colors in the right position, white dots (W) for correct colors in the wrong position. Win by guessing the sequence, or lose after 10 attempts. Can you crack the code?`,
    icon: createElement(ManInAParkSVG, {
      title: THE_GAME_OF_COLORS_NAME,
    }),
    getPath: () => ROUTES.APP.THE_GAME_OF_COLORS,
  },
  TASK_LIST: {
    id: '4f44646a-afe0-4f34-8f62-4ca2a699ed1d',
    title: TASK_LIST_NAME,
    description:
      'Simplify your tasks with our Task List app, your ultimate to-do companion.',
    icon: createElement(RunningWomanSVG, {
      title: TASK_LIST_NAME,
    }),
    getPath: () => ROUTES.APP.TASK_LIST,
  },
}

export const usePrograms = () => ({
  list: Object.values(OBJECT_OF_PROGRAMS),
  object: OBJECT_OF_PROGRAMS,
})
