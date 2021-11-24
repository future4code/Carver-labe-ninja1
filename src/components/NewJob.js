import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Header from './Header'

const CadastroContainer = styled.div`
display: flex;
flex-direction: column;

`


export default class CadastroPage extends React.Component {
  render() {
    return (<div>

<Header/>
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
          placeholder="Descrição"
          variant="outlined"
          margin="dense"
        />

        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          placeholder="Descrição"

        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </CadastroContainer>
    </div>
    )
  }
}

