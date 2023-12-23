import React from 'react'
import { Card, Typography, Box } from '@mui/material'
const MoviesCard = ({ item }) => {
    return (
        <Card style={{ width: "200px", height: "auto", margin: "20px" }} >
            <Box textAlign="center" style={{ padding: "25px 15px", marginButtom: "10px", }} >
                <img src={item.posterurl} style={{ width: "auto", height: "150px" }} />
                <Typography style={{fontSize:"14px",marginTop:"5px",fontWeight: 600, color: "#212121" }} >
                    {item.title}
                </Typography >
                <Typography  style={{fontSize:"14px",marginTop:"5px",color: "green"}} >
                    Release Date:  {item.releaseDate}
                </Typography>
                <Typography  style={{fontSize:"14px",marginTop:"5px",color: "green"}} >
                    Genres: {item.genres}
                </Typography>
                <Typography style={{fontSize:"14px",marginTop:"5px",color: "green"}} >
                    IMDB Rating: {item.imdbRating}
                </Typography>
                <Typography style={{fontSize:"14px",marginTop:"5px",color: "#212121", opacity: ".6"}} >
                    Year:{item.year}
                </Typography>
            </Box>
        </Card>
    )
}

export default MoviesCard