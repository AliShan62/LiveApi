import mongoose from "mongoose";

const movieSchema=mongoose.Schema({
    title:{
        type:String
    },
    year:{
        type:String
    },
    genres:[{
        type:String
    }],
    ratings:[{type:Number}],
    poster:{
        type:String
    },
    contentRating:{
        type:String
    },
    duration:{
        type:String
    },
    releaseDate:{
        type:String
    },
    averageRating:{type:Number},
    originalTitle:{ type:String},
    storyline:{ type:String},
    actors:[{ type:String}],
    imdbRating:{type:Number},
    posterurl:{ type:String}

})

const Movies=mongoose.model("movie",movieSchema);
export default Movies;