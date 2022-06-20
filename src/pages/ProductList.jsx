import React from 'react'
import styled from "styled-components";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const Title = styled.h1`
margin: 20px;
    display: flex;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
    
`
const Filter = styled.div`
margin: 20px;
display: flex;
flex-direction: column;
height: auto;
width: auto;
`

const Page = styled.div`
margin-top: 100px;
`

const FilterText = styled.span`
flex: 1;
font-size: 20px;
font-weight: 600;
`
const FormDirection = styled.div`
  flex: 1;
`
const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2]

  // const [color, setColor] = React.useState('');
  // const [size, setSize] = React.useState('');
  const[filters, setFilters] = React.useState({color:'',size:''});
  const [sortStyle, setSortStyle] = React.useState('new');

  const handleChange = (event)=> {
    const value = event.target.value
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  };
  // const handleChange = (event) => {
  //   setColor(event.target.value);
  // };

  // const sizeChange = (event) => {
  //   setSize(event.target.value);
  // }

  const sortChange = (event) => {
    setSortStyle(event.target.value);
  }

  const Colors = [
    { label: 'White'},
    { label: 'Black'},
    { label: 'Red',},
    { label: 'Blue'},
    { label: 'Yellow'},
    { label: 'Green'},
  ];

  const Sizes = [
    { size: "XS"},
    { size: "S"},
    { size: "M"},
    { size: "L"},
    { size: "XL"},
  ]

  return (
      
    <Container>
      <Navbar/>
      <Page>
      <Title>{category}</Title>
      <FilterContainer>
          <Filter>
            <FilterText>Filter Products :</FilterText>
            <FormDirection>
            <FormControl  style={{width: "100px"}}>
            <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={filters.color}
              label="Color"
              name='color'
              onChange={handleChange}
            >
              <MenuItem value="" selected>
                <em>None</em>
              </MenuItem>
              {
                Colors.map((item) => (
                    <MenuItem value={item.label} key={item.label}>{item.label}</MenuItem>
                ))
              }
            </Select>
            </FormControl >
            <FormControl style={{width: "100px"}}>
            <InputLabel id="demo-simple-label">Size</InputLabel>
            <Select
              labelId="demo-simple-label"
              id="demo-simple"
              value={filters.size}
              label="Size"
              name='size'
              onChange={handleChange}
              
            >
              <MenuItem value="" selected>
                <em>None</em>
              </MenuItem>
              {
                Sizes.map((item) => (
                    <MenuItem value={item.size} key={item.size}>{item.size}</MenuItem>
                ))
              }
            </Select>

            </FormControl>
            </FormDirection>
            

            
          </Filter>
          <Filter>
            <FilterText>Sort Products :</FilterText>
            <FormControl style={{width: "150px"}}>
            <InputLabel id="demo-label">Sort</InputLabel>
            <Select
              labelId="demo-label"
              id="demo"
              value={sortStyle}
              label="Sort"
              onChange={sortChange}
              
            >
              <MenuItem value="new" selected>
                <em>Newest</em>
              </MenuItem>
              <MenuItem value='asc'>Price (asc)</MenuItem>
              <MenuItem value='desc'>Price (desc)</MenuItem>
              
            </Select>

            </FormControl>
            </Filter>
      </FilterContainer>
      </Page>
      <Products category={category} filters={filters} sort={sortStyle} />
      <NewsLetter/>
      <Footer/>
      
    </Container>
  )
}

export default ProductList
