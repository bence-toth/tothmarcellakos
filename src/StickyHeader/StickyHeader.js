import { useCallback, useRef, useEffect, useState } from "react";
import classNames from "classnames";

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

  const [isScrollPositionOnTop, setIsScrollPositionOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollPositionOnTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="stickyHeader" ref={stickyHeaderCallbackRef}>
      <SocialNavigation />
      <SiteHeader />
      <MainNavigation />
      <div
        className={classNames("shadow", {
          visible: !isScrollPositionOnTop,
        })}
      />
    </div>
  );
};

export default StickyHeader;
