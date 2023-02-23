import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import HeaderBookstore from '../components/header';
import FooterBookStore from '../components/footer';
import Book from '../components/book';
import { getBookApi } from '../services/dataService';
import BookDetails from '../components/bookdetails';
import HomeBooks from '../components/homebooks';
import { Box } from '@mui/material';
import MyCart from '../components/mycart';

const useStyles = makeStyles({
     mainDashboard:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'97.8vw',
        height:'auto'
     },
     bookListAndDetailContainer:{
        display:'flex',
        width:'68%',
        marginTop:'1%',
        height:'auto',
        justifyContent:'space-between',
        flexWrap:'wrap'
     }
})

function Dashboard(){
    const classes = useStyles();
    const [booklist,setBookList] = useState([])
    const [bookToggle,setBookToggle] = useState(true)
    const [homeBookToggle,setHomeBookToggle] = useState(true)
    const [bookDisplay,setBookDisplay] = useState(null)
    const [cartToggle,setCartToggle] = useState(true)

    const handleBookDetail = (book) => {
     setBookToggle(false)
     setHomeBookToggle(false)
     setBookDisplay(book)
    }

    const getBooklist = () => {
         getBookApi().then((response) =>{
             console.log(response);
             setBookList(response.data.result)
        }).catch((error) => {
             console.log(error)
        })
    }

    const showCart = () => {
      setCartToggle(false);
    }

    useEffect(() => {
      getBooklist()
    },[])
      return(
        <Box /*className={classes.mainDashboard}*/ >
        <HeaderBookstore showCart={showCart}/>
       {(cartToggle) ? (<Box className={classes.mainDashboard}>
        {(homeBookToggle) ? <HomeBooks/>:<></>}
        <div className={classes.bookListAndDetailContainer}>
       {(bookToggle) ? (booklist.map((book) => <div onClick={() => handleBookDetail(book)}><Book book={book}/></div>)
         ) : ( 
       <BookDetails bookDisplay={bookDisplay}  />)}
        </div>
        </Box>):(<MyCart/>) }
        <FooterBookStore/>
        </Box>
      )
}

export default Dashboard