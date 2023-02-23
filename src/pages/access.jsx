import React from 'react';
import LogIn from '../components/login';
import SignUp from '../components/signup';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    main:{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightgray'
    },
    imgContainer:{
        display: 'flex',
        width: '22vw',
        height: '48vh',
        flexDirection: 'column',
        alignItems: 'center',
        position:'relative',
        top:'28%',
        left:'28%',
        borderRadius: '4%',
        backgroundColor: 'white',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        zIndex: '1'
    },
    detailContainer:{
        display: 'flex',
        width: '25vw',
        height: '55vh',
        flexDirection: 'column',
        alignItems: 'center',
        position:'relative',
        top:'24.3%',
        left:'26%',
        borderRadius: '1%',
        backgroundColor: 'white',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        zIndex: '2',
        gap: '1%'
    },
    accessImage:{
        display: 'flex',
        width: '70%',
        height:'60%',
        marginTop: '16%',
        marginRight: '5%',
        borderRadius: '50%'
       
    },
    accessText:{
        display: 'flex',
        width: '80%',
        height:'10%',
        marginTop: '7%',
        marginRight: '3%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailHead:{
        display: 'flex',
        height: '12%',
        width: '78%',
        marginTop: '4%',
        justifyContent:'space-between'
    },
    formBoth:{
        display: 'flex',
        width: '90%',
        height: '78%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function AccessPage() {
    const classes = useStyles();
    const [formToggle,setFormToggle] = React.useState(true);
    const signupHandler = () => {
        setFormToggle(false);
    }
    const loginHandler = () => {
        setFormToggle(true);
    }
    return(
        <div className={classes.main}>
            <div className={classes.imgContainer}>
              <img src='/assets/component.png' width='100%' height='100%' className={classes.accessImage}/>
              <h3 className={classes.accessText}>ONLINE BOOK SHOPPING</h3>
            </div>
            <div className={classes.detailContainer}>
                <div className={classes.detailHead}>
                <Button color='inherit' size='large' onClick={loginHandler}>LOGIN</Button>
                <Button color='inherit' size='large' onClick={signupHandler}>SIGNUP</Button>
                </div>
                <div className={classes.formBoth}>
                {(formToggle) ? <LogIn/> : <SignUp/>}
                </div>
            </div>
        </div>
    )
}

export default AccessPage