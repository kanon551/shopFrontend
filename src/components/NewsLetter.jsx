import React from 'react'
import styled from 'styled-components'
import SendRoundedIcon from '@mui/icons-material/SendRounded';


const Container = styled.div`
height: 60vh;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
background-color: aliceblue;
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`
const InputContainer = styled.div`
  /* width: 50%; */
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`

const Input = styled.input`
/* width: 500px; */
width: auto;
`
const Button = styled.button`
 border: none;
 background-color: teal;
 color: white;
 cursor: pointer;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Description>Get Daily Updates Here</Description>
      <InputContainer>
      <Input placeholder='Your Email' />
        <Button>
          <SendRoundedIcon/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
