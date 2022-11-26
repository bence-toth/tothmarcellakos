import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

import "./MainNavigation.css";

const MainNavigation = () => {
  const location = useLocation();

  return (
    <nav className="mainNavigation">
      <ul>
        <li>
          <Link
            to="/"
            className={classNames({ selected: location.pathname === "/" })}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={classNames({ selected: location.pathname === "/about" })}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
