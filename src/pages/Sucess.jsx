import React, { useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import jwt_decode from "jwt-decode";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';


const Container = styled.div`
    display: flex;
width: 100vw;
height: 100vh;
`

const Button = styled.button`
    margin: 20px;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    width: 200px;
    height: 50px;
    border: none;
    
    border-radius: 10px;
    background: springgreen;
    box-shadow:  5px 5px 10px #676969,
                -5px -5px 10px #ffffff;
             &:hover {
                border-radius: 10px;
                background: #f5f9f9;
                box-shadow: inset 5px 5px 10px #676969,
                            inset -5px -5px 10px #ffffff;

             
    }

`

const Sucess = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const[message,setMessage] = React.useState('');
    const vertical = "top";
    const horizontal = "right";

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    const data = location.state.stripeData;
    const cart = location.state.products;
    const currentUserID = localStorage.getItem('userId')
    // const [orderId, setOrderId] = useState(null);

    useEffect(()=>{
      const decoded = jwt_decode(localStorage.getItem('token'));
      const authAxios = axios.create({
        baseURL: `https://shopperback.herokuapp.com/api/v1`,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        },
      })
    
      if (decoded.exp < Date.now() / 1000) {
        navigate('/login');
      }
      else{
        const createOrder = async () => {
          try {
            const res = await authAxios.post("/order", {
              userID: currentUserID,
              products: cart.products.map((item) => ({

                productId: item._id,
                quantity: String(item.quantity) ,
              })),
              amount: cart.total,
              address: data.shipping.address,
              status: "not pending"
            });
            setMessage(res.data.message)
            setOpen(true);
            // setOrderId(res.data['order']._id);
          } catch {}
        };
        data && createOrder();
      }
      
    }, [cart, data, currentUserID,navigate])

  return (
    <Container>
       <Button>Sucess</Button>
       <Snackbar
       anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={15000}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        //action={action}
      />
    </Container>
  )
}

export default Sucess
