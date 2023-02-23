import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Button, ButtonBase, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import { addCart, getCartItem } from '../services/dataService';
import CounterBookDetails from './counter';
import { connect } from 'react-redux';

const useStyles = makeStyles({
 bookDetailsMain:{
      display:'flex',
      flexDirection:'column',
      width:'68vw',
      height:'95vh',
      marginTop:'4%',
      marginBottom:'4%',
      gap:'3%'
 },
 bookDetailHome:{
    display:'flex',
    height:'7%',
    width:'100%',
    alignItems:'center'
 },
 bookDetailChild:{
    display:'flex',
    width:'100%',
    height:'91%'
 },
 imageButtonDetail:{
    display:'flex',
    width:'40%',
    height:'100%',
    flexDirection:'column',
    gap:'5%'
 },
 bookDetailChildOne:{
    display:'flex',
    width:'60%',
    height:'100%',
    flexDirection:'column',
    alignItems:'center'
 },
 imageMainDetail:{
     display:'flex',
     height:'60%',
     width:'97%'
 },
 imageMainSmall:{
    display:'flex',
    width:'14%',
    height:'25%',
    flexDirection:'column'
 },
 imageMainBig:{
    display:'flex',
    width:'86%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
 },
 buttonMainDetail:{
    display:'flex',
    width:'82.5%',
    height:'6%',
    marginLeft:'14%',
    gap:'8%'
 },
 bookDetailsName:{
    display:'flex',
    width:'91%',
    height:'5%',
    fontSize:'1.7em',
    alignItems:'flex-start'
},
bookDetailsAuthor:{
    display:'flex',
    width:'91%',
    height:'5%',
    alignItems:'center',
    fontSize:'1em',
    color:'#454545'
},
bookDetailsBadge:{
    display:'flex',
    width:'91%',
    height:'7%',
    alignItems:'center',
    gap:'1%'
},
bookDetailsPrice:{
    display:'flex',
    width:'91%',
    height:'8%',
    alignItems:'flex-start',
    fontSize:'1.7em',
    gap:'1%',
    borderBottom:'1px solid grey'
},
greenDetailsLabel:{
    display:'flex',
    height:'60%',
    width:'10%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#388E3C',
    fontSize:'1em',
    alignItems:'center',
    color:'white',
    gap:'3%'
},
bookDetailText:{
    display:'flex',
    width:'91%',
    height:'25%',
    flexDirection:'column',
    marginTop:'5%'
},
bookTextHeading:{
    display:'flex',
    width:'100%',
    height:'10%',
    fontSize:'1.2rem',
    alignItems:'center'
},
bookDetailPara:{
    display:'flex',
    width:'100%',
    height:'80%',
    alignItems:'center',
    flexWrap:'wrap',
    textAlign:'justify',
    borderBottom:'1px solid grey'
},
customerFeedbackMain:{
    display:'flex',
    width:'91%',
    height:'45%',
    gap:'2%',
    flexDirection:'column'
},
feedbackHeading:{
    display:'flex',
    height:'15%',
    width:'90%',
    alignItems:'center',
    fontSize:'1.3rem'
},
feedbackField:{
    display:'flex',
    width:'100%',
    height:'85%',
    backgroundColor:'#F5F5F5',
    flexDirection:'column',
    gap:'4%'
},
feedbackRating:{
    display:'flex',
    width:'90%',
    height:'16%',
    alignItems:'center',
    marginLeft:'3.5%'
},
feedbackStar:{
    display:'flex',
    width:'90%',
    height:'16%',
    alignItems:'center',
    marginLeft:'3%',
    gap:'2%'
},
feedbackText:{
    display:'flex',
    width:'90%',
    height:'50%',
    alignItems:'center',
    marginLeft:'3%',
    gap:'2%'
},
feedbackSubmit:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    width:'100%',
    height:'20%'
},
imgMainBig:{
    display:'flex',
    width:'70%',
    height:'80%'
},
addToBag:{
    display:'flex',
    height:'100%',
    width:'46%'
},
wishlist:{
    display:'flex',
    height:'100%',
    width:'46%'
},
minImgOne:{
    disply:'flex',
    width:'100%',
    heignt:'50%'
},
minImgTwo:{
    disply:'flex',
    width:'100%',
    heignt:'50%'
}
});

