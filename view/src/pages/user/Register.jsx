import { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(!email || !password){
            setError('Please enter both email and password');
            return;
        }
        setError('');
        setLoading(true);
        try{
            const response = await fetch('http://localhost:3000/users/register',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({name,email,password,address,phonenumber}),
            })
            if(!response.ok){
                throw new Error('Register failed. Please check your email and password');
            }
            const data = await response.json();
            localStorage.setItem('authToken', data.token);
            navigate('/');
        }catch(err){
            setError(err.message);
        } finally{
            setLoading(false);
        }
    }

    return(
        <>
        <div className="mainLogin">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {error && <p className="error-message">{error}</p>}
                <div className='loginData'>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>
                <div className='loginData'>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div className='loginData'>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>
                <div className='loginData'>
                    <label htmlFor="address">Address</label>
                    <input type="text"
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                    required />
                </div>
                <div className='loginData'>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input type="phone"
                    id="phonenumber"
                    onChange={(e) => setPhonenumber(e.target.value)}
                    required />
                </div>
                <button className='loginButton' type='submit' disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
            </form>
        </div>
        </>
    )
}