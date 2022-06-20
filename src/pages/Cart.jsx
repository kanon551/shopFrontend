import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Container = styled.div`
    display: flex;
flex-direction: column;

`
const Page = styled.div`
margin-top: 90px;
padding: 10px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const TopButton = styled.button`
    margin: 20px;
    font-weight: 600;
    cursor: pointer;
    height: 50px;
    border: none;
    
    border-radius: 10px;
    background: #f5f9f9;
    box-shadow:  5px 5px 10px #676969,
                -5px -5px 10px #ffffff;
             &:hover {
                border-radius: 10px;
                background: #f5f9f9;
                box-shadow: inset 5px 5px 10px #676969,
                            inset -5px -5px 10px #ffffff;

             
    }

`

const TopTexts = styled.div`
display: flex;
align-items: center;
`
const TopText = styled.span`
    margin: 10px;
`
const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
padding: 20px;
border: 0.5px solid lightgray;
    flex: 1;
    border-radius: 10px;
    height: 45vh;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const ProductDetail = styled.div`
flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const ProductName = styled.span`
    
`
const ProductCode = styled.span`
    
`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
// const Hr = styled.hr`
//     background-color: teal;
//     border: none;
//     height: 1px;
// `

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`

const Button = styled.button`
width: 100%;
padding: 10px;
/* background-color: teal; */
border: none;
border-radius: 10px;
font-weight: 600;
cursor: pointer;
background: #ffffff;
box-shadow:  5px 5px 10px #666666,
             -5px -5px 10px #ffffff;

             &:hover{
                background: #ffffff;
                box-shadow: inset 5px 5px 10px #666666,
                            inset -5px -5px 10px #ffffff;
             }
`


const Cart = () => {
    const cart = useSelector(state =>state.cart)
    const navigate = useNavigate();
    const publishable_key =  "pk_test_51L5jWUSF3kjGYdaFWI6gobSPR9K81kKSL5QersFNAdY0rZa1Qry33THKsf0yp6o33MhCw6fCNQInW0Np4GZwqN5U00aN6H8Kf0"

    const [stripeToken,setStripeToken] = useState(null);

    const onToken = (token) => {
      
        setStripeToken(token)
      }

      console.log(stripeToken)
      useEffect(()=>{
        const decoded = jwt_decode(localStorage.getItem('token'));
        const authAxios = axios.create({
          baseURL: `https://shopperback.herokuapp.com/api`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          },
        })
      
        if (decoded.exp < Date.now() / 1000) {
          navigate('/login');
        }
        else{
            const makeRequest = async() => {
                try{
                    const response = await authAxios.post(`/checkout/payment`,
                    {
                        tokenID : stripeToken.id,
                        amount: cart.total,
                        description : "React + Stripe Shop Website(SpringBoot + MongoDB)",
                        name: stripeToken['card'].name,
                        line1: stripeToken['card'].address_line1,
                        postalCode:  stripeToken['card'].address_zip,
                        city : stripeToken['card'].address_city,
                        state : stripeToken['card'].address_state,
                        country: stripeToken['card'].address_country,
                        receiptMail: stripeToken.email


                    });
                    navigate('/sucess', {state : {stripeData: response.data, products: cart }});
                }
               
                catch(e){
                    console.log(e)
                }
            }
            stripeToken && cart.total>= 1 && makeRequest();
        }
        
      },[stripeToken, cart.total,navigate, cart])

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

  return (
    <Container>
        <Navbar/>
        <Page>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <Link to={"/pay"}>
                <TopButton>Check out Now</TopButton>
                </Link>
               
            </Top>
            <Bottom>
                <Info>
                    {
                        cart['products'].map(product => (
                            <Product key={product._id}>
                            <ProductDetail>
                                <Image src={`data:image/jpeg;base64,${product.img.data}`}/>
                                <Details>
                                    <ProductName><b>Product :</b>{product.title}</ProductName>
                                    <ProductCode><b>Product Code :</b>{product._id}</ProductCode>
                                    <ProductColor color={outOfColor(product.color)} title={product.color}/>
                                    <ProductSize><b>Product Size :</b>{product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddCircleIcon/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <RemoveCircleIcon/>
                                </ProductAmountContainer>
                                <ProductPrice>{product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))
                    }
                </Info>
                            <Summary>
                                <SummaryTitle>Order Summary</SummaryTitle>
                                    <SummaryItem>
                                        <SummaryItemText>Sub Total</SummaryItemText>
                                        <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem>
                                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                                        <SummaryItemPrice>Rs 100</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem>
                                        <SummaryItemText>Shipping Discount</SummaryItemText>
                                        <SummaryItemPrice>Rs -100</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem type="total">
                                        <SummaryItemText >Total</SummaryItemText>
                                        <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
                                    </SummaryItem>
                                    <StripeCheckout
                                        name="Shop Payment" // the pop-in header title
                                        description="React + Stripe" // the pop-in header subtitle
                                        image="https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg" // the pop-in header image (default none)
                                        amount={cart.total * 100} // cents
                                        stripeKey={publishable_key}
                                        currency="INR"
                                        // Note: Enabling either address option will give the user the ability to
                                        // fill out both. Addresses are sent as a second parameter in the token callback.
                                        shippingAddress
                                        billingAddress
                                        token={onToken}> 
                                            <Button>CheckOut Now</Button>
                                        </StripeCheckout>
                                        
                                
                            </Summary>
                
            </Bottom>
        </Page>
      <Footer/>
    </Container>
  )
}

export default Cart
