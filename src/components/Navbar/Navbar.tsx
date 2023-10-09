import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="left-items">
        <ul>
          <Link className="link" to="/">
            Home
          </Link>
        </ul>
      </div>
      <div className="right-items">
        <ul>
          <Link className="link" to="/restaurants">
            Restaurants
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
