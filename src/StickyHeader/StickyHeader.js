import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";

import SocialNavigation from "../SocialNavigation/SocialNavigation";
import SiteHeader from "../SiteHeader/SiteHeader";
import MainNavigation from "../MainNavigation/MainNavigation";

import "./StickyHeader.css";

const StickyHeader = ({ setStickyHeaderHeight }) => {
  const stickyHeaderResizeObserver = useRef(
    new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;

          setStickyHeaderHeight(contentBoxSize.blockSize);
        }
      }
    })
  );

  const stickyHeaderCallbackRef = useCallback((node) => {
    if (stickyHeaderResizeObserver.current) {
      stickyHeaderResizeObserver.current.observe(node);
    }
  }, []);

  return (
    <div className="stickyHeader" ref={stickyHeaderCallbackRef}>
      <SocialNavigation />
      <SiteHeader />
      <MainNavigation />
    </div>
  );
};

export default StickyHeader;