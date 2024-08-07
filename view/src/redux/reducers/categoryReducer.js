import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "../actions/actionsTypes"

const initialState = {
    loading: true,
    categories: [],
    error: ''
}

const categoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                categories: [],
                error: ''
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
                error: ''
            }
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                categories: [],
                error: action.payload
            }
        default: return state
    }
}
export default categoryReducer;