import { useContext, useEffect, useRef } from "react";
import logoImg from "../assets/logo.png";
import Button from "./UI/Button";
import CartContext from "../store/CartContex";
import UserProgressContext from "../store/UserProgressContext";

export default function Header({ observeRef }) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const headerRef = useRef(null);

  // 카트 물품 수량
  const totalCartItems = cartCtx.items.reduce((totalNumberofItems, item) => {
    return totalNumberofItems + item.quantity;
  }, 0);

  // 카트 클릭시 카트Modal open
  function handleShowCart() {
    userProgressCtx.showCart();
  }

  // header statice상태에서 sticky구현
  useEffect(() => {
    const header = headerRef.current;
    const target = observeRef.current;

    if (!header || !target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("isIntersecting:", entry.isIntersecting);
        if (!entry.isIntersecting) {
          header.classList.remove("sticky");
        } else {
          header.classList.add("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-100px",
      }
    );

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [observeRef]);

  return (
    <header id="main-header" ref={headerRef}>
      <div className="header-center">
        <div className="title">
          <img src={logoImg} alt="fila logo" />
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">KIDS</a>
        </div>

        <nav>
          <Button textOnly onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </div>
    </header>
  );
}
