import { useEffect, useState } from 'react';
import './Header.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { logoutUser } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
export default function Header() {
    const [token, setToken] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        // Retrieve token from localStorage when the component mounts
        const storedToken = localStorage.getItem('authToken');
        setToken(storedToken);
    }, []);
    
    const handleLogout =() =>{
        dispatch(logoutUser());
    }
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            navigate(`/products/results?search=${searchTerm}`)
            setSearchTerm('');
        }
    }
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="search-bar">
                    <input value={searchTerm} onChange={handleSearchChange} onKeyDown={handleKeyDown} type="text" placeholder="Search for products..." />
                    <Link className="buttonForTerm" to={`/products/results?search=${searchTerm}`} onClick={() => setSearchTerm('')}><i class="fa-solid fa-magnifying-glass"></i></Link>
                </div>
                <div className="navbar-buttons">
                    <div className="dropdown-menu">
                        <button className="dropdown-btn">My Account</button>
                        <div className="dropdown-content">
                            {token ? (
                                <Link to="/" onClick={handleLogout}>Logout</Link>
                            ) : (
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                    <button className="cart-btn">My Cart</button>
                </div>
            </header>
</>

    )
}