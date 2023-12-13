import React, { useState } from 'react'
import { Box, Typography, styled } from '@mui/material';

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
const Signup = ({setLoginSignUp}) => {
    const [login, setLogin] = useState(init);
    const inputHandler = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(login)

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
                </form>
            </InnerContainer>

        </Container>
    )
}

export default Signup;