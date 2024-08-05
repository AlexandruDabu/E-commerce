import './CardProduct.css'
export default function CardProducts({product}) {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image_url} alt={product.name} />
            </div>
        <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
        <div className="product-price">
          <span>${product.price}</span>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    )
}