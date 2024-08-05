import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../../features/CardProduct'
import './Content.css'
import { useEffect } from 'react';
import { fetchProducts } from '../../../redux/actions/productActions';
export default function Content(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch])
    const {products, loading, error} = useSelector((state) => state.products)
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error: {error}</h1>
    }
    return (
        <main>
            {products.data.map((product) => (
            <CardProducts key={product.id} product={product}/>
            ))}
        </main>
    )

}