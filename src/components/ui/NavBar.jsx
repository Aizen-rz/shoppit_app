import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import NavBarLink from './NavBarLink';

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .navbar-show {
            transform: translateY(0);
            transition: transform 0.3s ease-in-out;
          }
          .navbar-hide {
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
          }
        `}
      </style>

      <nav
        className={`navbar navbar-expand-lg ${visible ? 'navbar-show' : 'navbar-hide'}`}
        style={{
          backgroundColor: 'lightgrey',
          position: 'sticky',
          top: 0,
          zIndex: 1030,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="container">
          {/* Hamburger button for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsing content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <NavBarLink />
            <Link
              to="/cart"
              className="btn btn-dark ms-3 rounded-pill position-relative"
            >
              <FaShoppingCart />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.85rem', padding: '0.5em 0.65em' }}
              >
                {/* Replace with dynamic cart count */}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
