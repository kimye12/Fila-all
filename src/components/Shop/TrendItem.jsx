import { useContext, useState } from "react";
import Button from "../UI/Button";
import CartContext from "../../store/CartContex";

export default function TrendItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const cartCtx = useContext(CartContext);

  function handleAddItemtoCart() {
    cartCtx.addItem(item);
  }

  return (
    <article
      className="trend-product"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={item.image} alt={item.name} draggable={false} />
      <div className={`trend-product-content ${isHovered ? "active" : ""} `}>
        <div>
          <h4 className={isHovered ? "active" : ""}>{item.gender}</h4>

          <h3>{item.name}</h3>
          <p className="trend-product-price">
            {item.price.toLocaleString() + "원"}
          </p>
        </div>

        <p className={`trend-actions ${isHovered ? "active" : ""}`}>
          <Button onClick={handleAddItemtoCart}>+</Button>
        </p>
      </div>
    </article>
  );
}
