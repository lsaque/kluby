import React from 'react'

import { Navigate, Route } from 'react-router-dom'

import {
  AuthError,
  AuthLayout,
  SignInPage,
  SignOutPage,
  SignUpPage,
} from '../../pages'
import { ROUTES } from '../Router'

export const renderSignOutRoute = () => (
  <Route path={ROUTES.AUTH.SIGN_OUT} Component={SignOutPage} />
)

export const renderAuthRoutes = () => {
  const { ROOT, SIGN_IN, SIGN_UP } = ROUTES.AUTH

  return (
    <Route path={ROOT} ErrorBoundary={AuthError} Component={AuthLayout}>
      <Route index element={<Navigate to={SIGN_IN} />} />
      <Route path={SIGN_IN} Component={SignInPage} />
      <Route path={SIGN_UP} Component={SignUpPage} />
    </Route>
  )
}
