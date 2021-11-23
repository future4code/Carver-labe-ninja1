import React from 'react';
import styled from 'styled-components';

const HeaderHomeECadastro = styled.div`
    background-color: #7869BF;
    color: #F5F5F5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    height: 66px;
    width: 100vw;

    button{
        background-color: #7869BF;
        font-size: 25px;
        color: #F5F5F5;
        border: none;
        padding: 0 15px;
    }
`

const ListadeServicos = styled.div`
    background-color: #7869BF;
    color: #F5F5F5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    width: 100vw;
    
    button{
        background-color: #7869BF;
        font-size: 25px;
        color: #F5F5F5;
        border: none;
        padding: 0 15px;
    }

    input{
        background-color: #9A8FCF;
        border: none;
        border-radius: 10px;
        font-size: 17px;
        height: 40px;
        width: 400px;
    }

    input::placeholder{
        color: #C0B9E1;
        padding-left: 40px;
    }
`

const Carrinho = styled.div`
    background-color: #7869BF;
    color: #F5F5F5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    width: 100vw;
    
    button{
        background-color: #7869BF;
        font-size: 25px;
        color: #F5F5F5;
        border: none;
        padding: 0 15px;
    }
`

const Detalhes = styled.div`
    background-color: #7869BF;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    width: 100vw;
    
    button{
        background-color: #7869BF;
        font-size: 25px;
        color: #F5F5F5;
        border: none;
        padding: 0 15px;
    }
`

export default class Header extends React.Component {

    state = {
        componenteAtual: "Lista de Serviços"
    }

    // onClickLabeninjas = () => {
    //     this.setState({componenteAtual: "Home"})
    // }

    // onChangeInputBusca = (e) => {
    //     this.setState({inputBusca: e.target.value})
    // }

    // onClickCarrinho = () => {
    //     this.setState({componenteAtual: "Carrinho"})
    // }

    // onClickAddCarinho = () => {
    //     this.setState({componenteAtual: "Lista de Serviços"})
    // }

    estadoComponenteAtual = () => {
        switch(this.state.componenteAtual){
            case "Home":
                return (
                    <HeaderHomeECadastro>
                        <button>LabeNinjas</button>
                    </HeaderHomeECadastro>
                )
            case "Cadastro":
                return(
                    <HeaderHomeECadastro>
                        <button>LabeNinjas</button>
                    </HeaderHomeECadastro>
                )
            case "Lista de Serviços":
                return(
                    <ListadeServicos>
                        <button>LabeNinjas</button>
                        <input placeholder="Busca"></input>
                        <button>Carrinho</button>
                    </ListadeServicos>
                )
            case "Detalhes":
                return(
                    <Detalhes>
                        <button>LabeNinjas</button>
                        <button>Carrinho</button>
                    </Detalhes>
                )
            case "Carrinho":
                return(
                    <Carrinho>
                        <button>LabeNinjas</button>
                        <button>Adicionar Carrinho</button>
                    </Carrinho>
                )
            default:
                return(
                    <div>
                        <button>Labeninjas</button>
                    </div>
                )
        }
    }

  render() {
    return (
           <div>
               {this.estadoComponenteAtual()}
           </div>
    )
  }
}