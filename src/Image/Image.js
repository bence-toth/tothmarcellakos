import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Image.css";

const Image = () => {
  const [areCategoriesLoading, setAreCategoriesLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => response.json())
      .then((result) => {
        setAreCategoriesLoading(false);
        setCategories(result.map((p) => ({ ...p, selectedVariant: 0 })));
      });
  }, []);

  const params = useParams();

  const image =
    !areCategoriesLoading &&
    categories
      .find((category) => category.folder === params.category)
      .images.find((image) => image.id === params.image);

  if (!image) {
    return null;
  }

  console.log(image);

  return (
    <>
      <h1>{image.name}</h1>
      <img
        src={`${process.env.REACT_APP_PUBLIC_URL}/images/${params.category}/${image.id}/${image.thumbnail}`}
        alt={image.name}
      />
      <p>{image.description}</p>
      <div className="images">
        {image.mockups.map((mockup, mockupIndex) => (
          <img
            key={mockupIndex}
            src={`${process.env.REACT_APP_PUBLIC_URL}/images/${params.category}/${image.id}/${mockup}`}
            style={{ height: "200px" }}
            alt=""
          />
        ))}
      </div>
      <div className="variants">
        <label>Variants:</label>
        <select>
          {image.variants.map((variant, index) => (
            <option key={index} value={index}>
              {variant.name} ({variant.size})
            </option>
          ))}
        </select>
      </div>
      <div className="price">3000 HUF</div>
      <div>
        <button
          className="checkout"
          onClick={() => {
            window.location.href = "#";
            // `${process.env.REACT_APP_API_URL}/checkout?id=${product.id}&variant=${product.selectedVariant}`;
          }}
        >
          Buy this
        </button>
      </div>
    </>
  );
};

export default Image;
