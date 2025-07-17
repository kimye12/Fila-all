import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // 명령어 빈칸
  showCart: () => {}, // 카트Modal 열기
  hideCart: () => {}, // 카트Modal 닫기
  showCheckout: () => {}, // 주소Checkout 열기
  hideCheckout: () => {}, // 주소Checkout 닫기
});

// Modal창 닫기 열기 관리 상위부모함수
export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  // 카트Modal 열기 함수
  function showCart() {
    setUserProgress("cart");
  }

  // 카트Modal 닫기 함수
  function hideCart() {
    setUserProgress("");
  }

  // 주소Checkout 열기 함수
  function showCheckout() {
    setUserProgress("checkout");
  }

  // 주소Checkout 닫기 함수
  function hideCheckout() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
