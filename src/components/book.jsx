import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import StarIcon from '@mui/icons-material/Star';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Box, FormControl } from '@mui/material';

const useStyles = makeStyles({
    bookMain:{
        display:'flex',
        flexDirection:'column',
        width:'15vw',
        height:'35vh',
        marginBottom:'9%'
    },
    bookImageMain:{
        display:'flex',
        height:'60%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5F5F5',
        width:'100%'
    },
    bookImageChild:{
         display:'flex',
         height:'80%',
         width:'40%'
    },
    bookDetailContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'40%',
        width:'100%',
        gap:'2%'
    },
    bookName:{
        display:'flex',
        width:'80%',
        height:'18%',
        alignItems:'center'
    },
    bookAuthor:{
        display:'flex',
        width:'80%',
        height:'18%',
        alignItems:'center'
    },
    bookBadge:{
        display:'flex',
        width:'80%',
        height:'18%',
        alignItems:'center',
        gap:'3%'
    },
    bookPrice:{
        display:'flex',
        width:'80%',
        height:'18%',
        alignItems:'center',
        gap:'3%'
    },
    greenLabel:{
        display:'flex',
        height:'100%',
        width:'25%',
        backgroundColor:'#388E3C',
        fontSize:15,
        fontWeight:500,
        alignItems:'center',
        color:'white'
    }
})

function Book(props){
  const classes = useStyles();
    return(
        <Box>
        <Card className={classes.bookMain}>
        <Box className={classes.bookImageMain}>
            <Box className={classes.bookImageChild}>
          <img src='/assets/bookimage.png' width='100%' height='100%' />
          </Box>
        </Box>
        <Box className={classes.bookDetailContainer}>
         <strong className={classes.bookName}>{props.book.bookName}</strong>
         <small className={classes.bookAuthor}>by Steve Krug</small>
         <Box className={classes.bookBadge}>
            <span className={classes.greenLabel}>4.3 <StarIcon/></span>
            <small>(20)</small>
         </Box>
         <span className={classes.bookPrice}>{props.book.price}<small><strike>Rs.2000</strike></small></span>
        </Box>
       </Card>
       </Box>
   )
}

export default Book