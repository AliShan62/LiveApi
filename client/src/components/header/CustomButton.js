import React, { useState } from 'react'
import { Button, Box, styled } from '@mui/material';
import LoginDialog from './LoginDialog';


const Wapper = styled(Box)`
  margin: 0 3% 0 auto;
`;

const LoginButton = styled(Button)`
  background:white;
  padding: 5px 15px;
`;
const CustomButton = () => {
  const [open,setOpen]=useState(false);
  return (
    <Wapper>
      <LoginButton style={{ marginRight: "5px" }} onClick={()=>{setOpen(true)}} >
        Admin User
      </LoginButton>
      <LoginButton onClick={()=>{setOpen(true)}}>
        Normal User
      </LoginButton>
      <LoginDialog  open={open} setOpen={setOpen} />
    </Wapper>
  )
}

export default CustomButton;