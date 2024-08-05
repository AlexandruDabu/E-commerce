import { LOGIN_USER, REGISTER_USER } from "./actionsTypes";

export const loginUser = (userData) => async (dispatch) => {
    try{
        const response = await fetch('http://localhost:3000/users/login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if(!response.ok){
            throw new Error('Login failed');
        }
        const user = await response.json();
        const {token, data} = user;
        localStorage.setItem('authToken', token);
        dispatch({
            type: LOGIN_USER,
            payload: {data, token}
        });
    }catch(err){
        console.error('Login error', err);
    }
}

export const logoutUser = () => {
    localStorage.removeItem('authToken');
    return {
        type: LOGOUT_USER,
    }
}

export const registerUser = (userData) => async(dispatch) => {
    try{
        const response = await fetch('http://localhost:3000/users/register',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        });
        if(!response.ok){
            throw new Error('Register failed');
        }
        const user = await response.json();
        const {token, data} = user;
        localStorage.setItem('authToken', token);
        dispatch({
            type: REGISTER_USER,
            payload: {data, token}
        });
    }catch(err){
        console.error('Register failed', error);
    }
}