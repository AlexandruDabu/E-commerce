import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_BY_ID_FAILURE, FETCH_PRODUCTS_BY_ID_REQUEST, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_BY_REGEX_REQUEST, FETCH_PRODUCTS_BY_REGEX_SUCCESS, FETCH_PRODUCTS_BY_REGEX_FAILURE } from "./actionsTypes"
export const fetchProducts = (categoryName) => async(dispatch) => {
    dispatch({type: FETCH_PRODUCTS_REQUEST});
    try{
        let url = 'http://localhost:3000/products';
        if(categoryName){
            url+= `/category/${categoryName}`
        }
        const response = await fetch(url);
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

export const fetchProductById = (id) => async(dispatch) => {
    dispatch({type: FETCH_PRODUCTS_BY_ID_REQUEST});
    try{
        const response = await fetch(`http://localhost:3000/products/${id}`)
        const data = await response.json();
        console.log(data);
        dispatch({
            type:FETCH_PRODUCTS_BY_ID_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({
            type:FETCH_PRODUCTS_BY_ID_FAILURE,
            payload: err.message
        })
    }
}

export const fetchProductsByRegex = (searchTerm) => async(dispatch) => {
    dispatch({type: FETCH_PRODUCTS_BY_REGEX_REQUEST});
    try{
        const response = await fetch(`http://localhost:3000/products?search=${searchTerm}`)
        const data = await response.json();
        dispatch({
            type: FETCH_PRODUCTS_BY_REGEX_SUCCESS,
            payload: data
        })
    }catch(err) {
        dispatch({
            type: FETCH_PRODUCTS_BY_REGEX_FAILURE,
            payload: err.message
        })
    }
}