import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div className="App">
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={`/images/products/${image}`}
              style={{ height: "200px" }}
              alt=""
            />
          ))}
          <div>
            <button
              onClick={() => {
                window.location.href = `http://localhost:3001/checkout?id=${product.id}`;
              }}
            >
              Buy this
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
