import { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";

export function capitaliseString(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function sortProducts(products) {
  return products.sort(function (a, b) {
    let sortOrder = "abcdefghijklmnopqrstuvwxyz-0123456789";
    let indexA = sortOrder.indexOf(a.title[0].toLowerCase());
    let indexB = sortOrder.indexOf(b.title[0].toLowerCase());

    if (indexA < indexB) {
      return -1;
    }

    if (indexA > indexB) {
      return 1;
    }

    return 0;
  });
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  useEffect(() => {
    if (selectedCategory !== "all") {
      fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    }
  }, [selectedCategory]);

  return (
    <div>
      <h1 className="title">Products</h1>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="product-list">
        {sortProducts(products).map((product) => (
          <div className="product" key={product.id}>
            <p>{capitaliseString(product.title)}</p>
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
