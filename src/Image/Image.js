import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Image.css";

const formatVariantCaption = (variant) => {
  const variantName = `${variant.name
    .charAt(0)
    .toUpperCase()}${variant.name.slice(1)}`;
  const variantSize = variant.size
    .split("x")
    .map((size) => `${size}cm`)
    .join(" × ");
  return `${variantName} (${variantSize})`;
};

const Image = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [image, setImage] = useState();
  const [selectedVariant, setSelectedVariant] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => response.json())
      .then((result) => {
        setIsImageLoading(false);
        const imageData = result
          .find((category) => category.folder === params.category)
          ?.images?.find((image) => image.id === params.image);
        setImage(imageData);
        setSelectedVariant(imageData?.variants?.[0]?.name ?? null);
      });
  }, [params.category, params.image]);

  if (isImageLoading || !image) {
    return null;
  }

  return (
    <div className="imagePage">
      <div className="columns">
        <div className="heading">
          <h1>{image.name}</h1>
        </div>
        <div className="info">
          {image.description &&
            image.description
              .split("|")
              .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {image.variants && (
            <>
              <p>You can buy a print of this picture.</p>
              <div className="variants">
                <label>Select size</label>
                <select
                  onChange={(event) => {
                    setSelectedVariant(event.target.value);
                  }}
                >
                  {image.variants.map((variant, index) => (
                    <option key={index} value={variant.name}>
                      {formatVariantCaption(variant)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pay">
                <button
                  className="checkout"
                  onClick={() => {
                    window.location.href = `${process.env.REACT_APP_API_URL}/checkout?id=${image.id}&variant=${selectedVariant}`;
                  }}
                >
                  Buy this
                </button>
                <div className="price">
                  {image.variants
                    .find((variant) => variant.name === selectedVariant)
                    .price.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  HUF
                </div>
              </div>
            </>
          )}
        </div>
        <div className="preview">
          <img
            className="mainImage"
            src={`${process.env.REACT_APP_PUBLIC_URL}/images/${params.category}/${image.id}/${image.thumbnail}`}
            alt={image.name}
          />
        </div>
        {image.mockups && (
          <div className="mockups">
            {image.mockups.map((mockup, mockupIndex) => (
              <img
                key={mockupIndex}
                src={`${process.env.REACT_APP_PUBLIC_URL}/images/${params.category}/${image.id}/${mockup}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
