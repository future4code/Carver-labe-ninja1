import react from 'react'
import axios from 'axios'
import styled from 'styled-components'
import React from 'react'
import carrinho from '../img/addCart.png'
import { style } from '@material-ui/system'

const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 100vw;
`
const CardTitulo = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: center;
`
const ListaPg = styled.div`
    display: flex;
    flex-direction: column;
`
const Button = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
`
const autorizacao = {
    headers: {
        Authorization: "9625d647-f235-4369-90c5-7e1f0a933d2d"
    }
}
export default class TelaDetalhes extends React.Component {
    state = {
        servico: {},
        metodosPagto: [],
        data: '' 
    }

    componentDidMount() {
        this.pegarJob()
    }

    pegarJob = () => {
        axios.get(
            `https://labeninjas.herokuapp.com/jobs/${this.props.id}`,
            autorizacao,
        )
            .then((res) => {
                this.setState({
                    servico: res.data,
                    metodosPagto: res.data.paymentMethods,
                    data: res.data.dueDate.replace('T00:00:00.000Z', "")
                })
            })
            .catch((err) => {
                console.log(err.response)
                alert("Não foi possível visualizar detalhes.")
            })
    }

    render() {
        return (
            <ContainerDetalhes>
                <CardTitulo>
                    <h1>
                        {this.state.servico.title}
                    </h1>
                </CardTitulo>
                <ListaPg>
                    <p>Aceita: {this.state.metodosPagto.map((item) => {
                        return <span>{item} </span>
                    })} </p>
                </ListaPg>
                <div>
                    <h4>Até {this.state.data} por R$  {this.state.servico.price}</h4>
                </div>
                <div>
                    <h4>{this.state.servico.description}</h4>
                </div>
                <Button>
                    <button onClick={() => this.props.addToCart(this.state.servico)} >ADICIONAR AO CARRINHO</button>
                    <button onClick={this.props.irListaDeServicos}> VOLTAR PARA LISTA</button>
                </Button>
            </ContainerDetalhes>
        )
    }
}