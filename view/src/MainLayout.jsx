import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import ItemsBar from "./components/common/itemsBar/ItemsBar";
import Content from "./components/common/main/Content";
import SideBar from "./components/common/sideBar/SideBar";
import './App.css'
export default function MainLayout(){
    return (
        <div className="mainLayout">
        <Header/>
        <ItemsBar/>
        <SideBar/>
        <Content/>
        <Footer/>
        </div>
    )
}