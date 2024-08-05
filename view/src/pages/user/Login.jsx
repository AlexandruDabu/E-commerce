import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!email || !password){
            setError('Please enter both email and password');
            return;
        }
        dispatch(loginUser({email: email, password: password}));
        navigate('/');
    }

    return(
        <>
        <div className="mainLogin">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {error && <p className="error-message">{error}</p>}
                <div className='loginData'>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div className='loginData'>
                    <label htmlFor="email">Password</label>
                    <input type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>
                <button className='loginButton' type='submit' disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
            </form>
        </div>
        </>
    )
}