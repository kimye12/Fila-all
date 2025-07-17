import Drag from "./Drag";
import TrendItem from "./TrendItem";
import { TREND_PRODUCTS } from "../../trend-product";
export default function Trend() {
  return (
    <Drag classname={"trend-box"}>
      {TREND_PRODUCTS.map((item) => (
        <div key={item.id} className="trend-item-box">
          <TrendItem item={item} />
        </div>
      ))}
    </Drag>
  );
}
