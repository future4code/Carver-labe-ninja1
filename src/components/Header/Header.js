import React from 'react';
import Logo from '../../img/logo.png';
import IconCarrinho from '../../img/cart.png';
import {IconeCarrinho, LogoButton, Detalhes, Carrinho, HeaderHomeECadastro } from './Header.styled'
import IconAddCarrinho from "../../img/addCart.png"
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
                return ("")
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