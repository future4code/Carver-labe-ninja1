import React from "react"
import Styled from 'styled-components'

export const ContainerItensCarrinho = Styled.div`
    background-color: #F5F5F5;
    border-radius: 5px;
    margin: 10px auto;
    width: 50vw;
    display: flex;
    align-items: center;
`

export const ContainerTituloServico = Styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`

export const ContainerPrecoServico = Styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #7C66C5;
`

export const ContainerRemoverDoCarrinho = Styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const ContainerFooter = Styled.div`
    margin-top: 20px;
    display: flex;
`

export const ContainerPrecoTotal = Styled.div`
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #7C66C5;
`

export const EmptyCartMessage = Styled.div`
    width: 50vw;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
