import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const FilterSort = ({sort,setSort}) => {
    const changeHandle=(e)=>{
        setSort(e.target.value)
    }
    return (
        <div>
            <FormControl sx={{minWidth:80}} >
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="sort"
                    onChange={changeHandle}
                >   
                 <MenuItem  value="" >None</MenuItem>
                    <MenuItem value={"rating"}>Rating</MenuItem>
                    <MenuItem value={"year"}>Year</MenuItem>
                 
                </Select>
            </FormControl>
        </div>
    )
}

export default FilterSort