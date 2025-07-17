import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [], // 카트에 담겨있는 물품
  addItem: (item) => {}, // 물품수량 추가,증가 함수
  removeItem: (id) => {}, // 물품수량 삭제,감소 함수
  clearCart: () => {}, // 카트 초기화 함수
});

// 카트에서 물품수량 변경 함수
function cartReducer(state, action) {
  // 카트에서 물품수량 증가 추가
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  // 카트에서 물품수량 감소 삭제
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  // 카트에서 물품 초기화
  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

// 카트 함수 상위부모
export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  // 수량 증가,추가 상위 함수
  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  // 수량 감소,삭제 상위 함수
  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  // 수량 초기화 상위 함수
  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
