import CartContext from "../../store/CartContex";
import Button from "../UI/Button";
import { useContext, useState } from "react";

export default function RecommendItem({ item, isLast }) {
  const cartCtx = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  function handleAddItemtoCart() {
    cartCtx.addItem(item);
  }
  return (
    <article
      className={`${isLast ? "big-item" : "small-item"} ${
        isHovered ? "active" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.image} alt={item.name} />
      {isLast ? (
        ""
      ) : (
        <div className={`recommend-content ${isHovered ? "active" : ""}`}>
          <div>
            <h4>{item.gender}</h4>
            <h3>{item.name}</h3>
            <p className="recommend-product-price">
              {item.price.toLocaleString() + "원"}
            </p>
          </div>
          <p className="recommend-actions">
            <Button onClick={handleAddItemtoCart}>+</Button>
          </p>
        </div>
      )}
    </article>
  );
}
