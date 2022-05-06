import { useState, useEffect } from "react";
import classNames from "classnames";

import "./SiteHeader.css";

import Header from "./header.jpg";
import Signature from "./signature.png";

const SiteHeader = () => {
  const [isScrollPositionOnTop, setIsScrollPositionOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollPositionOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames("siteHeader", {
        small: !isScrollPositionOnTop,
      })}
      style={{
        backgroundImage: `url(${Header})`,
      }}
    >
      <img src={Signature} alt="Tóth Marcell Ákos" />
    </header>
  );
};

export default SiteHeader;
