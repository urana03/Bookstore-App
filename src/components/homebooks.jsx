import React from 'react';
import { makeStyles } from '@mui/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Box, FormControl } from '@mui/material';

const useStyles = makeStyles({
    bookSortDash:{
        display:'flex',
        width:'67vw',
        height:'7vh',
        marginTop:'4%',
        justifyContent:'space-between',
        alignItems:'center'
       },
       dropHome:{
         display:'flex',
         width:'8%'
       },
       bookhomeText:{
          fontSize:26,
          fontWeight:400
       }
})

function HomeBooks(){
    const classes = useStyles();
        return(
            <Box className={classes.bookSortDash}>
        <span className={classes.bookhomeText}>Books</span>
        <FormControl sx={{m:1,width:'18%'}} size='small'>
        <InputLabel id="demo-select-small">Sort by relevance</InputLabel>
        <Select
        className={classes.dropHome}
        label="Sort by relevance"
        id="demo-select-small"
        fullWidth
        />
        </FormControl>
       </Box>
        )
}

export default HomeBooks