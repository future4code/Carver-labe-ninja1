import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ContainerItensCarrinho = styled.div`
    background-color: #F5F5F5;
    border-radius: 5px;
    margin: 10px auto;
    width: 50vw;
    display: flex;
    align-items: center;
`

const ContainerTituloServico = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`

const ContainerPrecoServico = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #7C66C5;
`

const ContainerRemoverDoCarrinho = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const ContainerFooter = styled.div`
    margin-top: 20px;
    display: flex;
`

const ContainerPrecoTotal = styled.div`
    font-weight: 700;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #7C66C5;
`

const EmptyCartMessage = styled.div`
    width: 50vw;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default class SCart extends Component {

    state = {
        // começar o carrinho com a props recebida da lista de serviços?
        sCart: [{
            id: "efed9385-cf87-4f0e-a121-465384b3f2e4",
            title: "Cortar a grama",
            description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
            price: 40,
            paymentMethods: [
                "PayPal",
                "boleto"
            ],
            dueDate: "2021-12-30T00:00:00.000Z",
            taken: false
        },
        {
            id: "efed9385-cf87-4f0e-a121-465384b3f2f4",
            title: "Pintar a grama",
            description: "Pintura de áreas verdes de até 1000 metros quadrados.",
            price: 80,
            paymentMethods: [
                "PayPal",
                "boleto"
            ],
            dueDate: "2021-12-30T00:00:00.000Z",
            taken: false
        },
        {
            id: "efed9385-cf87-4f0e-a121-465384b3f2g4",
            title: "Pular a grama",
            description: "Pular em áreas verdes de até 1000 metros quadrados.",
            price: 20,
            paymentMethods: [
                "PayPal",
                "boleto"
            ],
            dueDate: "2021-12-30T00:00:00.000Z",
            taken: false
        },
        {
            id: "efed9385-cf87-4f0e-a121-465384b3f2h4",
            title: "Comer a grama",
            description: "Comer áreas verdes de até 1000 metros quadrados.",
            price: 100,
            paymentMethods: [
                "PayPal",
                "boleto"
            ],
            dueDate: "2021-12-30T00:00:00.000Z",
            taken: false
        }]
    }

    addToCart = (id) => {

    }

    removeFromCart = (id) => {
        const confirmacao = window.confirm('Deseja realmente remover este item do carrinho?')
        if (confirmacao) {
            const newCart = this.state.sCart.filter(item => {
                if (id !== item.id) {
                    return item
                }
            })
            this.setState({ sCart: newCart })
        }
    }

    clearCart = () => {
        const confirmacao = window.confirm('Deseja realmente limpar o carrinho?')
        confirmacao && this.setState({ sCart: [] })
    }

    emptyCartMessage = () => {
        return (
            <EmptyCartMessage>
                {'Seu carrinho está vazio'}
            </EmptyCartMessage>
        )
    }

    finalizarCompra = () => {
        alert('Compra efetuada com sucesso!')
        this.setState({carrinho: []})
    }

    totalCarrinho = (this.state.sCart.reduce((total, currentItem) => total = total + currentItem.price, 0))

    footerCarrinho = () => {
        return (
            <ContainerFooter>
                <ContainerTituloServico>
                    <Button variant="contained" color='primary' onClick={this.finalizarCompra}>Finalizar Compra</Button>
                </ContainerTituloServico>
                <ContainerPrecoTotal>
                    Valor Total: {this.totalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </ContainerPrecoTotal>
                <ContainerRemoverDoCarrinho>
                    <IconButton aria-label="delete" onClick={this.clearCart}>
                        <DeleteOutlinedIcon color="remove" />
                    </IconButton>
                </ContainerRemoverDoCarrinho>
            </ContainerFooter>
        )
    }

    render() {

        const itensCarrinho = this.state.sCart.map(item => {
            return (
                <ContainerItensCarrinho key={item.id}>
                    <ContainerTituloServico>
                        <Button variant="text" color='primary' onClick={() => this.props.irParaDetalhes(item.id)}>{item.title}</Button>
                    </ContainerTituloServico>
                    <ContainerPrecoServico>
                        {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </ContainerPrecoServico>
                    <ContainerRemoverDoCarrinho>
                        <IconButton aria-label="delete" onClick={() => this.removeFromCart(item.id)}>
                            <DeleteOutlinedIcon color="remove" />
                        </IconButton>
                    </ContainerRemoverDoCarrinho>
                </ContainerItensCarrinho>
            )
        })

        return (
            <div>
                {itensCarrinho.length > 0 ? itensCarrinho : this.emptyCartMessage()}
                {itensCarrinho.length > 0 ? this.footerCarrinho() : ''}
            </div>
        )
    }
}