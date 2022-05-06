import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import StickyHeader from "../StickyHeader/StickyHeader";
import Work from "../Work/Work";
import Shop from "../Shop/Shop";
import Image from "../Image/Image";
import SiteFooter from "../SiteFooter/SiteFooter";

import "./App.css";

const App = () => {
  // TODO: Rename picture
  // TODO: Add political descriptions
  // TODO: Add cart image
  // TODO: Furry friends kép
  // TODO: Highlight selected menu item

  const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);
  const [orderState, setOrderState] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get("cancelled") === "true") {
      setOrderState("cancelled");
    } else if (urlParams.get("fulfilled") === "true") {
      setOrderState("fulfilled");
    } else {
      setOrderState(null);
    }
  }, [location.search]);

  return (
    <div className="app">
      <StickyHeader setStickyHeaderHeight={setStickyHeaderHeight} />
      <main style={{ paddingTop: `calc(${stickyHeaderHeight}px + 2em)` }}>
        {orderState === "cancelled" && (
          <div className="error">
            Your order was cancelled. If this was not intentional, maybe try
            again.
          </div>
        )}
        {orderState === "fulfilled" && (
          <div className="notice">
            Your order was completed. Thank you so much for supporting my work.
            I'll reach out to you shorty.
          </div>
        )}
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/works/:category/:image" element={<Image />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<div>About page will come here</div>} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
