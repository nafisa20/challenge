import { useState, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1 className="title">Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>£{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
