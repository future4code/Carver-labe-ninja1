import React from 'react'
import styled from 'styled-components'
import IconeHome from "../img/labeninjas.png"
import Button from '@mui/material/Button';


const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Img = styled.img`
    width: 550px;
    padding: 15px;
`

const CardButton = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    margin-top: -20px;
` 

export default class Home extends React.Component {
    

    render () {
        return (
            <DivContainer>
                <Img src={IconeHome}/>
                <CardButton>
                    <Button
                        onClick={this.props.irCadastro}
                        variant="contained"
                        disableElevation
                    >
                        Criar Cadastro
                    </Button>
                    <Button
                        onClick={this.props.irListaDeServicos}
                        variant="contained"
                        disableElevation
                    >
                        Lista de Serviços
                    </Button>
                   
                </CardButton>
            </DivContainer>
        )
    }
}