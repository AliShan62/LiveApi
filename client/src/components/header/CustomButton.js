import React from 'react'
import { Button,Box,styled } from '@mui/material';


const Wapper=styled(Box)`
  margin: 0 3% 0 auto;
`;

const LoginButton=styled(Button)`
  background:white;
  padding: 5px 15px;
`;
const CustomButton = () => {
  return (
    <Wapper>
        <LoginButton style={{marginRight:"5px"}}>
            Admin User
        </LoginButton>
        <LoginButton>
            Normal User
        </LoginButton>
    </Wapper>
  )
}

export default CustomButton;