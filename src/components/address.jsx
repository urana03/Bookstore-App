import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, InputLabel, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const useStyles = makeStyles({
    mainForm:{
        display:'flex',
        height:'70vh',
        width:'54.5vw',
        marginTop:20,
        flexDirection:'column',
        alignItems:'center',
        fontSize:'1.3rem',
        border:'1px solid grey'
    },
    headingAddress:{
        display:'flex',
        height:'14%',
        width:'90%',
        alignItems:'center'
    },
    formAddress:{
        display:'flex',
        height:'76%',
        width:'80%',
        flexDirection:'column',
        gap:'3%'
    },
    namePhone:{
         display:'flex',
         width:'80%',
         height:'15%',
         justifyContent:'space-between'
    },
    continueButton:{
        display:'flex',
        height:'9%',
        width:'90%',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    fullName:{
        display:'flex',
        width:'48%',
        height:'100%',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    phone:{
        display:'flex',
        width:'48%',
        height:'100%',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    address:{
        display:'flex',
        height:'40%',
        width:'80%',
        flexDirection:'column',
        alignItems:'flex-start'
    } ,
    cityState:{
        display:'flex',
        width:'80%',
        height:'15%',
        justifyContent:'space-between'
    },
    city:{
        display:'flex',
        width:'48%',
        height:'100%',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    state:{
        display:'flex',
        width:'48%',
        height:'100%',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    addressType:{
        display:'flex',
        width:'80%',
        height:'15%',
        flexDirection:'column',
        alignItems:'flex-start'
    },
    addressLabel:{
        display:'flex',
        height:'auto',
        width:'100%'
    },
    radio:{
        display:'flex',
        height:'50%',
        width:'100%',
        justifyContent:'space-between'
    }
}) 

function AddressForm(props){
    const classes = useStyles();
    const [value, setValue] = React.useState('home');
    const [continueClick,setContinueClick] = React.useState(true)

    const handleChange = (event) => {
        setValue(event.target.value);
     };
     
     const orderBox= () => {
        props.orderDetails();
        setContinueClick(false)
     }

    return(
        <Box className={classes.mainForm}>
         <Box className={classes.headingAddress}>Customer Details</Box>
         <Box className={classes.formAddress}>
            <Box className={classes.namePhone}>
             <Box className={classes.fullName}>
             <InputLabel shrink>Full name</InputLabel>
             <TextField variant='outlined' fullWidth size='small' />
             </Box>
             <Box className={classes.phone}>
             <InputLabel shrink>Phone</InputLabel>
             <TextField variant='outlined' fullWidth size='small' />
             </Box>
            </Box>
            <Box className={classes.address}>
            <InputLabel shrink>Address</InputLabel>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                fullWidth
              />
            </Box>
            <Box className={classes.cityState}>
            <Box className={classes.city}>
             <InputLabel shrink>City/Town</InputLabel>
             <TextField variant='outlined' fullWidth size='small' />
             </Box>
             <Box className={classes.state}>
             <InputLabel shrink>State</InputLabel>
             <TextField variant='outlined' fullWidth size='small' />
             </Box>
            </Box>
            <Box className={classes.addressType}>
                <Box className={classes.addressLabel}>
                <InputLabel shrink>Type</InputLabel> 
                </Box>
                <Box className={classes.radio}>
                <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange} 
                      sx={{gap:18}}  
                >
                 <FormControlLabel value="home" control={<Radio />} label="Home" />
                 <FormControlLabel value="work" control={<Radio />} label="Work" />
                 <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </Box>
            </Box>
         </Box>
         <Box className={classes.continueButton}>
         { continueClick ? <Button variant='contained' onClick={orderBox}>Continue</Button>:<></> }
         </Box>
        </Box>
    )
}

export default AddressForm