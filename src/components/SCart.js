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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
        sCart: []
    }

    componentDidMount(){
        this.setState({sCart: this.props.itensCarrinho})
    }

    emptyCartMessage = () => {
        return (
            <EmptyCartMessage>
                {'Seu carrinho está vazio'}
            </EmptyCartMessage>
        )
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.sCart !== prevState.sCart){
            this.totalCarrinho()
        }

        if (this.props.itensCarrinho !== prevProps.itensCarrinho){
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