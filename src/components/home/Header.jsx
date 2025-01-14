import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <header className="header-section" style={{ backgroundImage: 'url(/images/naviforce4.jpg)' }}>
      <div className="overlay">
        <div className="container px-4 px-lg-5 my-5">
          <motion.div
            className="text-center text-white text-container" // Add text-container class for alignment
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold">Welcome to Big Sea Merchants</h1>
            <p className="lead fw-normal text-white-75 mb-4">
              Your one-stop shop for premium accessories, electronics, and stunning watches.
            </p>
            <motion.a
              href="#shop"
              className="btn btn-light btn-lg rounded-pill px-4 py-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Explore Our Collection
            </motion.a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
