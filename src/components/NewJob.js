import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Header from './Header'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const CadastroContainer = styled.div`
button{
  margin-top: 10%;
}
display: flex;
flex-direction: column;

`
const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


export default class CadastroPage extends React.Component {
  state = {
    job: {
      title: "Cortar a grama",
      description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
      price: 40,
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-30"
    }
  }
  render() {

    return (
      <Body>
        <Header />

        <CadastroContainer>
          <h1>Cadastre o seu serviço</h1>
          <TextField
            value={this.state.job.title}
            id="outlined-basic"
            label="Titulo"
            variant="outlined"
            margin="dense"
          />
          <TextField
          value={this.state.job.description}
            id="outlined-basic"
            variant="outlined"
            margin="dense"
            label="Descrição"
          />
          <FormControl margin="dense">
            <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
            <OutlinedInput
            value={this.state.job.price}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">R$</InputAdornment>}
              label="Valor"
            />
          </FormControl>
          <FormControlLabel control={<Checkbox />} label="Cartão de Crédito" />
          <FormControlLabel control={<Checkbox />} label="Cartão de Débito" />
          <FormControlLabel control={<Checkbox />} label="Pix" />
          <FormControlLabel control={<Checkbox />} label="Boleto" />
          <FormControlLabel control={<Checkbox />} label="PayPal" />

          <input type="date" value={this.state.job.dueDate}/>

          <Button

            variant="contained"
            disableElevation>
            Cadastrar
          </Button>
        </CadastroContainer>
      </Body>
    )
  }
}

