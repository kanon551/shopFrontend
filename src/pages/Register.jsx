import React from 'react'
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
import {useNavigate} from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)), url("https://wallpaperaccess.com/full/6064696.jpg"),
    /* "http://4.bp.blogspot.com/-MMLB7RGjmeg/Vc22x3JT42I/AAAAAAAAECw/HevmuloeWYA/s1600/4752971b50d00b6180e3925e212c53b6.jpg" */
    center;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
width: auto;
padding: 20px;
border-radius: 33px;
background-color: #b2dfdb;

/* background: lemonchiffon; */
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


const Register = () => {
  const navigate = useNavigate();
    const[password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(true);
    // const [name, setName] = React.useState('');
    // const [lastName, setLastName] = React.useState('');
    const[message,setMessage] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [confirmPass, setConfirmPass] = React.useState('');
    const [showConfirmPass, setShowConfirmPass] = React.useState(true)

    const [open, setOpen] = React.useState(false);
    const vertical = "top";
    const horizontal = "right";
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const registerUser =()=> {

      if(password !== confirmPass){
        setMessage("Confirm Password should match password")
        setOpen(true);

      }
      else{
        const data ={
          email: email,
          password: password
        }

        axios.post("https://shopperback.herokuapp.com/api/v1/register",data)
        .then(res => {
          setMessage(res.data.message)
            setOpen(true);   
            setEmail("");
            setPassword("");
            setConfirmPass("");
        })
        .catch(err => {
          navigate('/register');
        })
      }
      
    }

  return (
    <Container>
      <Wrapper>
          <Title>Register An Account</Title>
          <Form>
               {/* <TextField style={{margin: "10px"}}
                  label="Name"
                  value={name}
                  onChange={(event)=> setName(event.target.value)}
                />
                <TextField style={{margin: "10px"}}
                  label="Last name"
                  value={lastName}
                  onChange={(event)=> setLastName(event.target.value)}
                /> */}
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

        <FormControl  style={{margin: "10px"}} variant="outlined">
          <InputLabel htmlFor="outlined-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-password"
            type={showConfirmPass === true ? "password" : "text"}
            value={confirmPass}
            onChange={(event)=> setConfirmPass(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                    onClick={()=>setShowConfirmPass(!showConfirmPass)}
                  edge="end"
                >
                  {showConfirmPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

            <Navigate>
            <Link
          component="button"
          variant="body2"
          onClick={() => navigate('/login')}
        >
            Navigate to Login Page
      </Link>
       
            </Navigate>
       
          </Form>
          <Button onClick={()=>registerUser()}>Create</Button>
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

export default Register
