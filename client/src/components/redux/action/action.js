import axios from 'axios'
import { GET_MOVIES_FAIL,GET_MOVIES_SUCCESS } from '../constant/constant';

const base_url="http://localhost:8000"

export const getMovies=()=>async(dispatch)=>{
    try{

        const {data}=await axios.get(`${base_url}/getmovies`);
        dispatch({type:GET_MOVIES_SUCCESS,payload:data})

    }catch(e){
        dispatch({type:GET_MOVIES_Fail,payload:e.response})
    }

}