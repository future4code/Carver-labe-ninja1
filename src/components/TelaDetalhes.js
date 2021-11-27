import axios from 'axios'
import styled from 'styled-components'
import React from 'react'
import { Button } from '@material-ui/core'

const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 100vw;
`
const CardTitulo = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #7C66C5;
    margin-bottom: 20px;
`
const ListaPg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Botoes = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-around;
`

const ContainerFormasPagto = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 5px 10px;
    padding: 2px 5px;
    border-radius: 30px;
    background-color: #7C66C5;
    color: whitesmoke;
`

const ContainerParaFormasPagto = styled.div`
    display: flex;
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
                    Métodos de pagamento aceitos
                    <ContainerParaFormasPagto>
                        {this.state.metodosPagto.map((item) => {
                            return <ContainerFormasPagto>{item}</ContainerFormasPagto>
                        })}
                    </ContainerParaFormasPagto>
                </ListaPg>
                <div>
                    <h4>Até {this.state.data} por R$  {this.state.servico.price}</h4>
                </div>
                <div>
                    <h4>{this.state.servico.description}</h4>
                </div>
                <Botoes>
                    <Button variant="text" onClick={() => this.props.addToCart(this.state.servico)}>Adicionar ao Carrinho</Button>
                    <hr/>
                    <Button variant="text" onClick={this.props.irListaDeServicos}>Voltar para a Lista</Button>
                </Botoes>
            </ContainerDetalhes>
        )
    }
}