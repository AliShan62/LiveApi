import {createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import { getAllMoviesReducer } from "./reducer/movieReducer";


const reducer=combineReducers({
getAllMoviesReducer:getAllMoviesReducer
})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))



export default store;