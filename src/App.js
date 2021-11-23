import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import Header from './components/Header'

const DivAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

function App() {
	return (
        <DivAppContainer>
			<Header />
		</DivAppContainer>
	)
}

export default App
