import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../actions/actionsTypes";

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case REGISTER_USER:
            return{
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_USER:
            return{
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGOUT_USER:
            return{
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
}
export default authReducer