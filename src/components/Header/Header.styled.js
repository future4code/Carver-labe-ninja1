import React from "react"
import Styled from "styled-components"

export const HeaderHomeECadastro = Styled.div`
    background-color: #7869BF;
    color: #F5F5F5;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
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
export const ListadeServicos = Styled.div`
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
export const Carrinho = Styled.div`
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
export const Detalhes = Styled.div`
    background-color: #7869BF;
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

export const LogoButton = Styled.div`
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

export const DivInput = Styled.div`
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
        cursor: pointer;
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

export const IconeCarrinho = Styled.div`
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
