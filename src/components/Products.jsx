import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Product from '../components/Product';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
`
const Item = styled.h1`
margin-left: 20px;
`
  


const Products = ({category,filters,sort}) => {
  const navigate = useNavigate();

  const [products,setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const decoded = jwt_decode(localStorage.getItem('token'));

    const authAxios = axios.create({
      baseURL: `https://shopperback.herokuapp.com/api/v1/`,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
    })
  
    if (decoded.exp < Date.now() / 1000) {
      
      navigate('/login');
    }
    else{
      const getProducts = async() => {
        try{
          const res = await authAxios.get(category ? `/product/category/${category}` 
                                                 : `/product`)  ;
           setProducts(res.data) 
        } 
        catch(e){
   
        }
       }
       getProducts();
    }
  },[category])

useEffect(()=>{
  category && setFilteredProducts(
    products.filter((item)=> 
    Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
      )
    )
  );
},[products,category,filters]);

useEffect(() => {

  if(sort === 'new'){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=> a.createdDate - b.createdDate)
    );
  }
  else if(sort === 'asc'){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=> a.price - b.price)
    );
  }
  else{
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=> b.price - a.price)
    );
  }
},[sort])


  return (
    <Container>
       <Grid container>
        <Grid item xs={8}>
            <Item>PRODUCTS</Item>
        </Grid>
        </Grid>
       {
          category ? filteredProducts.map(item => (
            <Product item= {item} key={item._id}/>
          ))
          : products.map(item => (
            <Product item= {item} key={item._id}/>
          ))
      }
      
    </Container>
  )
}

export default Products
