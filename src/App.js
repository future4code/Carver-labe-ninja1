import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import SCart from './components/SCart'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './components/Theme';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`

import CadastroPage from './components/NewJob'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './components/Theme';


import Home from './components/Home'



const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`
const DivAppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default class App extends React.Component {
  state = {

export default class App extends React.Component {
  state = {
    componenteAtual: "Carrinho",
    idParaDetalhe: ''
  }

  irParaHome = () => {
    this.setState({componenteAtual: "Home"})
  }

  irParaCarrinho = () => {
    this.setState({componenteAtual: "Carrinho"})
  }

  irParaListaDeServicos = () => {
    this.setState({componenteAtual: "Lista de Serviços"})
  }

  irParaCadastro = () => {
    this.setState({componenteAtual: "Cadastro"})
  }

  irParaDetalhes = (id) => {
    this.setState({componenteAtual: "Detalhes"})
    this.setState({irParaDetalhe: id})
    console.log(id)
  }

  escolherComponente = () => {
    switch(this.state.componenteAtual){
      case "Home":
        return 
        // <Home />
      case "Cadastro":
        return 
        // <Cadastro />
      case "Lista de Serviços":
        return 
        // <irListaDeServicos />
      case "Carrinho":
        return <SCart 
          irParaDetalhes={this.irParaDetalhes} 
        />
      case "Detalhes":
        return 
        // <Detalhes id={this.state.irParaDetalhe}/>
      default:
        return 
        // <Home />
    }
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DivAppContainer>
          <Header
            paginaAtual={this.state.componenteAtual}
            irHome={this.irParaHome}
            irCarrinho={this.irParaCarrinho}
            irListaDeServicos={this.irParaListaDeServicos}
          />
          {this.escolherComponente()}
        </DivAppContainer>
      </ThemeProvider>
    )
  }
}
