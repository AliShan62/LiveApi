import React from 'react'
import {AppBar,Toolbar,Typography} from "@mui/material"
import MovieIcon from '@mui/icons-material/Movie';
import CustomButton from './CustomButton';
const Header = () => {
  return (
    <AppBar style={{background:"rgb(29,69,107)"}}>
        <Toolbar>
            <MovieIcon />
            <Typography style={{fontSize: "25px", textAlign: "center" }} >
                Movies App
            </Typography>
            <CustomButton />
        </Toolbar>
    </AppBar>
  )
}

export default Header;