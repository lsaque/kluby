import React from 'react'

import { ThemeProvider } from 'styled-components'

import { GlobalContextWrapper } from './contexts'
import { useFakeDatabase } from './hooks'
import { Router } from './router'
import { GlobalStyle, THEME } from './styles'

function App() {
  useFakeDatabase()

  return (
    <GlobalContextWrapper>
      <ThemeProvider theme={THEME}>
        <>
          <GlobalStyle />
          <Router />
        </>
      </ThemeProvider>
    </GlobalContextWrapper>
  )
}

export default App
