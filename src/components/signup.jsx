import React,{ useState } from 'react';
import { Box, InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registerApi } from '../services/userServices';
import { makeStyles } from '@mui/styles';

const fullnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /d{10}$/

const useStyles = makeStyles({
  signup:{
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    width: '20vw',
    height:'44vh',
    gap: '3%'
},
signupName:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '90%',
    height: '19%'
},
signupEmail:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '90%',
    height: '19%'
},
signupPass:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '90%',
    height: '19%'
},
signupNumber:{
    display: 'flex',
    flexDirection:'column',
    alignItems: 'flex-start',
    width: '90%',
    height: '19%'
},
numberInputSignup:{
    border: '1px solid grey',
    borderRadius:'1%',
    width: '100%',
    height: 'auto'
},
signupButton:{
    display: 'flex',
    width: '90%',
    height: '10%'
}
})

function SignUp(){
  const classes = useStyles();
  const [details,setDetails] = useState({fullName:'',email:'',password:'',phone:''})
  const [regex,setRegex] = useState({emailLabel:false,emailInput:false,
                                      passwordLabel:false,passwordInput:false,
                                      fullnameLabel:false,fullnameInput:false,
                                      mobileLabel:false,mobileInput:false})

  const fullname = (event) => {
      setDetails((prevState) => ({
         ...prevState,fullName:event.target.value
      }))
  }
  const email = (event) => {
    setDetails((prevState) => ({
       ...prevState,email:event.target.value
    }))
  }
  const password = (event) => {
    setDetails((prevState) => ({
       ...prevState,password:event.target.value
    }))
  } 
  const mobile = (event) => {
    setDetails((prevState) => ({
       ...prevState,phone:event.target.value
    }))
 }

  const register = () => {
         let fullNameTest = fullnameRegex.test(details.fullName)
         let emailTest = emailRegex.test(details.email)
         let passwordTest = passwordRegex.test(details.password)
         let mobileTest = mobileRegex.test(details.phone)

        if(fullNameTest === false){
          setRegex((prevState) =>({
            ...prevState,fullnameLabel:true,fullnameInput:true
          }))
        }
        else if(fullNameTest === true){
          setRegex((prevState) =>({
            ...prevState,fullnameLabel:false,fullnameInput:false
          }))
        }
        if(emailTest === false){
          setRegex((prevState) =>({
            ...prevState,emailLabel:true,emailInput:true
          }))
        }
        else if(emailTest === true){
          setRegex((prevState) =>({
            ...prevState,emailLabel:false,emailInput:false
          }))
        }
        if(passwordTest === false){
          setRegex((prevState) =>({
            ...prevState,passwordLabel:true,passwordInput:true
          }))
        }
        else if(passwordTest === true){
          setRegex((prevState) =>({
            ...prevState,passwordLabel:false,passwordInput:false
          }))
        }
        if(mobileTest === false){
          setRegex((prevState) =>({
            ...prevState,mobileLabel:true,mobileInput:true
          }))
        }
        else if(mobileTest === true){
          setRegex((prevState) =>({
            ...prevState,mobileLabel:false,mobileInput:false
          }))
        }
        if(fullNameTest === true && emailTest === true && 
          passwordTest === true && mobileTest === true)
        {
           registerApi(details).then((response) => {
                console.log(response)
           }).catch((error) => {
                console.log(error)
           })
        }
    }
    return(
        <Box className={classes.signup}>
          <Box className={classes.signupName}>
             <InputLabel shrink error={regex.fullnameLabel}>
              Full Name
            </InputLabel>
            <TextField variant='outlined' onChange={fullname} error={regex.fullnameInput} type='text' size='small' fullWidth/>
             </Box>
             <Box className={classes.signupEmail}>
             <InputLabel shrink error={regex.emailLabel}>
              Email Id
            </InputLabel>
            <TextField variant='outlined' onChange={email} error={regex.emailInput} type='text' size='small' fullWidth/>
             </Box>
             <Box className={classes.signupPass}>
             <InputLabel shrink error={regex.passwordLabel}>
              Password
            </InputLabel>
            <TextField variant='outlined' onChange={password} error={regex.passwordInput} type='password' size='small' fullWidth/>
             </Box>
             <Box className={classes.signupNumber}>
             <InputLabel shrink error={regex.mobileLabel}>
              Mobile Number
            </InputLabel>
            <TextField variant='outlined' onChange={mobile} error={regex.mobileInput} size='small' type='text' fullWidth/>
             </Box>
             <Box className={classes.signupButton}>
              <Button variant='contained' onClick={register} color='error' sx={{width:'100%',textTransform:'none',backgroundColor:'#A03037'}}>Register</Button>
            </Box> 
    </Box>
    )
}

export default SignUp