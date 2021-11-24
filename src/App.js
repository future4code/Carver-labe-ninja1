import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import Header from './components/Header'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './components/Theme';
import CadastroPage from './components/NewJob'

const DivAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DivAppContainer>
        <Header />
        <CadastroPage/>
      </DivAppContainer>
    </ThemeProvider>
  )
}

export default App
