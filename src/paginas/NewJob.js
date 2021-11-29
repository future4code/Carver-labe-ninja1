import React from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import axios from 'axios';

const CadastroContainer = styled.div`
button{
  margin-top: 10%;
}
display: flex;
flex-direction: column;

h1{
  color: #968BCE;
}
`
const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const autorizacao = {
  headers: {
    Authorization: "9625d647-f235-4369-90c5-7e1f0a933d2d"
  }
}

export default class CadastroPage extends React.Component {
  state = {
    title: "",
    description: "",
    price: 0,
    paymentMethods: [],
    dueDate: "",
    payPal: false,
    boleto: false,
    pix: false,
    cartaoDeDebito: false,
    cartaoDeCredtio: false
  }

  handleTitle = (ev) => {
    this.setState({ title: ev.target.value })
  }

  handleDescription = (ev) => {
    this.setState({ description: ev.target.value })
  }

  handlePrice = (ev) => {
    this.setState({ price: ev.target.value })
  }

  handleDate = (ev) => {
    this.setState({ dueDate: ev.target.value })
  }

  handlePaymentPayPal = (ev) => {
    this.setState({ payPal: ev.target.checked })
  }

  handlePaymentBoleto = (ev) => {
    this.setState({ boleto: ev.target.checked })
  }

  handlePaymentPix = (ev) => {
    this.setState({ pix: ev.target.checked })
  }

  handlePaymentCartaoDeDebito = (ev) => {
    this.setState({ cartaoDeDebito: ev.target.checked })
  }

  handlePaymentCartaoDeCredito = (ev) => {
    this.setState({ cartaoDeCredtio: ev.target.checked })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.payPal !== prevState.payPal) {
      if(this.state.payPal){
        const newPayment = this.state.paymentMethods
        newPayment.push("PayPal")
        this.setState({ paymentMethods: newPayment })
      }else{
        const newPayment = this.state.paymentMethods
        newPayment.filter((method, index) =>{
          if(method === "PayPal"){
            newPayment.splice(index, 1)
          }
        })
      }
    } 

    if (this.state.pix !== prevState.pix) {
      if(this.state.pix){
        const newPayment = this.state.paymentMethods
        newPayment.push("Pix")
        this.setState({ paymentMethods: newPayment })
      }else{
        const newPayment = this.state.paymentMethods
        newPayment.filter((method, index) =>{
          if(method === "Pix"){
            newPayment.splice(index, 1)
          }
        })
      }
    } 

    if (this.state.boleto !== prevState.boleto) {
      if(this.state.boleto){
        const newPayment = this.state.paymentMethods
        newPayment.push("Boleto")
        this.setState({ paymentMethods: newPayment })
      }else{
        const newPayment = this.state.paymentMethods
        newPayment.filter((method, index) =>{
          if(method === "Boleto"){
            newPayment.splice(index, 1)
          }
        })
      }
    } 

    if (this.state.cartaoDeDebito !== prevState.cartaoDeDebito) {
      if(this.state.cartaoDeDebito){
        const newPayment = this.state.paymentMethods
        newPayment.push("Cartão de Débito")
        this.setState({ paymentMethods: newPayment })
      }else{
        const newPayment = this.state.paymentMethods
        newPayment.filter((method, index) =>{
          if(method === "Cartão de Débito"){
            newPayment.splice(index, 1)
          }
        })
      }
    } 

    if (this.state.cartaoDeCredtio !== prevState.cartaoDeCredtio) {
      if(this.state.cartaoDeCredtio){
        const newPayment = this.state.paymentMethods
        newPayment.push("Cartão de Crédito")
        this.setState({ paymentMethods: newPayment })
      }else{
        const newPayment = this.state.paymentMethods
        newPayment.filter((method, index) =>{
          if(method === "Cartão de Crédito"){
            newPayment.splice(index, 1)
          }
        })
      }
    } 
  }

    postJob = () => {
      const body ={
        title:this.state.title,
        description:this.state.description,
        price:Number(this.state.price),
        paymentMethods:this.state.paymentMethods,
        dueDate:this.state.dueDate
      }
      axios.
      post(
        "https://labeninjas.herokuapp.com/jobs",
        body,
        autorizacao,
      )
      .then((res) =>{
        console.log(res.data)
        alert("Serviço criado com sucesso")
        this.setState({
          title:"",
          description:"",
          price:0,
          paymentMethods:[],
          dueDate:"",
          payPal: false,
          boleto: false,
          pix: false,
          cartaoDeDebito: false,
          cartaoDeCredtio: false
        })
      })
      .catch((err) =>{
        console.log(err.response.data.message)
        alert("Falha ao criar serviço")
      })
    }

  render() {
    return (
      <Body>
        <CadastroContainer>
          <h1>Cadastre o seu serviço</h1>
          <TextField
            value={this.state.title}
            onChange={this.handleTitle}
            id="outlined-basic"
            label="Titulo"
            variant="outlined"
            margin="dense"
          />
          <TextField
            value={this.state.description}
            onChange={this.handleDescription}
            id="outlined-basic"
            variant="outlined"
            margin="dense"
            label="Descrição"
          />
          <FormControl margin="dense">
            <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
            <OutlinedInput
              type="number"
              value={this.state.price}
              onChange={this.handlePrice}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">R$</InputAdornment>}
              label="Valor"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox checked={this.state.cartaoDeCredtio} onChange={this.handlePaymentCartaoDeCredito} />}
            label="Cartão de Crédito"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.cartaoDeDebito} onChange={this.handlePaymentCartaoDeDebito} />}
            label="Cartão de Débito"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.pix} onChange={this.handlePaymentPix} />}
            label="Pix" />
          <FormControlLabel
            control={<Checkbox checked={this.state.boleto} onChange={this.handlePaymentBoleto} />}
            label="Boleto" />
          <FormControlLabel
            control={<Checkbox checked={this.state.payPal} onChange={this.handlePaymentPayPal} />}
            label="PayPal" />
          <input
            type="date"
            value={this.state.dueDate}
            onChange={this.handleDate}
          />
          <Button
            variant="contained"
            onClick={this.postJob}
            disableElevation>
            Cadastrar
          </Button>
        </CadastroContainer>
      </Body>
    )
  }
}

