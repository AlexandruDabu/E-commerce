import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer
})

export default rootReducer;