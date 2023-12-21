import React, { useState } from 'react'
import { Box, Typography, styled } from '@mui/material';
import axios from  'axios'
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
    name:"",
    email: "",
    password: "",
    cpassword:""
}

const base_url="http://localhost:8000"
const Signup = ({setLoginSignUp}) => {
    const [login, setLogin] = useState(init);
    const [error, setError] = useState({color:"red",visibility:"hidden"});
    const [message, setMessage] = useState("");
    const inputHandler = (e) => {
        setError({color:"red",visibility:"hidden"})
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    const submitHandler =async (e) => {
         e.preventDefault();
        // console.log(login)

        try{
       const response=await axios.post(`${base_url}/signup`,login);
             
       console.log(response.data)
       if(response.data.error){
        setError({color:"red",visibility:"visible"})
          setMessage(response.data.error)
       }else{
        setLoginSignUp(true)

       }
       
        }catch(e){

        }
    }
    return (
        <Container>
            <InnerContainer>
                <h3 style={{ color: "white" }}>SignUp</h3>
                <form onSubmit={submitHandler}>
                    <DivBox>
                        <Input placeholder='Name' name='name' type='text' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <Input placeholder='Email' name='email' type='email' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <Input placeholder='Password' name='password' type='password' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <Input placeholder='Confirm Password' name='cpassword' type='password' onChange={inputHandler} />
                    </DivBox>
                    <DivBox>
                        <StyledButton >SignUp</StyledButton>
                        <Typography style={{ color: "white" }} >
                            Already have an account ? please <span onClick={()=>{setLoginSignUp(true)}} style={{ cursor: 'pointer' }}>Login</span>
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

export default Signup;