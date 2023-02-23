import React,{ useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { cartQuantity } from '../services/dataService';


const useStyles = makeStyles({
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

function CounterBookDetails(props){
    const classes = useStyles();
    const [quantity,setQuantity] = useState(props.bookData.quantity);
    
    const increaseHandler = () => {
        setQuantity(quantity => quantity + 1);
        let bookQuantity = {quantityToBuy:quantity}
        cartQuantity(props.bookData._id,bookQuantity).then((response) =>{
             console.log(response)
        }).catch((error) => {
             console.log(error)
        })
    }

    const decreaseHandler = () => {
        if(quantity <= 1){
           props.setCountToggle(true)
        }
        else{
        setQuantity(quantity => quantity - 1);
        let bookQuantity = {quantityToBuy:quantity}
        cartQuantity(props.bookData._id,bookQuantity).then((response) =>{
             console.log(response)
        }).catch((error) => {
             console.log(error)
        })
        }
    }
    
    return(
        <Box className={classes.mainCounter}>
          <IconButton onClick={decreaseHandler}> <RemoveCircleOutlineIcon/> </IconButton>
          <Box className={classes.countBook}>{quantity}</Box>
          <IconButton onClick={increaseHandler}> <AddCircleOutlineIcon/></IconButton>
        </Box>
    )
}

export default CounterBookDetails