import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [orderState, setOrderState] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => response.json())
      .then((result) =>
        setProducts(result.map((p) => ({ ...p, selectedVariant: 0 })))
      );
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("cancelled") === "true") {
      setOrderState("cancelled");
    } else if (urlParams.get("fulfilled") === "true") {
      setOrderState("fulfilled");
    }
  }, []);

  return (
    <div className="app">
      {orderState === "cancelled" && (
        <div className="error">
          Your order was cancelled. Maybe something went wrong. Or you decided
          not to buy. Asshole.
        </div>
      )}
      {orderState === "fulfilled" && (
        <div className="notice">
          Your order was completed. We'll reach out to you shorty.
        </div>
      )}
      <header>
        <h1>Buy stuff from me, I'm poor</h1>
      </header>
      <main>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <h2 className="name">{product.name}</h2>
              <p className="description">{product.description}</p>
              <div className="images">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={`${process.env.REACT_APP_PUBLIC_URL}/images/products/${image}`}
                    style={{ height: "200px" }}
                    alt=""
                  />
                ))}
              </div>
              <div className="variants">
                <label>Variants:</label>
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
              <div className="price">
                {product.variants[product.selectedVariant].price} HUF
              </div>
              <div>
                <button
                  className="checkout"
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
      </main>
      <footer>Copyright and all.</footer>
    </div>
  );
};

export default App;
