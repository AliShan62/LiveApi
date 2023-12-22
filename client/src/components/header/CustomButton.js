import React, { useState,useContext } from 'react'
import { Button, Box, styled } from '@mui/material';
import LoginDialog from './LoginDialog';
import { DataContext } from '../context/DataProvider';


const Wapper = styled(Box)`
  margin: 0 3% 0 auto;
`;

const LoginButton = styled(Button)`
  background:white;
  padding: 5px 15px;
`;
const CustomButton = () => {
  const [open,setOpen]=useState(false);
  const {account,setAccount}=useContext(DataContext)
  const adminDialog=()=>{
    setAccount({...account,userType:"admin"})
    setOpen(true)
  }
  const userDialog=()=>{
    setAccount({...account,userType:"user"})
    setOpen(true)
  }
  return (
    <Wapper>
      <LoginButton style={{ marginRight: "5px" }} onClick={adminDialog} >
        Admin User
      </LoginButton>
      <LoginButton onClick={userDialog}>
        Normal User
      </LoginButton>
      <LoginDialog  open={open} setOpen={setOpen} />
    </Wapper>
  )
}

export default CustomButton;