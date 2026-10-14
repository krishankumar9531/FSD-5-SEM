const Product = ({ products, onAddToCart }) => {
    return (
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
            {products.map((product) =>
                <div key={product.id} style={{border:"2px solid black", textAlign:"center"}}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h1>{product.title}</h1>
                    <h1>{product.price}$</h1>
                    <button type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
                </div>)}
        </div>
    )
}

export default Product
