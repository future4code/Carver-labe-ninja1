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

export default class CardServico extends React.Component {



    render() {

        return (


            <ContainerCardServico>

                <h1>{this.props.title}</h1>
                <h2>Ate {this.props.dueDate} Por R$ {this.props.price}</h2>
                
               <div> Detalhes </div>

            </ContainerCardServico>


        )
    }
}