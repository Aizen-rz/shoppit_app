import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import { useEffect, useState } from "react";
import api, { BASE_URL } from "../../api";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/product_detail/${slug}`);
        setProduct(res.data);
        setSimilarProducts(res.data.similar_products || []);
      } catch (err) {
        console.error("Error fetching product:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]); // React to slug changes

  return (
    <div>
      <section className="py-3">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={`${BASE_URL}${product.image}`}
                alt={product.name}
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{product.name}</h1>
              <div className="fs-5 mb-5">
                <span>{`Ksh ${product.price}`}</span>
              </div>
              <p className="lead">
                {product.description || "No description available."}
              </p>
              <div className="d-flex">
                <a
                  className="btn btn-success flex-shrink-0"
                  href={`https://wa.me/254714571375?text=${encodeURIComponent(
                    `Hello, I would like to order ${product.name} for Ksh ${product.price}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp me-1"></i>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts products={similarProducts} />
    </div>
  );
};

export default ProductPage;
