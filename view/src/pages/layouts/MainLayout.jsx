import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import ItemsBar from "../../components/common/itemsBar/ItemsBar";
import SideBar from "../../components/common/sideBar/SideBar";
import './Layouts.css'
import { Outlet } from "react-router-dom";
export default function MainLayout(){
    return (
        <div className="mainLayout">
        <Header/>
        <ItemsBar/>
        <Outlet/>
        <SideBar/>
        <Footer/>
        </div>
    )
}