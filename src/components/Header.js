import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import IconCarrinho from '../img/cart.png';
import Lupa from "../img/search-3-32.png"
import IconAddCarrinho from "../img/addCart.png"





const HeaderHomeECadastro = styled.div`
    background-color: #7869BF;
    color: #F5F5F5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    height: 66px;
    width: 100vw;



    span{
        background-color: #7869BF;
        font-size: 21px;
        color: #F5F5F5;
        border: none;

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
    padding: 0 50px;

    
    span{
        background-color: #7869BF;



        font-size: 21px;
        color: #F5F5F5;
        border: none;
    }
    input{
        background-color: #8C7FC9;
        border: none;
        border-radius: 10px;
        font-size: 17px;
        height: 40px;
        width: 400px;
        color: white;



        &:hover{
            background-color: #9A8FCF;
            cursor: pointer;
        }    
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

    span{
        background-color: #7869BF;
        font-size: 21px;
        color: #F5F5F5;
        border: none;
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


    span{
        background-color: #7869BF;
        font-size: 21px;
        color: #F5F5F5;
        border: none;

    }
`

const LogoButton = styled.div`
    height: 75%;
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 30px;

    &:hover{
        background-color: #7365B8;
        cursor: pointer;
    }
    
    img{
        width: 40px;
        color: #F5F5F5;
    } 
`

const DivInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 25px;
        height: 25px;
    }
`

const IconeCarrinho = styled.div`
    border-radius: 80px;
    height: 75%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;

    img{
        width: 25px;
    }
    
    &:hover{
        background-color: #7365B8;
        cursor: pointer;

    }
`
export default class Header extends React.Component {
    
    estadoComponenteAtual = () => {
        switch (this.props.paginaAtual) {
            case "Home":
                return (
                    <HeaderHomeECadastro>
                        <LogoButton>
                           <img alt="logo" src={Logo}></img>
                           <span>LabeNinjas</span>
                       </LogoButton>
                    </HeaderHomeECadastro>
                )
            case "Cadastro":
                return (
                    <HeaderHomeECadastro>
                        <LogoButton>
                           <img alt="logo" src={Logo}></img>
                           <span>LabeNinjas</span>
                       </LogoButton>
                    </HeaderHomeECadastro>
                )
            case "Lista de Serviços":
                return (
                    <ListadeServicos>

                       <LogoButton>
                           <img alt="logo" src={Logo}></img>
                           <span>LabeNinjas</span>
                       </LogoButton>
                       <DivInput>
                            <img alt="Icon de lupa" src={Lupa} />
                            <input placeholder="Busca"></input>
                        </DivInput>
                        <IconeCarrinho>
                            <span>
                                <img alt="Icone Carrinho" src={IconCarrinho} />
                            </span>
                        </IconeCarrinho>
                    </ListadeServicos>
                )
            case "Detalhes":
                return (
                    <Detalhes>
                        <LogoButton>
                            <LogoButton>
                                <img alt="logo" src={Logo}></img>
                                <span>LabeNinjas</span>
                            </LogoButton>
                        </LogoButton>
                        <IconeCarrinho>
                            <span>
                                <img alt="Icone Carrinho" src={IconCarrinho} />
                            </span>
                        </IconeCarrinho>
                    </Detalhes>
                )
            case "Carrinho":
                return (
                    <Carrinho>
                        <LogoButton>

                           <img alt="logo" src={Logo}></img>
                           <span>LabeNinjas</span>
                       </LogoButton>
                        <IconeCarrinho>
                            <span>
                                <img alt="Icone Carrinho" src={IconAddCarrinho} />
                            </span>
                        </IconeCarrinho>
                    </Carrinho>
                )
            default:
                return (
                    <div>
                        <LogoButton>
                           <img alt="logo" src={Logo}></img>
                           <button>LabeNinjas</button>
                       </LogoButton>
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