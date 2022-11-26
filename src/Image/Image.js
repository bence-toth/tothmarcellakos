import { useParams } from "react-router-dom";

import categories from "../images";

import "./Image.css";

const Image = () => {
  const params = useParams();

  const image = categories
    .find((category) => category.folder === params.category)
    ?.images?.find((image) => image.id === params.image);

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
        </div>
        <div className="preview">
          {image.watermark ? (
            <a
              href={`/images/${params.category}/${image.id}/${image.watermark}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="mainImage"
                src={`/images/${params.category}/${image.id}/${image.thumbnail}`}
                alt={image.name}
              />
            </a>
          ) : (
            <img
              className="mainImage"
              src={`/images/${params.category}/${image.id}/${image.thumbnail}`}
              alt={image.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Image;
