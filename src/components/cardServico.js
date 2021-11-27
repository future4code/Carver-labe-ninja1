import React from "react";
import styled from "styled-components"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CurrencyExchange } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ContainerCardServico = styled.div`
    background-color: rgb(223,219,240);
    display: inline-grid;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    box-shadow: 3px 3px 3px gray;
    border-radius: 10px;
`

const ContainerDetalhe = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

export default class CardServico extends React.Component {

    card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Ativo até: {this.props.servico.dueDate.replace('T00:00:00.000Z', "")}
                </Typography>
                <Typography variant="h5" component="div">
                    {this.props.servico.title}
                </Typography>
                <Typography variant="body2">
                    {this.props.servico.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: "space-between" }}>
                <Button size="small" onClick={() => this.props.irParaDetalhes(this.props.servico.id)}>Detalhe</Button>
                <Button size="small" onClick={() => this.props.addToCart(this.props.servico)}><ShoppingCartIcon/></Button>
            </CardActions>
        </React.Fragment>
    );

    render() {
        return (
            <Box m={1} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <Card variant="outlined">{this.card}</Card>
            </Box>
            // <ContainerCardServico key={this.props.servico.id}>

            //     <h1>{this.props.servico.title}</h1>
            //     <h2>Ate {this.props.servico.dueDate.replace('T00:00:00.000Z', "")} Por R$ {this.props.servico.price}</h2>

            //     <ContainerDetalhe>
            //         <Button onClick={() => this.props.irParaDetalhes(this.props.servico.id)}>Detalhes</Button>
            //         <Button /* disabled={this.props.servico.taken} */ onClick={() => this.props.addToCart(this.props.servico)}>Add</Button>
            //     </ContainerDetalhe>

            // </ContainerCardServico>
        )
    }
}