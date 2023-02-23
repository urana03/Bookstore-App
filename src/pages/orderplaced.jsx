import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';
import HeaderBookstore from '../components/header'
import FooterBookStore from '../components/footer';
import { useNavigate } from 'react-router-dom';

const useStyles= makeStyles({
      mainOrderOne:{
         display:'flex',
         width:'66vw',
         height:'64vh',
         flexDirection:'column',
         justifyContent:'center',
         alignItems:'center',
         marginLeft:'16%',
         marginTop:'5%',
         gap:'1%'
      },
      mainOrderTwo:{
         display:'flex',
         width:'66vw',
         height:'30vh',
         flexDirection:'column',
         justifyContent:'center',
         alignItems:'center',
         marginLeft:'17%',
         gap:'10%',
         marginBottom:'4%'
      },
      imgOne:{
        display:'flex',
        width:'23%',
        height:'30%',
      },
      imgTwo:{
        display:'flex',
        width:'12%',
        height:'17%',
      },
      orderTextOne:{
        display:'flex',
        width:'40%',
        height:'12%',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'1.5em',
        fontWeight:'700'
      },
      orderTextTwo:{
        display:'flex',
        width:'40%',
        height:'30%',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'1.3em'
      },
      tableOrder:{
        display:'flex',
        height:'70%',
        width:'90%',
        flexDirection:'column',
        border:'1px solid grey',
      },
      tableOne:{
       display:'flex',
       height:'35%',
       width:'100%',
       alignItems:'center',
       justifyContent:'space-around',
       borderBottom:'1px solid grey'
      },
      tableTwo:{
        display:'flex',
        height:'65%',
        width:'100%'
      },
      tableMail:{
        display:'flex',
        width:'33%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRight:'1px solid grey'
      },
      tablePhone:{
        display:'flex',
        width:'33%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRight:'1px solid grey'
      },
      tableAddress:{
        display:'flex',
        width:'33%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
      },   
      buttonContinue:{
        display:'flex',
        height:'16%',
        width:'22%'
      }
})

const OrderPlaced = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const showDashboard = () => {
          navigate('/dashboard')
    }
    return(
        <>
    <HeaderBookstore/>
    <Box className={classes.mainOrderOne}>
    <Box className={classes.imgOne}><img src="./assets/ordermainone.png" width='100%' height='100%' /></Box>
    <Box className={classes.orderTextOne}>Order Placed Successfully</Box>
    <Box className={classes.imgTwo}><img src='./assets/ordermaintwo.png' width='100%' height='100%' /></Box>
    <Box className={classes.orderTextTwo}>
        <p>hurray!!! your order is confirmed the order id is #123456 
            save the order id for further communication..</p>
    </Box>
    </Box>
    <Box className={classes.mainOrderTwo}>
      <Box className={classes.tableOrder}>
            < Box className={classes.tableOne}>
                <h4>Email us</h4>
                <h4>Contact us</h4>
                <h4>Address</h4>
            </Box>
            <Box className={classes.tableTwo}>
                <span className={classes.tableMail}>admin@bookstore.com</span>
                <span className={classes.tablePhone}>+91 8163475881</span>
                <span className={classes.tableAddress}>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, 
                near Kumarakom restaurant, HSR Layout, Bangalore 560034</span>
            </Box>
      </Box>
      <Box className={classes.buttonContinue}>
      <Button variant='contained' fullWidth onClick={showDashboard} >Continue Shopping</Button>
      </Box>
    </Box>
    <FooterBookStore/>
    </>
    );
}

export default OrderPlaced