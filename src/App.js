import React from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header'
import SCart from './components/SCart/SCart'
import Home from './paginas/Home'
import CadastroPage from './paginas/NewJob'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './components/Theme';
import Servicos from './paginas/serviços';
import TelaDetalhes from './paginas/TelaDetalhes'
import Alert from '@mui/material/Alert';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    
    const itemTaken = {...item, taken: true, qtd:1}
    const novoCarrinho = [...this.state.itensCarrinho, itemTaken]
    this.setState({ itensCarrinho: novoCarrinho })
    alert('Item adicionado ao carrinho com sucesso!')
    // return (<Alert severity="success">Item adicionado ao carrinho com sucesso!</Alert>)
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
            irCarrinho={this.irParaCarrinho}
            irHome={this.irParaHome}
            itensCarrinho={this.state.itensCarrinho}
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
            addToCart={this.addToCart}
            itensCarrinho={this.state.itensCarrinho}
             />
        default:
          return <Home irCadastro={this.irParaCadastro} irListaDeServicos={this.irParaListaDeServicos} />
      }
    }

    render() {
      console.log(this.state.itensCarrinho)
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
