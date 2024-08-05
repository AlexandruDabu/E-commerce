import './ItemsBar.css'
import {Link} from 'react-router-dom'
export default function ItemsBar(){
    return(
        <div className='itemsBar'>
        <nav>
            <ul className='ul-itemsBar'>
                <li className='li-itemsBar'>
                    <Link to='/'>Products</Link>
                </li>
                <li className='li-itemsBar'>
                    <Link to='/'>What's New</Link>
                </li>
                <li className='li-itemsBar'>
                    <Link to='/'>Best Sellers</Link>
                </li>
            </ul>
        </nav>
        <nav>
            <ul className='ul-contact'>
                <li className='li-itemsBar'>
                    <Link to='/contact'>Get help!</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}