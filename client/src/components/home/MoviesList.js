import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../redux/action/action';
import MoviesCard from './MoviesCard';
import { Box } from '@mui/material';
import FilterSort from './FilterSort';
import FilterByGenres from './FilterByGenres';
import Filter from './Filter';
const MoviesList = ({ searchInput }) => {
    const [sort, setSort] = useState("");
    const [genres, setGenres] = useState("");
    const { movies } = useSelector((state) => state.getAllMoviesReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    //console.log(sort,genres)
    return (
        <>
            <Box style={{ display: "flex", justifyContent: "space-around" }}>
                <Box>
                    <h1 style={{ display: "flex" }}>
                        Sorted By Rating/Year:  <FilterSort sort={sort} setSort={setSort} />
                    </h1>

                </Box>
                <Box>
                    <h1 style={{ display: "flex" }} >
                        Filter By:<FilterByGenres genres={genres} setGenres={setGenres} />
                    </h1>

                </Box>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", padding: "20px" }} >

                {

                    sort.length == 0 && genres.length == 0 ? (
                        <>

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
                        </>

                    ) : (
                        <Filter movies={movies} sort={sort} genres={genres} />
                    )

                }
            </Box>
        </>
    )
}

export default MoviesList;