import React from 'react'
import MoviesCard from './MoviesCard'

const Filter = ({ movies, sort, genres }) => {
    const [...sortedByRating] = movies
    const [...sortedByYear] = movies
    // const [...sortedByGenres]=movies
    const sortedByGenres = movies.filter((item) => item.genres[0] == genres)
    const [...sortedByRatingGenres] = sortedByGenres
    const [...sortedByYearGenres] = sortedByGenres
    sortedByRating.sort(function (a, b) {
        return Number(a.imdbRating) - Number(b.imdbRating)
    })
    sortedByYear.sort(function (a, b) {
        return Number(a.year) - Number(b.year)
    })

    sortedByYearGenres.sort(function (a, b) {
        return Number(a.imdbRating) - Number(b.imdbRating)
    })
    sortedByRatingGenres.sort(function (a, b) {
        return Number(a.year) - Number(b.year)
    })



    return (

        <>
            {
                sort && genres ? (
                    <>
                        {
                            sort == "year" && sortedByYearGenres.map((item) => <MoviesCard item={item} key={item._id} />)
                        }
                        {
                            sort == "rating" && sortedByRatingGenres.map((item) => <MoviesCard item={item} key={item._id} />)
                        }

                    </>
                ) : (
                    <>
                        {
                            sort == "year" && sortedByYear.map((item) => <MoviesCard item={item} key={item._id} />)
                        }
                        {
                            sort == "rating" && sortedByRating.map((item) => <MoviesCard item={item} key={item._id} />)
                        }

                        {
                            genres && sortedByGenres.map((item) => <MoviesCard item={item} key={item._id} />)
                        }

                    </>
                )
            }

        </>
    )
}

export default Filter