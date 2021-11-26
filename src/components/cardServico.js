import { SupervisorAccountSharp } from "@mui/icons-material";
import React from "react";
// import Carrinho from "src\img\cart.png"
import styled from "styled-components"


const ContainerCardServico = styled.div`
    background-color: rgb(223,219,240);
    display: inline-grid;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    box-shadow: 3px 3px 3px gray;
    border-radius: 10px;
`

const ContainerDetalhe = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

export default class CardServico extends React.Component {



    render() {

        return (

            <ContainerCardServico>

                <h1>{this.props.servico.title}</h1>
                <h2>Ate {this.props.servico.dueDate.replace('T00:00:00.000Z', "")} Por R$ {this.props.servico.price}</h2>

                <ContainerDetalhe>
                    <span onClick={() => this.props.irParaDetalhes(this.props.servico.id)}>Detalhes</span>
                    <button onClick={() => this.props.addToCart(this.props.servico)}>Add</button>
                </ContainerDetalhe>

            </ContainerCardServico>
        )
    }
}