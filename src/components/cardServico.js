import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default class CardServico extends React.Component {
    state = {
        servicoInCart: false
    }
    componentDidMount() {
        this.verificaServiçoNoCarrinho()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itensCarrinho !== prevProps.itensCarrinho) {
            this.verificaServiçoNoCarrinho()
        }
    }

    verificaServiçoNoCarrinho = () => {
        for (const item of this.props.itensCarrinho) {
            if (this.props.servico.id === item.id) {
                this.setState({ servicoInCart: true })
            }
        }
    }

    render() {
        return (
            <Box m={1} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <Card variant="outlined">
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
                            <Button disabled={this.state.servicoInCart} size="small" onClick={() => this.props.addToCart(this.props.servico)}><ShoppingCartIcon /></Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
            </Box>
        )
    }
}