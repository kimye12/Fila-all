import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContex";
import Button from "../UI/Button";
import UserProgressContext from "../../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  // console.log(items.items);
  // 카트 물품 전체 금액
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // 카트 Modal창 닫기
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  // 카트 checkout Modal 이동
  function handleGoToCheckout() {
    userProgressCtx.showCheckout;
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
        <p className="cart-total">{cartTotal.toLocaleString()}원</p>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCart}>
            닫기
          </Button>
        </p>
      </ul>
    </Modal>
  );
}
