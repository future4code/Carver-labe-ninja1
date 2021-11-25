import react from 'react'
import axios from 'axios'
import styled from 'styled-components'
import React from 'react'
import IconeHome from "../img/labeninjas.png"


const CardButton = styled.div`
    border : 1px solid black ;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
` 

export default class Home extends React.Component {
    

    render () {
        return (
            <div>
                <img src={IconeHome}/>
                <CardButton>
                    <button onClick={this.props.irCadastro}>Criar Cadastro</button>
                    <button onClick={this.props.irListaDeServicos}>Lista de Serviços</button>
                   
                </CardButton>
            </div>
        )
    }
}