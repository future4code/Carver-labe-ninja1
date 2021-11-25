import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'

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
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default class App extends React.Component {
  state = {

    componenteAtual: ""
  }
  componentDidMount() {
    this.irParaHome()
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
  irParaDetalhes = () => {
    this.setState({componenteAtual: "Detalhes"})
  }
  escolherComponente = () => {
    switch(this.state.componenteAtual){
      case "Home":

        return <Home irCadastro={this.irParaCadastro} irListaDeServicos={this.irParaListaDeServicos}/>
        
      case "Cadastro":
        return
        // <Cadastro />

      case "Lista de Serviços":
        return
        // <irListaDeServicos />
      case "Carrinho":
        return
        // <Carrinho />
      case "Detalhes":
        return
        // <Detalhes />
      default:

        return
  
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

