import './SideBar.css'
import {Link} from 'react-router-dom'
export default function SideBar() {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <Link>Link1</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}