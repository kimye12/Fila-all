import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { CartContextProvider } from "./store/CartContex";
import MainPhoto from "./components/MainPhoto";
import Shop from "./components/Shop/Shop";
import Footer from "./components/footer";
import { useRef } from "react";
function App() {
  const visualRef = useRef(null);

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header observeRef={visualRef} />
        <Cart />
        <MainPhoto />
        <Shop observeRef={visualRef} />
        <Footer />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