function BookDetails(props){
    const classes = useStyles();
    const [countToggle,setCountToggle] = useState(true);
    const bookData = props.bookDisplay;

    const addToBag = () => {
        let bookAdded = {product_id:props.bookDisplay._id}
        addCart(bookAdded).then((response) =>{
            console.log(response)
            getCartItem().then((response) => {
                props.dispatch({
                    type:'UPDATE_BADGE',
                    payload:response.data.result.length
                })
            })
        }).catch((error) =>{
            console.log(error)
        });
        setCountToggle(false);
    }

    return(
        <Box className={classes.bookDetailsMain}>
        <span className={classes.bookDetailHome}><small>Home/</small><h5>Book(01)</h5></span>
        <Box className={classes.bookDetailChild}>
         <Box className={classes.imageButtonDetail}>
         <Box className={classes.imageMainDetail}>
         <Box className={classes.imageMainSmall}>
         <Card elevation={2} className={classes.minImgOne}></Card>
         <Card elevation={2} className={classes.minImgTwo}></Card>
         </Box>
         <Card elevation={2} className={classes.imageMainBig}>
          <img className={classes.imgMainBig} src='/assets/bookimage.png' width='100%' height='100%' />
         </Card>
         </Box>
         <Box className={classes.buttonMainDetail}>
        { countToggle ? <ButtonBase className={classes.addToBag} variant='outlined' size='large' onClick={addToBag}   sx={{color:'white',fontWeight:'600',backgroundColor:'#A03037'}}>ADD TO BAG</ButtonBase>:<CounterBookDetails bookData={bookData} setCountToggle={setCountToggle} /> }
          <ButtonBase className={classes.wishlist} variant='outlined' size='large'  sx={{color:'white',fontWeight:'600',backgroundColor:'darkgrey'}}>WISHLIST</ButtonBase>
         </Box>
         </Box>
         <Box className={classes.bookDetailChildOne}>
         <strong className={classes.bookDetailsName}>{props.bookDisplay.bookName}</strong>
         <small className={classes.bookDetailsAuthor}>by Steve Krug</small>
         <Box className={classes.bookDetailsBadge}>
            <span className={classes.greenDetailsLabel}>4.3 <StarIcon/></span>
            <small>(20)</small>
         </Box>
         <span className={classes.bookDetailsPrice}>{props.bookDisplay.price}<small><strike>Rs.2000</strike></small></span>
         <Box className={classes.bookDetailText}>
             <span className={classes.bookTextHeading}>Book Details</span>
             <Box className={classes.bookDetailPara}>
             At necessitatibus labore et assumenda nemo et dolores maiores. 
             Et galisum inventore sit cumque voluptas ut dolor autem. Non provident aliquid et labore inventore sit excepturi numquam eos consectetur cupiditate. 
             Et reprehenderit libero ut dignissimos fugit et perspiciatis voluptatem.
             </Box>
             </Box>
             <Box className={classes.customerFeedbackMain}>
              <span className={classes.feedbackHeading}>
               Customer Feedback
              </span>
              <Box className={classes.feedbackField}>
              <span className={classes.feedbackRating}>Overall Rating</span>
              <span className={classes.feedbackStar}>
               <StarBorderIcon/>
               <StarBorderIcon/>
               <StarBorderIcon/>
               <StarBorderIcon/>
               <StarBorderIcon/>
              </span>
              <span className={classes.feedbackText}>
               <TextField
                id="outlined-multiline-static"
                multiline
                rows={2}
                fullWidth
              />
              </span>
              <Box className={classes.feedbackSubmit}>
               <Button  variant='contained' size='small' sx={{textTransform:'none',marginRight:'5%'}}>
                Submit</Button>
                </Box>
              </Box>
              </Box>
         </Box>
        </Box>
        </Box>        
    )
}

export default connect()(BookDetails)