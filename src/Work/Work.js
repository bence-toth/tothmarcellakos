import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

import "./Work.css";

const Work = () => {
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
      {categories.map((category) => (
        <section className="imageCategory" key={category.folder}>
          <h2>{category.name}</h2>
          <div className="images">
            {category.images.map((image) => (
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

export default Work;
