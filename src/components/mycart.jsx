import React,{useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import BookInCart from './bookcart';
import AddressForm from './address';
import OrderSummary from './ordersummary';
import { getCartItem } from '../services/dataService';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    mainCart:{
      display:'flex',
      flexDirection:'column',
      width:'68vw',
      height:'auto',
      marginTop:'4%',
      marginBottom:'13%',
      marginLeft:'auto',
      marginRight:'auto'
    },
    bookCartHome:{
        display:'flex',
        height:'7%',
        width:'100%',
        alignItems:'center'
    },
    bookListCart:{
        display:'flex',
        height:'auto',
        width:'80%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        border:'1px solid grey'
    },
    addressCart:{
        display:'flex',
        height:'6vh',
        width:'76.3%',
        marginTop:20,
        fontColor:'#454545',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:40,
        border:'1px solid grey'
    },
    orderSummary:{
        display:'flex',
        height:'6vh',
        width:'76.3%',
        marginTop:20,
        paddingLeft:40,
        fontColor:'#454545',
        justifyContent:'flex-start',
        alignItems:'center',
        border:'1px solid grey'
    },
    bookListOne:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height:'17%',
        width:'90%',
        marginBottom:10
    },
    bookListTwo:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        height:'auto',
        width:'90%'
    },
    bookListButton:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        height:'15%',
        width:'90%',
        marginTop:5,
        marginBottom:13,
    },
    bookListText:{
        fontSize:'1.2rem'
    },
    bookListLocation:{
        display:'flex',
        width:'30%',
        height:'100%',
        alignItems:'center'
    }
})

function MyCart(){
   const classes = useStyles();
   const [addressToggle,setAddressToggle] = useState(true);
   const [placeButton,setPlaceButton] = useState(true);
   const [orderToggle,setOrderToggle] = useState(true)
   const [cartItems,setCartItems] = useState([])
  
   const showForm = () => {
    setAddressToggle(false);
    setPlaceButton(false)
   }
   
   const orderDetails = () => {
      setOrderToggle(false)
   }

   const getBooks = () => {
        getCartItem().then((response) => {
             console.log(response)
             setCartItems(response.data.result)
        }).catch((error) => {
             console.log(error)
        })
   }
      
   useEffect(() => {
      getBooks();
   },[cartItems.length])

   const autoRefresh = () => {
    getBooks()
   }

   return(
      <Box className={classes.mainCart}>
        <Box className={classes.bookCartHome}><small>Home/</small><h5>Book(01)</h5></Box>
        <Box className={classes.bookListCart}>
            <Box  className={classes.bookListOne}>
              <Box className={classes.bookListText}>
               MyCart(1)
              </Box>
            <Box className={classes.bookListLocation}>
             <FormControl sx={{ m: 1,minWidth:220 }} size="small">
               <InputLabel id="demo-select-small">Use Current Location</InputLabel>
                <Select
                 labelId="demo-select-small"
                 id="demo-select-small"
                 label="Use Current Location"
                  />
             </FormControl>
            </Box>
            </Box>
            <Box className={classes.bookListTwo}>
             {  cartItems.map((item) => <><BookInCart autoRefresh={autoRefresh} item={item} /></> )}
            </Box>
            <Box className={classes.bookListButton}>
              { placeButton ? <Button variant='contained' onClick={showForm} >Place Order</Button>:<span></span> }
            </Box>
        </Box>
       {addressToggle ? <Box className={classes.addressCart}>Address Details</Box> : <AddressForm orderDetails={orderDetails} />}
       { orderToggle ? <Box className={classes.orderSummary}>Order Summary</Box> : <OrderSummary  /> }
      </Box>
   )
}

export default connect()(MyCart)