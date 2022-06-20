import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import {sliderItems} from '../data';


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
overflow: hidden;
position: relative;

`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    position: absolute;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    bottom: 0;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translate(${props => props.slide * -100}vw);
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
margin-top: 100px;
background-color: #${props => props.bg};
  
`

const ImgContainer = styled.div`
height: 100%;
flex: 1;
/* margin-top: inherit; */

`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
  
`

const Image = styled.img`
  height: 100%;
`
const Title = styled.h1`
  font-size: 70px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
padding:10px;
font-size: 20px;
background-color: transparent;
  cursor: pointer;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3)
    }

    if(direction === "right"){
      setSlideIndex(slideIndex < 3 ? slideIndex+1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosIcon/>
      </Arrow>
      <Wrapper slide= {slideIndex}>
        {
          sliderItems.map( item => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
          ))
        }
       
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider
