import { useContext } from "react";
import { CartContext } from "../../store/CartContex";
import Button from "../UI/Button";

export default function SliderItem({ item }) {
  const cartCtx = useContext(CartContext);
  function handleAddItemtoCart() {
    cartCtx.addItem(item);
  }

  return (
    <article className="product">
      <img src={item.image} alt={item.name} />
      <div className="product-content">
        <div>
          <h3>{item.name}</h3>
          <p className="product-price">{item.price.toLocaleString() + "원"}</p>
          <p className="product-description">{item.description}</p>
        </div>
        <p className="product-actions">
          <Button onClick={handleAddItemtoCart}>카트에 담기</Button>
        </p>
      </div>
    </article>
  );
}
