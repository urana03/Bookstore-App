import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { connect } from 'react-redux';
import { getCartItem } from '../services/dataService';
import {Box} from '@mui/material';


const useStyles = makeStyles({
   appbar:{
    display:'flex',
    width:'100vw',
    height:'7vh',
    justifyContent:'center',
    alignItems: 'center'
   },
   mainHeader:{
    display:'flex',
    width:'70%',
    height:'90%',
    justifyContent:'flex-start',
    alignItems:'center',
   },
   booklogo:{
    display:'flex',
    height: '40%',
    width: '3%',
    justifyContent:'flex-start'
   },
   bookLogoText:{
    marginLeft:5,
    fontWeight:400,
    fontSize:18
   },
   searchBook:{
    display:'flex',
    height: '80%',
    width:'45%',
    marginLeft:'7%',
    alignItems:'center',
    backgroundColor:'white'
   },
   bookHeaderIcon:{
    display:'flex',
    height:'80%',
    width:'13%',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:'auto'
   }
});

function HeaderBookstore(props){
    const classes = useStyles();

    const changeDashboard = () => {
      props.showCart();
    }
    
     const loadBadge = () => {
      getCartItem().then((response) => {
        props.dispatch({
            type:'UPDATE_BADGE',
            payload:response.data.result.length
        })
    })
  }
    
    

    return(
      <AppBar variant='outlined' className={classes.appbar} sx={{backgroundColor:'#A03037'}} onLoad={() => loadBadge()} >
       <Box className={classes.mainHeader} >
        <img src='/assets/education.svg' width='100%' height='100%' 
         className={classes.booklogo} />
         <span className={classes.bookLogoText}>Bookstore</span>
         <Box className={classes.searchBook}>
          <TextField variant='standard' fullWidth size='larger'
          placeholder='Search'
          InputProps={{
            disableUnderline:true,
            startAdornment: <InputAdornment position="start"><Button color='inherit' size='small'>
                <SearchOutlinedIcon/></Button></InputAdornment>,
          }}/>
         </Box>
         <Box className={classes.bookHeaderIcon}>
           <Button color='inherit'><PersonOutlineIcon/></Button>
           <Button color='inherit' onClick={changeDashboard}>
           <Badge  badgeContent={props.count} color='warning'>
            <ShoppingCartOutlinedIcon/>
            </Badge>
            </Button>
         </Box>
       </Box>
      </AppBar>
    );
}
 const mapStateToProps = (state) =>{
      return {
        count:state.BadgeReducer.count
      }
 }
export default connect(mapStateToProps)(HeaderBookstore)