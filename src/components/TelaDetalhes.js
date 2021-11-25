import react from 'react'
import axios from 'axios'
import styled from 'styled-components'
import React from 'react'
import carrinho from '../img/addCart.png'
import { style } from '@material-ui/system'

const CardTitulo = styled.div `
    border: 1px solid red;
    display: flex;
    justify-content: center;

`

const ListaPg = styled.div `
    
`
const Button = styled.div `
    width: 300px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
`
export default class TelaDetalhes extends React.Component {
   
   
   
   
   
    render () {
        return (
            <div>
                <CardTitulo>
                    <h1>
                    Título do Serviço
                    </h1>
                </CardTitulo>

                <ListaPg>
                    <p>Aceita : </p>
                </ListaPg>

                <div>
                    <h2>Até 16/10/2021 por R$ 2000,00</h2>
                </div>

                <div>
                    <h3>Implementador de páginas web</h3>
                </div>

                <Button>
                    <button> <img width = "20px" src = {carrinho}/>ADICIONAR AO CARRINHO</button>
                    <button> VOLTAR PARA LISTA</button>
                </Button>

                
            </div>
        )
    }
    

}