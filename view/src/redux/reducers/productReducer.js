import { FETCH_PRODUCTS_BY_ID_FAILURE, FETCH_PRODUCTS_BY_ID_REQUEST, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_BY_REGEX_FAILURE, FETCH_PRODUCTS_BY_REGEX_REQUEST, FETCH_PRODUCTS_BY_REGEX_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../actions/actionsTypes";

const initialState = {
    loading: false,
    product: null,
    productsByRegex: [],
    error: ''
};

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST:
        case FETCH_PRODUCTS_BY_ID_REQUEST:
        case FETCH_PRODUCTS_BY_REGEX_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_BY_ID_SUCCESS:
            return{
                ...state,
                loading: false,
                product: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_BY_REGEX_SUCCESS:
            return {
                ...state,
                loading: false,
                productsByRegex: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_BY_ID_FAILURE:
        case FETCH_PRODUCTS_FAILURE:
        case FETCH_PRODUCTS_BY_REGEX_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default: 
            return state;
    }
}

export default productReducer;