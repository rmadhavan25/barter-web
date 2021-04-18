const ProductList = ({ products }) => {
    return (
      <div className="product-list">
        {products.map(product => (
          <div className="product-preview" key={product.productId} >
            <h2>{ product.productName }</h2>
            <p>Condition: { product.condition }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default ProductList