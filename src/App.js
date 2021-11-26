import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import SCart from './components/SCart'
import Home from './components/Home'
import CadastroPage from './components/NewJob'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './components/Theme';
import Servicos from './components/serviços';
import TelaDetalhes from './components/TelaDetalhes'

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
    componenteAtual: "Home",
    idParaDetalhe: '',
    itensCarrinho: []
  }

  irParaHome = () => {
    this.setState({ componenteAtual: "Home" })
  }

  irParaCarrinho = () => {
    this.setState({ componenteAtual: "Carrinho" })
  }

  irParaListaDeServicos = () => {
    this.setState({ componenteAtual: "Lista de Serviços" })
  }

  irParaCadastro = () => {
    this.setState({ componenteAtual: "Cadastro" })
  }

  irParaDetalhes = (id) => {
    this.setState({ componenteAtual: "Detalhes" })
    this.setState({ idParaDetalhe: id })
  }

  addToCart = (item) => {
    const novoCarrinho = [... this.state.itensCarrinho, item]
    this.setState({ itensCarrinho: novoCarrinho })
  }

  removeFromCart = (id) => {
    const confirmacao = window.confirm('Deseja realmente remover este item do carrinho?')
    if (confirmacao) {
      const novoCarrinho = this.state.itensCarrinho.filter(item => {
        if (id !== item.id) {
          return item
        }
      })
      this.setState({ itensCarrinho: novoCarrinho })
    }
  } 

  clearCart = () => {
    const confirmacao = window.confirm('Deseja realmente limpar o carrinho?')
    confirmacao && this.setState({ itensCarrinho: [] })
  }

  finalizarCompra = () => {
    alert('Compra efetuada com sucesso!')
    this.setState({itensCarrinho: []})
}

    escolherComponente = () => {
      switch (this.state.componenteAtual) {
        case "Home":
          return <Home
            irCadastro={this.irParaCadastro}
            irListaDeServicos={this.irParaListaDeServicos}
          />
        case "Cadastro":
          return <CadastroPage />
        case "Lista de Serviços":
          return <Servicos
            addToCart={this.addToCart}
            irParaDetalhes={this.irParaDetalhes}
          />
        case "Carrinho":
          return <SCart
            itensCarrinho={this.state.itensCarrinho}
            irParaDetalhes={this.irParaDetalhes}
            removeFromCart={this.removeFromCart}
            clearCart={this.clearCart}
            finalizarCompra={this.finalizarCompra}
          />
        case "Detalhes":
          return <TelaDetalhes
            id={this.state.idParaDetalhe}
            irListaDeServicos={this.irParaListaDeServicos}
            addToCart={this.addToCart} />
        default:
          return <Home irCadastro={this.irParaCadastro} irListaDeServicos={this.irParaListaDeServicos} />
      }
    }

    render() {

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
