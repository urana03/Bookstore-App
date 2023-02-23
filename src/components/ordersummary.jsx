import React,{useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import OrderBook from './bookOrder';
import Button from '@mui/material/Button';
import { getCartItem } from '../services/dataService';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    mainSummary:{
        display:'flex',
        height:'auto',
        width:'80%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'2%',
        border:'1px solid grey'
    },
    headingOrder:{
        display:'flex',
        height:'10vh',
        width:'90%',
        fontSize:'1.3rem',
        alignItems:'center'
    },
    bookOrder:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        height:'auto',
        width:'90%'
    },
    orderButton:{display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    height:'15%',
    width:'90%',
    marginTop:5,
    marginBottom:13,
   }
}) 

function OrderSummary(props){
    const classes = useStyles();
    const [orderItems,setOrderItems] = useState([]);
    const navigate = useNavigate();

    const getOrderBooks = () => {
        getCartItem().then((response) => {
             console.log(response)
             setOrderItems(response.data.result)
        }).catch((error) => {
             console.log(error)
        })
   }

      useEffect(() => {
         getOrderBooks();
      },[orderItems.length])
    
      const showOrderPlaced = () => {
         navigate('/orderplaced')
      }

    return(
        <Box className={classes.mainSummary}>
            <Box className={classes.headingOrder}>Customer Details</Box>
            <Box className={classes.bookOrder}>
               { orderItems.map(item => <OrderBook item={item} />) }
            </Box>
            <Box className={classes.orderButton}>
            <Button variant='contained' onClick={showOrderPlaced}>Checkout</Button>
            </Box>
        </Box>
    )
}

export default OrderSummary