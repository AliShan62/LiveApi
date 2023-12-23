import React from 'react'
import { InputBase, Box, styled } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';
const StyledBox = styled(Box)`
      background:#fff;
      width:38%;
      boarder-radius:2px;
      margin-left:10px;
      display:flex;
`;
const SearchBox = styled(Box)`
     color:gray;
     padding-right:5px;
     padding-top:4px;

`;
const Search = ({setSearchInput}) => {
    return (

        <StyledBox>
            <InputBase placeholder='Seach by movies name...' style={{ width: "100%", marginLeft: "20px" }} onChange={(e)=>{setSearchInput(e.target.value)}} />
            <SearchBox>
            <SearchIcon />
            </SearchBox>
        </StyledBox>

    )
}

export default Search