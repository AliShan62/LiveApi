import { GET_MOVIES_SUCCESS,GET_MOVIES_FAIL } from "../constant/constant";

export const getAllMoviesReducer = (state = { moviee: [] }, action) => {

    switch (action.type) {
        case GET_MOVIES_SUCCESS:
            return {
                movies: action.playload
            }
        case GET_MOVIES_FAIL:
            return {
                error: action.playload
            }
        default:
            return state;

    }

}