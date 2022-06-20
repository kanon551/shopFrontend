import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from '@mui/material/Grid';

const Container = styled.div`
display: flex;
background-color: bisque;
padding: 20px;
`
const Left = styled.div`
flex: 1;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
overflow: auto;
`
const Logo = styled.div`
`
const Desc = styled.div`
margin-top: 20px;
`
const SocialContainer = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-between;
cursor: pointer;
`

const InstaLayer = styled.div`
background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
color: white;
border-radius: 5px;
justify-content: center;
align-items: center;
align-content: center;
display: flex;
`

const YoutubeLayer= styled.div`
color: red;
`

const Title = styled.h3`
margin-bottom: 20px;
font-weight: 300;
`

const Item = styled.div`
  background: white;
  font-size: medium;
  font-weight: 300;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  display: flex;
  width: auto;
  justify-content: center;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 50%);
  transition: all 0.5s ease;
  &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
        cursor: pointer;
    }
`

const Address = styled.div`
  font-weight: 200;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shop!</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Impedit porro consequuntur itaque eius distinctio? Perferendis vero fuga vitae. Natus labore similique possimus, beatae eum soluta atque officiis nulla laudantium praesentium.
        </Desc>
        <SocialContainer>
          <FacebookIcon color="primary"/>
          <InstaLayer>
          <InstagramIcon/>
          </InstaLayer>
          <TwitterIcon color="primary"/>
          <PinterestIcon color='error'/>
          <YoutubeLayer>
          <YouTubeIcon/>
          </YoutubeLayer>
          
        </SocialContainer>
      </Left>
      <Center>
        <Title>Quick Navigate</Title>
          <Grid container spacing={2}>
            <Grid item   xs={12} sm={6} md ={4} lg={3} xl={3} >
            <Item>Home</Item>
            </Grid>
            <Grid item  xs={12} sm={6} md ={4} lg={3} xl={3}>
            <Item>cart</Item>
            </Grid>
            <Grid item  xs={12} sm={6} md ={4} lg={3} xl={3}>
            <Item>Men Fashion</Item>
            </Grid>
            <Grid item  xs={12} sm={6} md ={4} lg={3} xl={3}>
            <Item>Women Fashion</Item>
            </Grid>
            <Grid item  xs={12} sm={6} md ={4} lg={3} xl={3}>
            <Item>Accessories</Item>
            </Grid>
            <Grid item  xs={12} sm={6} md ={4} lg={3} xl={3}>
            <Item>My Account</Item>
            </Grid>
            <Grid item  xs={12} sm={6} md ={4} lg={3} xl={3}>
            <Item>Order Tracking</Item>
            </Grid>
            <Grid item  xs={12} sm={6} md ={4} lg={3} xl={3}>
            <Item>Wishlist</Item>
            </Grid>
            <Grid item  xs={12} sm={6} md ={4} lg={3} xl={3}>
            <Item>Terms and conditions</Item>
            </Grid>
          </Grid>
      </Center>
      <Right>
        <Title>Registered Office Address</Title>
        <Address>Buildings Alyssa,</Address>
        <Address>Begonia and Clover situated in Embassy Tech Village,</Address>
        <Address>Outer Ring Road,</Address>
        <Address>Devarabeesanahalli Village,</Address>
        <Address>Varthur Hobli,</Address>
        <Address>Bengaluru – 560103,</Address>
        <Address>India</Address>
      </Right>
    </Container>
  )
}

export default Footer
