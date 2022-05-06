import { Link } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <nav className="mainNavigation">
      <ul>
        <li>
          <Link to="/">Work</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
