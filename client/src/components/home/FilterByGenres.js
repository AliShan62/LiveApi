import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const FilterByGenres = ({genres,setGenres}) => {
    const changeHandle=(e)=>{
            setGenres(e.target.value)
    }
    return (
        <div>
            <FormControl  sx={{minWidth:80}} >
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genres}
                    label="genres"
                    onChange={changeHandle}
                >   
                 <MenuItem value="" >None</MenuItem>
                    <MenuItem value={"Crime"}>Crime</MenuItem>
                    <MenuItem value={"Action"}>Action</MenuItem>
                    <MenuItem value={"Western"}>Western</MenuItem>
                    <MenuItem value={"Drama"}>Drama</MenuItem>
                    <MenuItem value={"Biography"}>Biography</MenuItem>
                    <MenuItem value={"Advanture"}>Advanture</MenuItem>
                 
                </Select>
            </FormControl>
        </div>
    )
}

export default FilterByGenres;