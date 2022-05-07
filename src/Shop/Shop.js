import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

import "./Shop.css";

const Shop = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => response.json())
      .then(setCategories);
  }, []);

  if (categories.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <p className="shopLead">
        You can buy prints of these pictures. Thank you for supporting my work.
      </p>
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
                      backgroundImage: `url(/images/${category.folder}/${image.id}/${image.thumbnail})`,
                      ...(image.backgroundPosition && {
                        backgroundPosition: image.backgroundPosition,
                      }),
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
