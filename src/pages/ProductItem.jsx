import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import styled from "styled-components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Input from '@mui/material/Input';
import { useLocation } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
display: flex;
flex-direction: column;
`;
const Page = styled.div`
margin-top: 90px;
display: flex;
padding: 50px;
flex-wrap: wrap;
`

const ImageContainer = styled.div`
    flex: 1;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: contain;
`

const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
`
const Price = styled.span`
   font-size: 40px;
   font-weight: 100;
`
const FilterContainer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`

const FilterColor = styled.div`
    display: flex;
    flex-direction: column;
`
const Quantity = styled.div`
    display: flex;
    flex-direction: column;
`
const Scale = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Button = styled.button`
cursor: pointer;
    flex: 1;
    background: white;
    color: grey;
    border-block-color: teal;
    border-radius: 10px;
    border-width: medium;

    &:hover {
        background-color: lightblue;
        color: white;
    }
`

const ColorTitle = styled.h3`
    font-size: 20px;
    font-weight: 300;
`

const ShowColor = styled.div`
    display: flex;
`

const DisplayColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props =>props.color};
    margin: 0px 5px;
    cursor: pointer;
    border: double;

    &:hover{
        transform: scale(1.2);
        cursor: pointer;
    }
`

const Icons = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
`
const ProductItem = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [size, setSize] = React.useState('');
    const [color, setColor] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);

    const[sizeWotEmpty, setSizeWotEmpty] = React.useState([]);
    const[colorWoutEmpty, setColorWotEmpty] = React.useState([]);

    const [product,setProduct] = useState([]);
    const location = useLocation();
    const id = location.pathname.split("/")[2]

    const [open, setOpen] = React.useState(false);
    const[message,setMessage] = React.useState('');
    const vertical = "bottom";
    const horizontal = "left";
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
   
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
              const res = await authAxios.get(`/product/${id}`)  ;
              setProduct(res.data) 
                setSizeWotEmpty(res.data['product'].size.filter(item=> item !== ""));
                setColorWotEmpty(res.data['product'].color.filter(item=> item !== ""));
           
            } 
            catch(e){
       
            }
           
           }
         
             getProducts();
        }
        
      },[id, navigate])
      
    const sizeChange = (event) => {
        setSize(event.target.value);
      }

      const assignColor = (item) => {
          setColor(item)
      }
      const removeItem = () => {
        if(quantity === 1){
            setQuantity(1);
        }
        else if(quantity > 1){
            setQuantity(quantity-1);
        }
      }

      const addItem = () => {
          setQuantity( parseInt(quantity) + 1);
      }

      const outOfColor = (item) => {
        if(item === "Burgundy"){
            return "#800020"
        }
        else if(item === "Mustard Yellow"){
            return "#e1ad01";
        }
        else if(item === "Navy Blue"){
            return "#000080"
        }
        else if(item === "Brown & Beige"){
            return "#b95d56";
        }
        else if(item === "Grey & Black"){
            return "#4d4d4d";
        }
        else if(item === "Pink & Burgundy"){
            return "#c66a7e";
        }
        else if(item === "Teal Blue & Golden"){
            return "#4a7f7a";
        }
        else if(item === "Mauve & Gold"){
            return "#e9bcb2";
        }
        else if(item === "Green & Blue"){
            return "#005359"
        }
        else if(item === "Rust & Black"){
            return "#521d06";
        }
        else if(item === "Pink & Peach"){
            return "#ffd2c0";
        }
        else if(item === "Green & Pink"){
            return "#ccb3a2";
        }
        else if(item === "Peach & Red"){
            return "#ff7e63";
        }
        else if(item ===  "Green & Red"){
            return "#664d00";
        }
        else if(item === "Green & Orange"){
            return "#a69800";
        }
        else if(item === "Mustard"){
            return "#FFDB58";
        }
        else if(item === "Sea Green"){
            return "#2e8b57";
        }
        else if(item === "Grey Melange"){
            return "#808080";
        }
        else if(item === "Charcoal"){
            return "#36454F"
        }
        else if(item === "Green & White"){
            return "#73b973";
        }
        else if(item === "Rust Brown & White"){
            return "#c58a6e";
        }
        else if(item === "White & Red"){
            return "#fff2f2";
        }
        else if(item === "Yellow & White"){
            return  "#ffffb2";
        }
        else{
            return item;
        }
      }

      const goToCart = () => {
        
          if(size === ""){
            setMessage("Choose a size")
            setOpen(true);
          }
          else if(color === ""){
            setMessage("Choose a color")
            setOpen(true);
          }
          else{
            dispatch(addProduct({...product['product'], quantity,color, size}))
          }
 
       
      }



  return (
    <Container>
        
      <Navbar/>
      {
               product.length !== 0 ? <Page>
                    <ImageContainer>
                        <Image  src={`data:image/jpeg;base64,${product['product'].img.data}`}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{product['product'].title}</Title>
                        <Desc>{product['product'].desc}</Desc>
                        <Price>{product['product'].price}</Price>
            
                        <FilterContainer>
                            <FilterColor>
                                <ColorTitle>Colors</ColorTitle>
                                <ShowColor>{
                                        colorWoutEmpty.map((item)=> (
                                            <DisplayColor color={outOfColor(item)}  title={item} key={item} onClick={()=>  assignColor(item)}/>
                                        ))
                                    }
                                </ShowColor>
                                <TextField 
                                label="Selected Color"
                                variant="filled"
                                value={color}
                                 focused />
                            </FilterColor>
                            <FormControl style={{width: "100px"}}>
                        <InputLabel id="demo-simple-label">Size</InputLabel>
                        <Select
                          labelId="demo-simple-label"
                          id="demo-simple"
                          value={size}
                          label="Size"
                          onChange={sizeChange}
                          
                        >
                          <MenuItem value="" selected>
                            <em>None</em>
                          </MenuItem>
                          {
                            sizeWotEmpty.map((item) => (
                                <MenuItem value={item} key={item}>{item}</MenuItem>
                            ))
                          }
                        </Select>
            
                        </FormControl>
            
            
                            <Quantity>
                                <Scale>
                                    <Icons onClick={removeItem}>
                                    <RemoveIcon style={{cursor:"pointer"}}/>
                                    </Icons>
                                    <Icons>
                                    <Input value={quantity} style={{width:"50px",border: "1px solid lightgray",borderRadius: "5px",}} 
                                    onChange={(event)=>  setQuantity( ( event.target.value === "0") ? 1 : event.target.value)}/>
                                    </Icons>
                                    <Icons onClick={addItem}>
                                    <AddIcon style={{cursor:"pointer"}}/>
                                    </Icons>
                                   
                                </Scale>
                                <Button title={"Add to cart"} onClick={goToCart}>
                                    <AddShoppingCartIcon sx={{ fontSize: 35 }}/>
                                </Button>
                            </Quantity>
                            <Snackbar
                                anchorOrigin={{ vertical, horizontal }}
                                    open={open}
                                    autoHideDuration={6000}
                                    onClose={handleClose}
                                    message={message}
                                    key={vertical + horizontal}
                                />
                        </FilterContainer>
                    </InfoContainer>
                    
                  </Page>
                  : []
      }
      
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductItem
