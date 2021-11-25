import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import IconCarrinho from '../img/cart.png';
// import Lupa from "../img/search-3-32.png"
import IconAddCarrinho from "../img/addCart.png"
import InputBase from '@material-ui/core/InputBase'



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
    
    span{
        background-color: #7869BF;



        font-size: 21px;
        color: #F5F5F5;
        border: none;       
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
    position: relative;
    left: 0;
    right: 0;
    margin-right: 160px;
    border-radius: 8px;
    background-color: rgba(255,255,255, 0.15);
    margin-left: 0;
    padding: 4px;
    display: flex;
    align-items: center;
    width: 400px;
    &:hover {
        background-color: rgba(255,255,255, 0.25);
    }

    input{
        background-color: #8C7FC9;
        border: none;
        font-size: 17px;
        height: 35px;
        width: 400px;
        color: white; 
        
        &:hover{
        background-color: #9A8FCF;
        cursor: pointer;
        } 
    }

    input::placeholder{
        color: #C0B9E1;
    }

    img{
        width: 20px;
        height: 20px;
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
        switch(this.props.paginaAtual){

            case "Home":
                return (
                    <HeaderHomeECadastro>
                        <LogoButton onClick={this.props.irHome}>
                           <img alt="logo" src={Logo}></img>
                           <span>LabeNinjas</span>
                       </LogoButton>
                    </HeaderHomeECadastro>
                )
            case "Cadastro":
                return (
                    <HeaderHomeECadastro>
                        <LogoButton onClick={this.props.irHome}>
                           <img alt="logo" src={Logo}></img>
                           <span>LabeNinjas</span>
                       </LogoButton>
                    </HeaderHomeECadastro>
                )
            case "Lista de Serviços":
                return (
                    <ListadeServicos>
                       <LogoButton onClick={this.props.irHome}>
                           <img alt="logo" src={Logo}></img>
                           <span>LabeNinjas</span>
                       </LogoButton>
                       <DivInput>
                            {/* <img alt="Icon de lupa" src={Lupa} />
                            <input type="search" placeholder="Busca"></input> */}
                            
                            <InputBase
                                inputProps={{ style: { color: 'white', width: '350px' } }}
                                placeholder="Busca"
                            />
                        </DivInput>
                        <IconeCarrinho onClick={this.props.irCarrinho}>
                            <span>
                                <img alt="Icone Carrinho" src={IconCarrinho} />
                            </span>
                        </IconeCarrinho>
                    </ListadeServicos>
                )
            case "Detalhes":
                return (
                    <Detalhes>
                        <LogoButton onClick={this.props.irHome}>
                            <img alt="logo" src={Logo}></img>
                            <span>LabeNinjas</span>
                        </LogoButton>
                        <IconeCarrinho onClick={this.props.irCarrinho}>
                            <span>
                                <img alt="Icone Carrinho" src={IconCarrinho} />
                            </span>
                        </IconeCarrinho>
                    </Detalhes>
                )
            case "Carrinho":
                return (
                    <Carrinho>
                        <LogoButton onClick={this.props.irHome}>
                           <img alt="logo" src={Logo}></img>
                           <span>LabeNinjas</span>
                       </LogoButton>
                        <IconeCarrinho onClick={this.props.irListaDeServicos}>
                            <span>
                                <img alt="Icone Carrinho" src={IconAddCarrinho} />
                            </span>
                        </IconeCarrinho>
                    </Carrinho>
                )
            default:
                return (
                    <div>
                        <LogoButton onClick={this.props.irHome}>
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