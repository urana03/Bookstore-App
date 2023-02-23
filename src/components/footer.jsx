import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  footerMain:{
    display:'flex',
    width:'100vw',
    height:'6vh',
    backgroundColor:'#2E1D1E',
    justifyContent:'center',
    alignItems:'center'
  },
  footerText:{
    display:'flex',
    width:'45%',
    height:'70%',
    justifyContent:'center',
    alignItems:'center',
    color:'white'
  }
})

function FooterBookStore(){
    const classes = useStyles();
       return(
        <Box className={classes.footerMain}>
               <span className={classes.footerText}>Copyright &#169; 2023.Bookstore Private Limited.All Rights Reserved</span>  
        </Box>

       )
}

export default FooterBookStore