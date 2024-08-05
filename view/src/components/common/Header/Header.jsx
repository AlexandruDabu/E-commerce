import { useEffect, useState } from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import { logoutUser } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
export default function Header() {
    const [token, setToken] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        // Retrieve token from localStorage when the component mounts
        const storedToken = localStorage.getItem('authToken');
        setToken(storedToken);
    }, []);
    const handleLogout =() =>{
        dispatch(logoutUser());
    }
    return (
        <>
            <header>
                <div>
                    <h1>logo</h1>
                </div>
                <div>
                    <h1>searchBar</h1>
                </div>
                <div className="dropdown-menu">
                    <button className="dropdown-btn">My account</button>
                        <div className="dropdown-content">
                            {token ? (
                                <>
                                <Link to='/' onClick={handleLogout}>Logout</Link>
                                </>
                                ) : (
                                <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                                </>
                            )}
                     </div>
                </div>
            </header>
        </>
    )
}