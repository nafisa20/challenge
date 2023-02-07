import { useState, useEffect } from "react";
import { capitaliseString } from "./ProductList";

export default function ProductList({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  return (
    <label>
      Filter by category{" "}
      <select
        value={selectedCategory ?? "all"}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {capitaliseString(category.replace("-", " "))}
          </option>
        ))}
      </select>
    </label>
  );
}
