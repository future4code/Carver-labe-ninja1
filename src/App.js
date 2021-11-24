import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './components/Theme';
import CadastroPage from './components/NewJob'

const DivAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export default class App extends React.Component {
  state = {
    pagina: ""
  }
  escolherPagina = () => {
    switch (this.state.pagina) {
      case "cadastro":
        
      default:
        return <CadastroPage />
    }
  }
  render() {

    return (
      <ThemeProvider theme={theme}>
        <DivAppContainer>
          {this.escolherPagina()}
        </DivAppContainer>
      </ThemeProvider>
    )
  }
}


