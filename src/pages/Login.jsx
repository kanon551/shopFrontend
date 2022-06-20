import React, { useEffect } from 'react'
import styled from 'styled-components'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)), url("http://4.bp.blogspot.com/-MMLB7RGjmeg/Vc22x3JT42I/AAAAAAAAECw/HevmuloeWYA/s1600/4752971b50d00b6180e3925e212c53b6.jpg"),
    
    center;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
width: auto;
padding: 20px;
border-radius: 20px;
background-color: #b2dfdb;
box-shadow:  5px -5px 10px #5a5a5a,
             -5px 5px 10px #ffffff;
`

const Title = styled.h1`
    margin: 10px;
    color: white;
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    
`
const Button = styled.button`
     border-radius: 10px;
background: lightgreen;
    border: none;
    font-size: x-large;
    margin-left: 80%;
    font-weight: 800;
    cursor: pointer;
    color: white;
    box-shadow:  5px 5px 11px #5a5a5a,
             -5px -5px 11px #ffffff;

             
`
const Navigate = styled.div`
padding: 20px;
  display: flex;
  justify-content: space-between;
  
`

const Login = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
    const[password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const[message,setMessage] = React.useState('');
    const vertical = "top";
    const horizontal = "right";

    // const handleClick = () => {
    //   setOpen(true);
    // };
    useEffect(() => {
      localStorage.setItem('token', null)
      localStorage.setItem('userId', null)
          localStorage.setItem('userMail', null)
      }, [])

  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    
    const checkLoginStatus =() => {

      const data ={
        email: email,
        password: password
      }

      axios.post("https://shopperback.herokuapp.com/api/v1/login",data)
      .then(res => {
        setMessage(res.data.message)
          setOpen(true);

        if(res.data.token !== undefined && res.data.token !== "Invalid User Credentials"){
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userId', res.data['user']._id)
          localStorage.setItem('userMail', res.data['user'].email)
          localStorage.setItem('openGates', true)
          navigate('/home');
        }
        else{
          localStorage.setItem('openGates', false)
          localStorage.setItem('token', null)
          localStorage.setItem('userId', null)
          localStorage.setItem('userMail', null)
          localStorage.setItem('openGates', true)
          navigate('/login');
        }
        
      })
      .catch(err => {
        navigate('/login');
      })

    }
  return (
    <Container>
    <Wrapper>
        <Title>Sign In</Title>
        <Form>
               <TextField style={{margin: "10px"}}
                label="Email"
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
              />
              
            <FormControl  style={{margin: "10px"}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword === true ? "password" : "text"}
          value={password}
          onChange={(event)=> setPassword(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                  onClick={()=>setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Navigate>
            <Link to={'/register'}
          component="button"
          variant="body2"
          onClick={() => navigate('/register')}
        >
            Navigate to Account Creation
      </Link>
      </Navigate>
        </Form>
        <Button onClick={()=>checkLoginStatus()}>Login</Button>
    </Wrapper>

      <Snackbar
       anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        //action={action}
      />
      
  </Container>
)
}

export default Login
