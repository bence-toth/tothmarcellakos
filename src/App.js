import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => response.json())
      .then((result) =>
        setProducts(result.map((p) => ({ ...p, selectedVariant: 0 })))
      );
  }, []);

  return (
    <div className="App">
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={`${process.env.REACT_APP_PUBLIC_URL}/images/products/${image}`}
              style={{ height: "200px" }}
              alt=""
            />
          ))}
          <div>
            <span>Variants:</span>
            <select
              onChange={(event) => {
                setProducts((previousProducts) =>
                  previousProducts.map((p) => {
                    if (p.id === product.id) {
                      return { ...p, selectedVariant: +event.target.value };
                    }
                    return p;
                  })
                );
              }}
            >
              {product.variants.map((variant, index) => (
                <option key={index} value={index}>
                  {variant.name} ({variant.size})
                </option>
              ))}
            </select>
          </div>
          <div>{product.variants[product.selectedVariant].price}</div>
          <div>
            <button
              onClick={() => {
                window.location.href = `${process.env.REACT_APP_API_URL}/checkout?id=${product.id}&variant=${product.selectedVariant}`;
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
