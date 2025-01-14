import HomeCard from "../home/HomeCard";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-3 bg-light">
      <div className="container px-4 px-lg-5 mt-3">
        {/* Center the "Related products" heading */}
        <h2 className="fw-bolder mb-4 text-center">Related products</h2>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => (
            <HomeCard
              key={product.id}
              product={product}
              onProductClick={() => handleProductClick(product.slug)} // Pass click handler
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
