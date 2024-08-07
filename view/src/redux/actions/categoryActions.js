import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "./actionsTypes"

export const fetchCategories = () => async (dispatch) =>{
    dispatch({type: FETCH_CATEGORIES_REQUEST})
    try{
        const response = await fetch('http://localhost:3000/category')
        const data = await response.json();
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: data
        });
    }catch(err){
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: err
        })
    }
}