import { BASE_URL } from "../../api";
import styles from "./HomeCard.module.css";

const HomeCard = ({ product, onProductClick }) => {
  return (
    <div
      className={`col-md-3 col-6 ${styles.col}`}
      onClick={onProductClick} // Trigger navigation on click
      style={{ cursor: "pointer" }}
    >
      <div className={styles.card}>
        <div className={styles.cardImgWrapper}>
          <img
            src={`${BASE_URL}${product.image}`}
            className={styles.cardImgTop}
            alt={product.name}
          />
        </div>
        <div className={styles.cardBody}>
          <h5 className={`${styles.cardTitle} mb-1`}>{product.name}</h5>
          <h6 className={styles.cardText}>{`Ksh ${product.price}`}</h6>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
