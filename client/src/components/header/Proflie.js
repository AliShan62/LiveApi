import React, { useState } from 'react'
import { Box, Typography, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Proflie = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);


    }
    const handleLogout = () => {
        setAccount({});
        navigate("/")
    }
    return (
        <div>
            <Box style={{ display: "flex", textAlign: "center" }} >
                <Typography style={{ paddingRight: "10px" }} onClick={handleClick} >
                    {account.email}
                </Typography>
                <Typography>
                    {account.userType}
                </Typography>
            </Box>
            <Menu anchorEl={open}
                open={open}
                onClose={handleClose} >
                <MenuItem onClose={handleClose} >
                    <Typography onClick={handleLogout} >LogLout</Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Proflie;