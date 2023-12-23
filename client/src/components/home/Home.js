import React from 'react'
import MoviesList from './MoviesList';

const Home = ({searchInput}) => {
  return (
    <div style={{marginTop:"75px"}}>
      <MoviesList searchInput={searchInput} />
    </div>
  )
}

export default Home;