import React, { Component } from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {
    EmptyCartMessage,
    ContainerPrecoTotal,
    ContainerFooter,
    ContainerRemoverDoCarrinho,
    ContainerPrecoServico,
    ContainerTituloServico,
    ContainerItensCarrinho
} from './SCart.styled'


export default class SCart extends Component {

    state = {
        sCart: []
    }

    componentDidMount() {
        this.setState({ sCart: this.props.itensCarrinho })
    }

    emptyCartMessage = () => {
        return (
            <EmptyCartMessage>
                {'Seu carrinho está vazio'}
            </EmptyCartMessage>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.sCart !== prevState.sCart) {
            this.totalCarrinho()
        }

        if (this.props.itensCarrinho !== prevProps.itensCarrinho) {
            this.componentDidMount()
        }
    }

    totalCarrinho = () => {
        return this.state.sCart.length > 0 && this.state.sCart.reduce((total, currentItem) => total = total + currentItem.price, 0)
    }

    footerCarrinho = () => {
        return (
            <ContainerFooter>
                <ContainerTituloServico>
                    <Button variant="contained" color='primary' onClick={this.props.finalizarCompra}>Finalizar Compra</Button>
                </ContainerTituloServico>
                <ContainerPrecoTotal>
                    Valor Total: {this.totalCarrinho().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </ContainerPrecoTotal>
                <ContainerRemoverDoCarrinho>
                    <IconButton aria-label="delete" onClick={this.props.clearCart}>
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
                        <IconButton aria-label="delete" onClick={() => this.props.removeFromCart(item.id)}>
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