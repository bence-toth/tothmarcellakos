import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Shop.css";

const Shop = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => response.json())
      .then((result) =>
        setCategories(result.map((p) => ({ ...p, selectedVariant: 0 })))
      );
  }, []);

  return (
    <>
      {categories
        .filter((category) =>
          category.images.some((image) => image.variants !== null)
        )
        .map((category) => (
          <section className="shopCategory" key={category.folder}>
            <h2>{category.name}</h2>
            <div className="images">
              {category.images
                .filter((image) => image.variants !== null)
                .map((image) => (
                  <Link
                    key={image.id}
                    className="image"
                    to={`/works/${category.folder}/${image.id}/`}
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/images/${category.folder}/${image.id}/${image.thumbnail})`,
                    }}
                  >
                    <div className="overlay">
                      <span>{image.name}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}
    </>
  );
};

export default Shop;
