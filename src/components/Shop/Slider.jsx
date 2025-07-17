import { useEffect, useRef, useState } from "react";
import { CLOTH_PRODUCTS } from "../../cloth-product.js";
import SliderItem from "./SliderItem.jsx";
import Button from "../UI/Button.jsx";

export default function Slider() {
  const [curSlide, setCurSlide] = useState(0);
  const slidesRef = useRef([]);
  const maxSlide = CLOTH_PRODUCTS.length - 1;

  function goToSlide(slideIndex) {
    slidesRef.current.forEach((slide, i) => {
      if (slide) {
        const base = 120 * i;
        const offset = -220 * slideIndex;
        slide.style.transform = `translateX(${base + offset}%)`;
      }
    });
  }

  function prevSlide() {
    setCurSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  }

  function nextSlide() {
    setCurSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  }

  function handleDotClick(index) {
    setCurSlide(index);
  }

  useEffect(() => {
    goToSlide(curSlide);
  }, [curSlide]);

  return (
    <div className="slider">
      <div className="slides">
        {CLOTH_PRODUCTS.map((product, i) => (
          <div
            key={product.id}
            className="slide"
            ref={(el) => (slidesRef.current[i] = el)}
          >
            <SliderItem item={product} />
          </div>
        ))}
      </div>

      <Button className="slider__btn--left ir_pm" onClick={prevSlide}>
        Prev
      </Button>
      <Button className="slider__btn--right ir_pm" onClick={nextSlide}>
        Next
      </Button>

      <div className="dots">
        {CLOTH_PRODUCTS.map((_, index) => (
          <button
            key={index}
            className={`dots__dot ${
              index === curSlide ? `dots__dot--active` : undefined
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
