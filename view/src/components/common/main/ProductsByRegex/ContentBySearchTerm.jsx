import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchProductsByRegex } from "../../../../redux/actions/productActions";
import CardProducts from "../../../features/CardProduct";

export default function ContentBySearchTerm() {
    const location = useLocation();
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search') || '';
    useEffect(() => {
        dispatch(fetchProductsByRegex(searchTerm));
    },[dispatch,searchTerm])
    let {productsByRegex, loading, error} = useSelector((state) => state.products)
    if(loading){    
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error: {error}</h1>
    }
    if (!productsByRegex || productsByRegex.length === 0) {
        return <h1>No products found.</h1>;
    }
    return (
        <main>
            {productsByRegex.data.map((product) => (
            <CardProducts key={product.id} product={product}/>
            ))}
        </main>
    )
}