import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const CadastroContainer = styled.div`
display: flex;
flex-direction: column;

`


export default class CadastroPage extends React.Component {
  render() {
    return (
      <CadastroContainer>
        <h1>Cadastre o seu serviço</h1>
        <TextField
          id="outlined-basic"
          label="Titulo"
          variant="outlined"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Descrição"
          variant="outlined"
          margin="dense"
        />
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={"ss"}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </CadastroContainer>
    )
  }
}

