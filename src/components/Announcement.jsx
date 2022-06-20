import React from 'react'
import styled, {keyframes} from "styled-components";


const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


const Container = styled.div`
    background-color: teal;
    color: white;
    height: auto;
    justify-content: center;
    text-align: center;
    font-size: large;
    font-weight: 500;
    animation:  ${pulse} 750ms infinite alternate;
    flex-wrap: wrap;
`


const Announcement = () => {
  return (
    <Container>
      Super Deal ! Free Shipping on Orders above ₹1000
    </Container>
  )
}

export default Announcement
