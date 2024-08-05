import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./actionsTypes"

export const fetchProducts = () => async(dispatch) => {
    dispatch({type: FETCH_PRODUCTS_REQUEST});
    try{
        const response = await fetch('http://localhost:3000/products')
        const data = await response.json();
        dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: data
        });
    }catch(err){
        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            payload: err.message
        })
    }
}