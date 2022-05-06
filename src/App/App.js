import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import StickyHeader from "../StickyHeader/StickyHeader";
import OrderMessage from "../OrderMessage/OrderMessage";
import Work from "../Work/Work";
import Shop from "../Shop/Shop";
import Image from "../Image/Image";
import SiteFooter from "../SiteFooter/SiteFooter";

import "./App.css";

const App = () => {
  const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);

  return (
    <div className="app">
      <StickyHeader setStickyHeaderHeight={setStickyHeaderHeight} />
      <main style={{ paddingTop: `calc(${stickyHeaderHeight}px + 2em)` }}>
        <OrderMessage />
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
