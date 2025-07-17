import { useEffect, useRef, useState } from "react";
import { RECOMMEND_PRODUCTS } from "../../recommend-product.js";
import RecommendItem from "./RecommendItem.jsx";
import Button from "../UI/Button.jsx";

export default function Recommend() {
  const [curSlide, setCurSlide] = useState(0);
  const slidesRef = useRef([]);
  const maxSlide = RECOMMEND_PRODUCTS.length - 1;

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

  useEffect(() => {
    goToSlide(curSlide);
  }, [curSlide]);

  return (
    <div className="recommend-box">
      <div className="recommend-total">
        {RECOMMEND_PRODUCTS.map((group, groupindex) => (
          <div
            key={groupindex}
            className="recommend-items"
            ref={(el) => (slidesRef.current[groupindex] = el)}
          >
            <div className="small-item-box">
              {group.slice(0, 4).map((item) => {
                return (
                  <RecommendItem key={item.id} item={item} isLast={false} />
                );
              })}
            </div>
            <RecommendItem key={group[4].id} item={group[4]} isLast={true} />
          </div>
        ))}
      </div>

      <Button className="recommend__btn--left ir_pm" onClick={prevSlide}>
        Prev
      </Button>
      <Button className="recommend__btn--right ir_pm" onClick={nextSlide}>
        Next
      </Button>
    </div>
  );
}
