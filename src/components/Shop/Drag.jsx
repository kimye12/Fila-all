import { useRef } from "react";

export default function Drag({ children, classname }) {
  const sliderRef = useRef();
  const startX = useRef(0);
  const scrollX = useRef(0);
  const isDragging = useRef(false);

  // 현재 transform 위치값을 알려주는 함수
  function getTranslateX() {
    const transform = getComputedStyle(sliderRef.current).transform;
    const match = transform.match(/matrix.*\((.+)\)/);
    return match ? parseFloat(match[1].split(", ")[4]) : 0;
  }

  // transform값을 매개변수로 받고 이동시키는 함수
  function setTranslateX(x) {
    sliderRef.current.style.transform = `translateX(${x}px)`;
  }

  // 마우스를 눌렀을때
  function onMouseDown(e) {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollX.current = getTranslateX();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  // 마우스가 이동될때 드래그로 같이이동
  function onMouseMove(e) {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    const newX = scrollX.current + deltaX;
    setTranslateX(newX);
  }

  // 마우스를 땟을때
  function onMouseUp() {
    isDragging.current = false;

    const maxTranslate =
      sliderRef.current.clientWidth - sliderRef.current.scrollWidth;
    let finalX = getTranslateX();

    if (finalX > 0) finalX = 0;
    if (finalX < maxTranslate) finalX = maxTranslate;

    sliderRef.current.style.transition = "transform 0.3s ease";
    setTranslateX(finalX);
    scrollX.current = finalX;

    setTimeout(() => {
      sliderRef.current.style.transition = "";
    }, 300);

    window.removeEventListener("mousemove", onMouseUp);
    window.removeEventListener("mouseup", onMouseUp);
  }

  return (
    <div ref={sliderRef} onMouseDown={onMouseDown} className={classname}>
      {children}
    </div>
  );
}
