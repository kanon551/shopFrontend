import React from 'react'
import MyntraDeals from './MyntraDeals'
import {myntraDeals} from '../data';
import styled from 'styled-components'
import Grid from '@mui/material/Grid';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`
const Item = styled.h1`
    
`

const Myntra = () => {
  return (
    <Container>
        <Grid container spacing={2}>
         <Grid item xs={6} md={8}>
           <Item>BIGGEST DEALS ON TOP BRANDS</Item>
         </Grid>
       </Grid>
      {
         
          myntraDeals.map(item => (
            <MyntraDeals item= {item} key={item.id}/>
          ))
      }
    </Container>
  )
}

export default Myntra
