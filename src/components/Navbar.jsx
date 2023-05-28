import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <h2>test</h2>
      </Link>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
