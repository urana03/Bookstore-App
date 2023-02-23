import React from 'react';
import { Box, InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { loginApi } from '../services/userServices';
import { makeStyles } from '@mui/styles';
import { AddBox } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
    login:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20vw',
        height:'44vh',
        gap:'5%'
    },
    loginEmail:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '90%',
        height: '19%'
    },
    loginPassword:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '90%',
        height: '24%'
    },
    forgetPassLog:{
        display: 'flex',
        height: '22%',
        width: '100%',
        justifyContent: 'flex-end',
        fontSize: '12px',
        textDecoration:'none',
        color: '#45454'
    },
    loginButton:{
        display: 'flex',
        width: '90%',
        height: '10%'
    },
    loginOR:{
        display: 'flex',
        height: '14%',
        width: '50%',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#808080',
        gap: '9%'
    },
    twoButtonLog:{
        display: 'flex',
        width: '90%',
        height: '10%',
        justifyContent: 'space-between'
    }
})

function LogIn(){
    const classes = useStyles();
    const [credentials,setCredentials] = useState({email:'',password:''})
    const [regex,setRegex] = useState({emailLabel:false,emailInput:false,
                                        passwordLabel:false,passwordInput:false})
    const navigate = useNavigate();
    const email = (event) =>{
          setCredentials((prevState) => (
            {...prevState,email:event.target.value}
          ))
    }
    const password = (event) => {
        setCredentials((prevState) => (
            {...prevState,password:event.target.value}
        ))
    }
    const submit = () => {
     let emailTest = emailRegex.test(credentials.email);
     let passwordTest = passwordRegex.test(credentials.password);
     
     if(emailTest === false){
        setRegex((prevState) =>({
            ...prevState,
            emailInput:true,
            emailLabel:true
           }))
     }
     else if(emailTest === true){
        setRegex((prevState) => ({
            ...prevState,
            emailInput:false,
            emailLabel:false
        }))
     }

     if(passwordTest === true){
     setRegex((prevState) => ({
        ...prevState,passwordLabel:false,passwordInput:false
       }))
    }
    else if(passwordTest === false){
        setRegex((prevState) => ({
            ...prevState,passwordLabel:true,passwordInput:true
           }))
    }
    if(emailTest === true && passwordTest === true){
        loginApi(credentials).then((response) => {
             console.log(response);
             localStorage.setItem('token',response.data.result.accessToken)
             navigate('/dashboard')
        }).catch((error) => {
             console.log(error)
        })
    }
    }
    return(
        <Box className={classes.login}>
             <Box className={classes.loginEmail}>
             <InputLabel shrink error={regex.emailLabel}>
              Email Id
            </InputLabel>
            <TextField variant='outlined' size='small' onChange={email} error={regex.emailInput} fullWidth/>
             </Box>
             <Box className={classes.loginPassword}>
             <InputLabel shrink error={regex.passwordLabel}>
              Password
             </InputLabel>
             <TextField variant='outlined' size='small' onChange={password} error={regex.passwordInput} type='password' fullWidth/>
             <Box className={classes.forgetPassLog}><a href='#'>Forgot Password?</a></Box>
             </Box>
              <Box className={classes.loginButton}>
              <Button variant='contained' color='error' onClick={submit} sx={{width:'100%',textTransform:'none',backgroundColor:'#A03037'}}>Login</Button>
              </Box> 
             <Box className={classes.loginOR}>
             <Box style={{ flex: 0.5, backgroundColor: "lightgray", height: "2px" }} />
              <h3>OR</h3>
              <Box style={{ flex: 0.5, backgroundColor: "lightgray", height: "2px" }} />
             </Box>
             <Box className={classes.twoButtonLog}>
              <Button variant='contained' sx={{textTransform:'none',width:'47%'}}>Facebook</Button>
              <Button variant='contained' color='success' sx={{width:'47%',textTransform:'none',backgroundColor:'lightgray',color:'grey'}}>Google</Button>
            </Box>
        </Box>
    )
}

export default LogIn