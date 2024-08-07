import { useDispatch, useSelector } from 'react-redux'
import './SideBar.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { fetchCategories } from '../../../redux/actions/categoryActions';
export default function SideBar() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    },[dispatch])
    const {categories, loading, error} = useSelector((state) => state.categories)
    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
    if(error){
        return (
            <h1>Error: {error}</h1>
        )
    }
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <Link to='/category'>All</Link>
                    </li>
                </ul>
                {categories.data.map((category) => (    
                <ul>
                    <li>
                        <Link to={`/category/${category.name}`}>{category.name}</Link>
                    </li>
                </ul>
                ))}
            </nav>
        </aside>
    )
}