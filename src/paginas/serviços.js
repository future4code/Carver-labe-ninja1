import React from "react";
import CardServico from "../components/cardServico";
import styled from "styled-components"
import axios from "axios"
import InputBase from '@material-ui/core/InputBase'
import Logo from '../img/logo.png';
import IconCarrinho from '../img/cart.png';


const ListadeServicos = styled.div`
    background-color: #7869BF;
    color: #F5F5F5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    width: 100vw;
    
    span{
        background-color: #7869BF;
        font-size: 21px;
        color: #F5F5F5;
        border: none;       
    }
`

const LogoButton = styled.div`
    height: 75%;
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    &:hover{
        background-color: #7365B8;
        cursor: pointer;
    }
    
    img{
        width: 40px;
        color: #F5F5F5;
    } 
`

const DivInput = styled.div`
    position: relative;
    left: 0;
    right: 0;
    margin-right: 160px;
    border-radius: 8px;
    background-color: rgba(255,255,255, 0.15);
    margin-left: 0;
    padding: 4px;
    display: flex;
    align-items: center;
    width: 400px;
    &:hover {
        background-color: rgba(255,255,255, 0.25);
    }

    input{
        background-color: #8C7FC9;
        border: none;
        font-size: 17px;
        height: 35px;
        width: 400px;
        color: white; 
        
        &:hover{
        background-color: #9A8FCF;
        } 
    }

    input::placeholder{
        color: #C0B9E1;
    }

    img{
        width: 20px;
        height: 20px;
    }
`
const IconeCarrinho = styled.div`
    border-radius: 80px;
    height: 75%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;

    img{
        width: 25px;
    }
    
    &:hover{
        background-color: #7365B8;
        cursor: pointer;

    }
`

/////tudo acima é do header

const ContainerServico = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr ;
    gap: 10px;
    padding-top: 30px;
`

const ContainerInputs = styled.div`
    height: 30px;
    display: flex;
    background-color: #DAD4EF;
    justify-content: center;
    align-items: center;
    select{
        height: 25px;
        margin: 0 5px;
        border: 1px solid #DAD4EF;
        border-radius: 3px;
    }
    input{
        padding: 0 2px;
        align-self: center;
        height: 23px;
        margin: 0 5px;
        border: 1px solid #DAD4EF;
        border-radius: 3px;
    }
`


const baseURL = "https://labeninjas.herokuapp.com"
const autorizacao = {
    headers: {
        Authorization: "9625d647-f235-4369-90c5-7e1f0a933d2d"
    }
}


export default class Servicos extends React.Component {
    state = {
        listaServico: [],
        ordenacao: "preco",
        cresceOUdecre: "1",
        buscaServico: "",
        valorMinimo: "",
        valorMaximo: "",
        itensCarrinho: []
    }

    // itensCarrinho. teve mudança. errado. não teve mudança, já vem com taken = true...  
    // atualizar this.state.listaServico. se id = id, taken = true

    pegarValorBusca = (e) => {
        this.setState({ buscaServico: e.target.value })
    }

    pegarValorMinimo = (e) => {
        this.setState({ valorMinimo: e.target.value })
    }

    pegarValorMaximo = (e) => {
        this.setState({ valorMaximo: e.target.value })
    }

    componentDidMount() {
        this.novosServicos()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.itensCarrinho !== prevState.itensCarrinho) {
            this.state.listaServico.map(item => {
                if (item.id === this.state.itensCarrinho.id) {
                    const novoItemListaServico = { ...item, taken: true }
                    this.setState({ listaServico: novoItemListaServico })
                }
            })
        }
    }

    novosServicos = () => {
        axios.get(baseURL + "/jobs", autorizacao)
            .then((res) => {
                this.setState({ listaServico: res.data.jobs })
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    mudancaOrdenacao = (evento) => {
        this.setState({ ordenacao: evento.target.value })
    }

    mudancaCreceOUdecre = (evento) => {
        this.setState({ cresceOUdecre: evento.target.value })
    }

    filtros = () => {
        return (
            <div>
                <ListadeServicos>
                    <LogoButton onClick={this.props.irHome}>
                        <img alt="logo" src={Logo}></img>
                        <span>LabeNinjas</span>
                    </LogoButton>
                    <DivInput>
                        <InputBase
                            onChange={this.pegarValorBusca}
                            value={this.state.buscaServico}
                            inputProps={{ style: { color: 'white', width: '350px' } }}
                            placeholder="Busca"
                        />
                    </DivInput>
                    <IconeCarrinho onClick={this.props.irCarrinho}>
                        <span>
                            <img alt="Icone Carrinho" src={IconCarrinho} />
                        </span>
                    </IconeCarrinho>
                </ListadeServicos>
                <ContainerInputs>
                    <select value={this.state.ordenacao} onChange={this.mudancaOrdenacao}>
                        <option value="preco">Preço </option>
                        <option value="titulo">Titulo </option>
                        <option value="prazo">Prazo </option>
                    </select>
                    <select value={this.state.cresceOUdecre} onChange={this.mudancaCreceOUdecre}>
                        <option value="1" >Crescente</option>
                        <option value="-1" >Decrescente</option>
                    </select>
                    <input value={this.state.valorMinimo} onChange={this.pegarValorMinimo} placeholder={"Valor Minimo"} />
                    <input value={this.state.valorMaximo} onChange={this.pegarValorMaximo} placeholder={"Valor Maximo"} />
                </ContainerInputs>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.filtros()}
                <ContainerServico>
                    {this.state.listaServico.filter((servico) => {
                        return servico.title.toLowerCase().includes(this.state.buscaServico.toLocaleLowerCase())
                    })
                        .filter((servico) => {
                            return this.state.valorMinimo === "" || servico.price >= this.state.valorMinimo
                        })
                        .filter((servico) => {
                            return this.state.valorMaximo === "" || servico.price <= this.state.valorMaximo
                        })
                        .sort((a, b) => {
                            switch (this.state.ordenacao) {
                                case "titulo":
                                    return (a.title.localeCompare(b.title)) * Number(this.state.cresceOUdecre)
                                case "prazo":
                                    return (new Date(a.dueDate) - new Date(b.dueDate)) * Number(this.state.cresceOUdecre)
                                default:
                                    return (a.price - b.price) * Number(this.state.cresceOUdecre)
                            }
                        })
                        .map((servico) => {
                            return <CardServico itensCarrinho={this.props.itensCarrinho}  key={servico.id} servico={servico} irParaDetalhes={this.props.irParaDetalhes} addToCart={this.props.addToCart} />
                        }
                        )}
                </ContainerServico>
            </div>
        )
    }
}


