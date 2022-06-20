import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    flex: 1;
    min-width: 250px;
    height: 400px;
    margin: 17px;

    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`

const MyntraDeals = ({item}) => {
  return (
    <Container>
      <Image src={item.img}></Image>
    </Container>
  )
}

export default MyntraDeals
