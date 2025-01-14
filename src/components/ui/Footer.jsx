import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* About Us Section */}
          <div className="col-md-5 mb-3" style={{ fontSize: '1.2rem' }}>
            <h5>About Us</h5>
            <p>
              We are located at:
              <br />
              Nyamakima Price road,
              <br />
              Simba center
              <br />
              Ground floor
            </p>
          </div>

          {/* Contact Us Section */}
          <div
            className="col-md-5 mb-3 text-md-end text-start"
            style={{ fontSize: '1.2rem' }}
          >
            <h5>Contact Us</h5>
            <p>
              Email:{" "}
              <a
                href="mailto:info@bigseamerchants.com"
                className="text-white text-decoration-none"
              >
                info@bigseamerchants.com
              </a>
            </p>
            <p>Phone: +254 714 571 375</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-4">
          <a
            href="https://www.facebook.com/your-facebook-page"
            className="text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            className="text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            className="text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/254794759586"
            className="text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-3">
          <p className="small mb-0">&copy; 2025 Shoppit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
