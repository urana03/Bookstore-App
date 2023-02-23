import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import {Box ,IconButton} from '@mui/material';
import CounterBookDetails from './counter';
import { deleteBook } from '../services/dataService';
import { connect } from 'react-redux';
import { getCartItem } from '../services/dataService';
import { cartQuantity } from '../services/dataService';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


const useStyles = makeStyles({
    bookCart:{
        display:'flex',
        alignItems:'center',
        height:'20vh',
        width:'33vw',
        gap:'5%',
        marginBottom:28
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
        height:'95%',
        width:'50%',
        flexDirection:'column',
        gap:'10%'
    },
    detailsCartBookname:{
        display:'flex',
        height:'23%',
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
        height:'22%',
        width:'100%',
        fontSize:'1.2rem',
        fontWeight:'500',
        gap:'2%',
        alignItems:'center'
    },
    detailsCartRemove:{
        display:'flex',
        height:'30%',
        width:'100%'
    },
    cartQuantity:{
        display:'flex',
        width:'60%',
        height:'100%'
    },
    cartRemoveButton:{
        display:'flex',
        width:'40%',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    mainCounter:{
        display:'flex',
        width:'10vw',
        height:'5vh',
        justifyContent:'space-evenly'
    },
    countBook:{
        display:'flex',
        height:'90',
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'1.5rem',
        border:'1px solid grey'
    }
})

function BookInCart(props){
    const classes=useStyles();
    const [quantity,setQuantity] = useState(props.item.product_id.quantity);

    const increaseHandler = () => {
        setQuantity(quantity => quantity + 1);
        let bookQuantity = {quantityToBuy:quantity}
        cartQuantity(props.item._id,bookQuantity).then((response) =>{
             console.log(response)
        }).catch((error) => {
             console.log(error)
        })
    }

    const decreaseHandler = () => {
        if(quantity <= 1){
           removeBook();
        }
        else{
        setQuantity(quantity => quantity - 1);
        let bookQuantity = {quantityToBuy:quantity}
        cartQuantity(props.item._id,bookQuantity).then((response) =>{
             console.log(response)
        }).catch((error) => {
             console.log(error)
        })
        }
    }

    const removeBook = () => {
        deleteBook(props.item._id).then((response) => {
               console.log(response)
               getCartItem().then((response) => {
                props.dispatch({
                    type:'UPDATE_BADGE',
                    payload:response.data.result.length
                })
        })}).catch((error) => {
            console.log(error)
        });
    }

    return(
        <Box className={classes.bookCart}>
        <Box className={classes.bookImageCart}><img src='assets/bookimage.png' width='100%' height='100%' /></Box>
        <Box className={classes.bookDetailsCart}>
            <Box className={classes.detailsCartBookname}>{props.item.product_id.bookName}</Box>
            <Box className={classes.detailsCartAuthor}><small>by Steve Krug</small></Box>
            <Box className={classes.detailsCartPrice}>{props.item.product_id.price}<small><strike>Rs.2000</strike></small></Box>
            <Box className={classes.detailsCartRemove}>
                <Box className={classes.cartQuantity}>
                <Box className={classes.mainCounter}>
                <IconButton onClick={decreaseHandler}> <RemoveCircleOutlineIcon/> </IconButton>
                 <Box className={classes.countBook}>{quantity}</Box>
                <IconButton onClick={increaseHandler}> <AddCircleOutlineIcon/></IconButton>
            </Box>
                </Box>
                <Box className={classes.cartRemoveButton}><Button variant='text' color="inherit" onClick={removeBook}>Remove</Button></Box>
            </Box>
        </Box>
        </Box>
    )

}

export default connect()(BookInCart)