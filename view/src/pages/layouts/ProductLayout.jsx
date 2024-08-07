import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import ItemsBar from "../../components/common/itemsBar/ItemsBar";
import './Layouts.css'
export default function ProductLayout() {
     return(
        <div className="productLayout">
            <Header/>
            <ItemsBar/>
            <Outlet/>
            <Footer/>
        </div>
     )
}