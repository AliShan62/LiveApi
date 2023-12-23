import React from 'react'
import MoviesList from './MoviesList';
import FilterSort from './FilterSort';
import FilterByGenres from './FilterByGenres';

const Home = ({searchInput}) => {
  return (
    <div style={{marginTop:"75px"}}>

      <MoviesList searchInput={searchInput} />
    </div>
  )
}

export default Home;