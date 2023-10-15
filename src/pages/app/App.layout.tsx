import React from 'react'

import { Link, Outlet, useLocation, useOutletContext } from 'react-router-dom'

import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg'
import {
  Button,
  Container,
  Description,
  Logo,
  Typography,
} from '../../components'
import { useCompany, usePrograms } from '../../hooks'
import { ROUTES } from '../../router'

import * as S from './App.styles'

const PAGE_LAYOUT_TITLE = 'Programs'
const PAGE_LAYOUT_DESCRIPTION = (
  <>
    Explore our vast library of programs and effortlessly find the perfect match
    for your preferences. <br />
    Search for programs that cater to your needs and dive into a world of
    endless possibilities.
  </>
)

type OutletContextTypes = ReturnType<typeof usePrograms>

export function AppLayout() {
  const location = useLocation()
  const programs = usePrograms()
  const company = useCompany()

  const pageProgram = programs.list.find(
    (program) => program.getPath() === location.pathname
  )

  const isAppRoot = location.pathname === ROUTES.APP.ROOT

  return (
    <S.AppLayout>
      <Container
        $maxWidth='sm'
        $gap={3}
        $fullWidth
        style={{ justifyContent: 'space-between' }}
      >
        <S.Heading>
          <S.Header>
            {isAppRoot ? (
              <Logo />
            ) : (
              <Button
                as={Link}
                to={ROUTES.APP.ROOT}
                type='button'
                $variant='text'
                $rounded
                style={{
                  width: 'max-content',
                  padding: '0rem 1.6rem',
                  margin: '0 -1.6rem',
                  gap: '0.5rem',
                }}
              >
                <ArrowLeftIcon />
                <Logo />
              </Button>
            )}

            <Button
              as={Link}
              to={ROUTES.AUTH.SIGN_OUT}
              $variant='text'
              $fullWidth={false}
            >
              Sign out
            </Button>
          </S.Header>

          <Description
            title={pageProgram?.title || PAGE_LAYOUT_TITLE}
            description={pageProgram?.description || PAGE_LAYOUT_DESCRIPTION}
          />
        </S.Heading>

        <Outlet context={programs} />
        <Typography $textAlign='center' $color='text.secondary'>
          {company.name}&nbsp;©&nbsp;{new Date().getFullYear()}
        </Typography>
      </Container>
    </S.AppLayout>
  )
}

export const useAppLayoutContext = () => {
  const outletContext = useOutletContext<OutletContextTypes>()
  if (!outletContext) {
    throw new Error(
      'useAppLayoutContext must be used within an App.Layout.OutletContext.Provider'
    )
  }
  return outletContext
}
