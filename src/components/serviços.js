import React from "react";
import CardServico from "./cardServico";
import styled from "styled-components"
import axios from "axios"

const ContainerServico = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr ;
    gap: 10px;
    padding-top: 30px;
`

const ContainerInputs = styled.div`
    display: flex;
    background-color: gray;
`


const baseURL = "https://labeninjas.herokuapp.com"
const autorizacao = {
    headers: {
        Authorization: "9625d647-f235-4369-90c5-7e1f0a933d2d"
    }
}


export default class Servicos extends React.Component {
    state = {
        listaServico: [],
        ordenacao: "preco",
        cresceOUdecre: "1",
    }


    componentDidMount() {
        this.novosServicos()
    }

    novosServicos = () => {
        axios.get(baseURL + "/jobs", autorizacao)
            .then((res) => {
                this.setState({ listaServico: res.data.jobs })
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    mudancaOrdenacao = (evento) => {
        this.setState({ ordenacao: evento.target.value })
    }

    mudancaCreceOUdecre = (evento) => {
        this.setState({ cresceOUdecre: evento.target.value })
    }


    filtros = () => {
        return (
            <ContainerInputs>
                <select value={this.state.ordenacao} onChange={this.mudancaOrdenacao}>
                    <option value="preco">Preço </option>
                    <option value="titulo">Titulo </option>
                    <option value="prazo">Prazo </option>
                </select>
                <select value={this.state.cresceOUdecre} onChange={this.mudancaCreceOUdecre}>
                    <option value="1" >Crescente</option>
                    <option value="-1" >Decrescente</option>
                </select>
                <input placeholder={"Valor Minimo"} />
                <input placeholder={"Valor Maximo"} />
            </ContainerInputs>
        )
    }

    render() {

        return (

            <div>
                {this.filtros()}
                <ContainerServico>
                    {this.state.listaServico
                        // .filter() // campo de busca
                        // .filter() // valor mínimo
                        // .filter() // valor máximo
                        .sort((a, b) => {
                            switch (this.state.ordenacao) {
                                case "titulo":
                                    return (a.title.localeCompare(b.title)) * Number(this.state.cresceOUdecre)
                                case "prazo":
                                    return (new Date(a.dueDate) - new Date(b.dueDate)) * Number(this.state.cresceOUdecre)
                                default:
                                    return (a.price - b.price) * Number(this.state.cresceOUdecre)
                            }
                        })
                        .map((servico) => {
                            return <CardServico servico={servico} irParaDetalhes={this.props.irParaDetalhes} addToCart={this.props.addToCart} />
                        }
                        )}
                </ContainerServico>
            </div>
        )
    }
}


