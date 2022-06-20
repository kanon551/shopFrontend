import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
flex-direction: column;
flex: 1;
width: 100vw;
height: 100vh;
position: relative;
`

const Button = styled.button`
    margin: 20px;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    width: 100px;
    height: 50px;
    border: none;
    
    border-radius: 10px;
    background: #f5f9f9;
    box-shadow:  5px 5px 10px #676969,
                -5px -5px 10px #ffffff;
             &:hover {
                border-radius: 10px;
                background: #f5f9f9;
                box-shadow: inset 5px 5px 10px #676969,
                            inset -5px -5px 10px #ffffff;

             
    }

`
const Pay = () => {
  return (
    <Container>
        <Link to={"/sucess"} style={{marginLeft: "auto",marginRight: "auto", marginTop: "auto",marginBottom: "auto"}}>
                <Button>Pay</Button>
        
        </Link>
       
    </Container>
  )
}

export default Pay
