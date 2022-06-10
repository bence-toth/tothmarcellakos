import { useCallback, useRef, useEffect, useState } from "react";
import classNames from "classnames";

import TopNavigation from "../TopNavigation/TopNavigation";
import SiteHeader from "../SiteHeader/SiteHeader";
import MainNavigation from "../MainNavigation/MainNavigation";

import "./StickyHeader.css";

const StickyHeader = ({
  setStickyHeaderHeight,
  toggleDarkMode,
  isDarkMode,
}) => {
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
    <div className="stickyHeader" ref={stickyHeaderCallbackRef}>
      <TopNavigation toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
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
