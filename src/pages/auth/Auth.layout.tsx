import React from 'react'

import { Outlet } from 'react-router-dom'

import { ReactComponent as RestingManSVG } from '../../assets/auth/resting-man.svg'

import * as S from './Auth.styles'
export function AuthLayout() {
  return (
    <S.Layout>
      <S.MainContent>
        <Outlet />
      </S.MainContent>
      <S.ImageContainer>
        <RestingManSVG />
      </S.ImageContainer>
    </S.Layout>
  )
}
