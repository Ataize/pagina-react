import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <a href="#" className="logo" aria-label="Logo">
        <img src={logo} alt="Logo da Porsche" />
      </a>

      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/models">Models</Link>
          </li>
          <li>
            <Link to="/discover">Descubra</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
