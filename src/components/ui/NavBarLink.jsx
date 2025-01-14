import { Link } from 'react-router-dom';

const NavBarLink = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/" className="nav-link active fw-semibold">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link fw-semibold">Shop</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link fw-semibold" href="#!">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link fw-semibold" href="#!">Contact</a>
      </li>
    </ul>
  );
};

export default NavBarLink;
