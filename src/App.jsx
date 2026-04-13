import "./styles.css";
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import Pagination from "./Pagination";

export default function App() {
  const [products, setProducts] = useState([]);
  const [current_page, setCurrent_page] = useState(0);

  const PAGE_SIZE = 10;
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  const go_to_next_page = () => {
    setCurrent_page((prev) => prev + 1);
  };

  const go_to_previous_page = () => {
    setCurrent_page((prev) => prev - 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const total_products = products.length;
  const No_of_pages = Math.ceil(total_products / PAGE_SIZE);
  const start = current_page * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handleClick = (n) => {
    setCurrent_page(n);
  };

  return !products.length ? (
    <h1>NO PRODUCTS FOUND</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>

      <div className="product-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>

      <Pagination
        go_to_next_page={go_to_next_page}
        go_to_previous_page={go_to_previous_page}
        handleClick={handleClick}
        No_of_pages={No_of_pages}
        current_page={current_page}
      />
    </div>
  );
}
