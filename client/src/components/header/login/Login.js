import React, { useState } from 'react'
import { Box, Typography, styled } from '@mui/material';
import axios from 'axios';
const Container = styled(Box)`
   margin:10%;
   text-align:center;
   width:auto;
   height:auto;
`;

const InnerContainer = styled(Box)`
width:auto;
height:auto;
border-radius:10px;
`;
const DivBox = styled(Box)`
  padding:3px;
`;
const StyledButton = styled("button")({
    padding: "4px",
    borderRadius: "5px",
    border: "none",
    fontSize: "medium"
})
const Input = styled("input")({
    padding: "4px",
    borderRadius: "5px",
    fontSize: "medium"
})

const init = {
    email: "",
    password: ""
}
const base_url="http://localhost:8000"
const Login = ({  setLoginSignUp}) => {
    const [login, setLogin] = useState(init);
    const [error, setError] = useState({color:"red",visibility:"hidden"});
    const [message, setMessage] = useState("");
    const inputHandler = (e) => {
        setError({color:"red",visibility:"hidden"})
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    const submitHandler =async (e) => {
        try{
            e.preventDefault();
            const response=await axios.post(`${base_url}/login`,login);
            if(response.data.error){
                setError({color:"red",visibility:"visible"})
                  setMessage(response.data.error)
               }else{
                //setLoginSignUp(true)
                
        
               }

        }catch(e){

        }
      
        console.log(login)

    }
    return (
        <Container>
            <InnerContainer>
                <h3 style={{ color: "white" }}>Login</h3>
                <form onSubmit={submitHandler}>
                    <DivBox>
                        <Input placeholder='Email' name='email' type='email' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <Input placeholder='Password' name='password' type='password' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <StyledButton >login</StyledButton>
                        <Typography style={{ color: "white" }} >
                            Dont have an account ? please <span  onClick={()=>{setLoginSignUp(false)}} style={{ cursor: 'pointer' }}>Signup</span>
                        </Typography>
                    </DivBox>
                    <span style={error}>
                        {`Error:${message}`}
                    </span>
                </form>
            </InnerContainer>

        </Container>
    )
}

export default Login;