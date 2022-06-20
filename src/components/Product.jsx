import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const InfoContainer = styled.div`
opacity: 0;
    position: absolute;
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 z-index: 3;
`

const Container = styled.div`
     flex: 1;
    margin: 3px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #f5fbfd; */
    position: relative;

    &:hover ${InfoContainer} {
        opacity: 1;
    }
`
const Image = styled.img`
     width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    /* z-index: 2; */
`


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;    
    justify-content: center;
    display: flex;
    background-color: white;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
        cursor: pointer;
    }

`

const Product = ({item}) => {
  const navigate = useNavigate();
  const direct =(path)=>{
    navigate(`/product/${path}`);
  }
  
  return (
    <Container>
      <Image src={`data:image/jpeg;base64,${item.img.data}`}></Image>
      <InfoContainer>
        <Icon>
          <ShoppingCartOutlinedIcon/>
        </Icon>
        <Link onClick={()=> direct(item._id)}>
            <Icon>
                  <SearchOutlinedIcon/>
            </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlinedIcon/>
        </Icon>
      </InfoContainer>
         
    </Container>
  )
}

export default Product
