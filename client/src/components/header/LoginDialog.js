import React, { useState } from 'react'
import { Card, Dialog } from '@mui/material';
import Login from './login/Login';
import Signup from './login/SignUp';
const LoginDialog = ({open,setOpen}) => {
    const [loginSignUp,setLoginSignUp]=useState(true);
  return (
    <Dialog  open={open} onClose={()=>{setOpen(false)}} >
        <Card style={{background:"rgb(29,69,107)"}}>
            {
                loginSignUp ?(<Login setLoginSignUp={setLoginSignUp} setOpen={setOpen} />):( <Signup setLoginSignUp={setLoginSignUp}   />)
            }
        
       
        </Card>
      
    </Dialog>
   
  )
}

export default LoginDialog;