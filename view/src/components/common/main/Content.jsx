import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../../features/CardProduct'
import './Content.css'
import { useEffect } from 'react';
import { fetchProducts } from '../../../redux/actions/productActions';
import { useParams } from 'react-router-dom';
export default function Content(){
    const { categoryName } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(categoryName));
    },[dispatch, categoryName])
    let {products, loading, error} = useSelector((state) => state.products)
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error: {error}</h1>
    }
    if (!products || products.length === 0) {
        return <h1>No products found.</h1>;
    }
    return (
        <main>
            {products.data.map((product) => (
            <CardProducts key={product.id} product={product}/>
            ))}
        </main>
    )

}