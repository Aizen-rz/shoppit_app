import HomeCard from "./HomeCard";
import { useNavigate } from "react-router-dom";

const CardContainer = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`); // Navigate to the product details page
  };

  return (
    <section className="py-3" id="shop"> {/* Reduced padding for the section */}
      <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>Our Products</h4> {/* Reduced margin-bottom */}
      <div className="container px-4 px-lg-5 mt-3"> {/* Reduced margin-top */}
        <div className="row">
          {/* Pass the click handler to HomeCard */}
          {products.map((product) => (
            <HomeCard
              key={product.id}
              product={product}
              onProductClick={() => handleProductClick(product.slug)} // Pass slug
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
