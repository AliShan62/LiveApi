import { GET_MOVIES_SUCCESS,GET_MOVIES_FAIL } from "../constant/constant";

export const getAllMoviesReducer = (state = { movies: [] }, action) => {

    switch (action.type) {
       
        case GET_MOVIES_SUCCESS:
            return {
                movies: action.payload
            }
        case GET_MOVIES_FAIL:
            return {
                error: action.payload
            }
        default:
            return state;

    }

}