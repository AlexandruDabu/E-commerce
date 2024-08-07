import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../../../redux/actions/productActions";
import { useParams } from "react-router-dom";
import './Product.css';

export default function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    let {product, loading, error } = useSelector((state) => state.products);
    const handleIncreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Handle the logic for adding the product to the cart
        console.log(`Added ${quantity} of ${product.data.name} to cart.`);
    };

    const handleAddToFavorites = () => {
        // Handle the logic for adding the product to the favorites
        console.log(`${product.data.name} added to favorites.`);
    };
    
    const handleCommentChange =(e) =>{
        setComment(e.target.value);
    }

    if (loading) {
        return (
            <main className="product-page">
                <h1>Loading...</h1>
            </main>
        );
    }

    if (error) {
        return (
            <main className="product-page">
                <h1>Error: {error}</h1>
            </main>
        );
    }
    if (!product || product.length === 0) {
        return <h1>No products found.</h1>;
    }
    return (
        <main className="product-page">
            <div className="product-image">
                <img src='' alt={product.data.name} />
            </div>
            <div className="product-details">
                <h1 className="product-name">{product.data.name}</h1>
                <p className="product-description">{product.data.description}</p>
                <p className="product-price">${product.data.price}</p>
                <p className="product-stock">
                    {product.data.stock > 0 ? `In Stock: ${product.data.stock}` : "Out of Stock"}
                </p>
                <div className="quantity-controls">
                    <button onClick={handleDecreaseQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncreaseQuantity}>+</button>
                </div>
                <button 
                    className="add-to-cart-btn" 
                    onClick={handleAddToCart} 
                    disabled={product.data.stock === 0}
                >
                    Add to Cart
                </button>
                <button className="add-to-favorites-btn" onClick={handleAddToFavorites}>
                    Add to Favorites
                </button>
            </div>
            <div className="product-reviews">
                <h2>Customer Reviews</h2>
                {/* {products.data.reviews.length > 0 ? (
                    products.data.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <p className="review-author">By {review.author}</p>
                            <p className="review-content">{review.content}</p>
                        </div>
                    ))
                ) : ( */}
                    <p>No reviews yet. Be the first to review this product!</p>
            </div>
             <div className="product-comments">
                <h2>Leave a Comment</h2>
                <textarea 
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Write your comment here..."
                />
                <div className="end-button">
                    <button className="submit-comment-btn" >
                        Submit Comment
                    </button>
                </div>
            </div>
        </main>
    );
}
