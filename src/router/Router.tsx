import React from 'react'

import {
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { useAuth } from '../hooks'

import { renderAppRoutes } from './routes/App.routes'
import { renderAuthRoutes, renderSignOutRoute } from './routes/Auth.routes'

export const ROUTES = {
  ROOT: '/',
  UNKNOWN: '*',
  AUTH: {
    ROOT: '/auth',
    SIGN_IN: `/auth/sign-in`,
    SIGN_UP: '/auth/sign-up',
    SIGN_OUT: '/auth/sign-out',
  },
  APP: {
    ROOT: '/app',
    PRIME_NUMBER_VERIFICATION: '/app/prime-number-verification',
    WEIGHTED_AVERAGE_CALCULATOR: '/app/weighted-average-calculator',
    THE_GAME_OF_COLORS: '/app/the-game-of-colors',
    TASK_LIST: '/app/task-list',
  },
} as const

export const Router = () => {
  const { isSignedIn } = useAuth()

  const browserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.ROOT}>
        {isSignedIn ? (
          <>
            <Route index element={<Navigate to={ROUTES.APP.ROOT} />} />
            {renderAppRoutes()}
            {renderSignOutRoute()}
          </>
        ) : (
          <>
            <Route index element={<Navigate to={ROUTES.AUTH.ROOT} />} />
            {renderAuthRoutes()}
          </>
        )}
        <Route path={ROUTES.UNKNOWN} element={<Navigate to={ROUTES.ROOT} />} />
      </Route>
    )
  )

  return (
    <RouterProvider
      router={browserRouter}
      fallbackElement={<div>Loading...</div>}
    />
  )
}
