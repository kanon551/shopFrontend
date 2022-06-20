import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Announcement from './Announcement';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: auto;
    position: fixed;
    z-index: 4;
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
   flex-wrap: wrap;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
`;

const Input = styled.input`
flex: 1;
    border: none;
    background: #eaeaec;
    
    &:focus-visible{
        outline: none;
    }

    &:focus{
        background: white;
    }

    
    
`

const SearchContatiner = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 5px;
    /* width: 500px; */
    width: auto;
    margin-right: 30px;
    background: #eaeaec;
    cursor: pointer;
    
    &:focus-within {
        background: white;
    }
    
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
    flex: 1;
    
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
`;

const Logo = styled.h1`
    font-weight: bold;
    font-family: cursive;
    text-align: center;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    justify-content: space-evenly;
    margin-right: 30px;
`
const Image = styled.img`
width: 15%;
height: 15%;
object-fit: cover;
border-radius: 20px;
`

const Navbar = () => {
    const quantity = useSelector(state =>state.cart.quantity)
  return (
    <Container>
        <Announcement/>
        <Wrapper>
            <Left>
            <Image src={"https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg"}></Image>
           
            
            </Left>
            <Center><Logo>SHOP !</Logo></Center>

            <Right>
            <SearchContatiner>
                <Input color="action" placeholder='Search for products, brands and more...'></Input>
                <SearchIcon color="action"/>
            </SearchContatiner>
                <MenuItem><HowToRegIcon color="action" /></MenuItem>
                <MenuItem><LoginIcon color="action"/></MenuItem>
                <Link to={'/cart'}>
                    <MenuItem> 
                        <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Link>
                
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
