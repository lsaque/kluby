import React from 'react'

import { Route } from 'react-router-dom'

import {
  AppError,
  AppLayout,
  AppPage,
  PrimeNumberVerificationPage,
  TaskListPage,
  TheGameOdColorsPage,
  WeightedAverageCalculatorPage,
} from '../../pages'
import { ROUTES } from '../Router'

export const renderAppRoutes = () => {
  const {
    ROOT,
    PRIME_NUMBER_VERIFICATION,
    TASK_LIST,
    THE_GAME_OF_COLORS,
    WEIGHTED_AVERAGE_CALCULATOR,
  } = ROUTES.APP

  return (
    <Route path={ROOT} Component={AppLayout} ErrorBoundary={AppError}>
      <Route index Component={AppPage} />
      <Route
        path={PRIME_NUMBER_VERIFICATION}
        Component={PrimeNumberVerificationPage}
      />
      <Route
        path={WEIGHTED_AVERAGE_CALCULATOR}
        Component={WeightedAverageCalculatorPage}
      />
      <Route path={THE_GAME_OF_COLORS} Component={TheGameOdColorsPage} />
      <Route path={TASK_LIST} Component={TaskListPage} />
    </Route>
  )
}
