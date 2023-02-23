import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {Box} from '@mui/material';

const useStyles = makeStyles({
    bookCart:{
        display:'flex',
        alignItems:'center',
        height:'20vh',
        width:'33vw',
        gap:'5%'
    },
    bookImageCart:{
        display:'flex',
        alignItems:'center',
        height:'85%',
        width:'20%'
    },
    bookDetailsCart:{
        display:'flex',
        alignItems:'center',
        height:'85%',
        width:'50%',
        flexDirection:'column',
        gap:'15%'
    },
    detailsCartBookname:{
        display:'flex',
        height:'25%',
        width:'100%',
        fontSize:'1.2rem'
    },
    detailsCartAuthor:{
        display:'flex',
        height:'15%',
        width:'100%'
    },
    detailsCartPrice:{
        display:'flex',
        height:'25%',
        width:'100%',
        fontSize:'1.2rem',
        fontWeight:'500',
        gap:'2%',
        alignItems:'center'
    }
})

function OrderBook(props){
    const classes = useStyles();
    return(
        <Box className={classes.bookCart}>
        <Box className={classes.bookImageCart}><img src='assets/bookimage.png' width='100%' height='100%' /></Box>
        <Box className={classes.bookDetailsCart}>
            <Box className={classes.detailsCartBookname}>{props.item.product_id.bookName}</Box>
            <Box className={classes.detailsCartAuthor}><small>by Steve Krug</small></Box>
          <Box className={classes.detailsCartPrice}>{props.item.product_id.price}<small><strike>Rs.2000</strike></small></Box>
        </Box>
        </Box>    
    )
}

export default OrderBook