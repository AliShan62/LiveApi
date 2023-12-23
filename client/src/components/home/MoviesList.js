import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/action/action';
import MoviesCard from './MoviesCard';
import { Box } from '@mui/material';
const MoviesList = ({ searchInput }) => {
    const { movies } = useSelector((state) => state.getAllMoviesReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    console.log(searchInput)
    return (
        <Box style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px" }} >

            {
                // movies.map((item)=><MoviesCard item={item} key={item._id} />)
                movies.filter((val) => {
                    if (searchInput == "") {
                        return val;
                    } else if (val.title.toLowerCase().includes(searchInput.toLowerCase())) {
                        return val
                    }
                }).map((item) => <MoviesCard item={item} key={item._id} />)

            }
        </Box>
    )
}

export default MoviesList;