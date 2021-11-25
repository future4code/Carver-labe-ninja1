
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Axios from 'axios';
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './components/Theme';


const DivAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
export default class App extends React.Component {
  
  





  render () {
    return (
      <ThemeProvider theme={theme}>
        <DivAppContainer>
			    <Header />
		    </DivAppContainer>
      </ThemeProvider>
    )
  }
}

