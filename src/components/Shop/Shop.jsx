import Community from "./Community";
import Recommend from "./Recommend";
import Slider from "./Slider";
import Trend from "./Trend";
export default function Shop({ observeRef }) {
  return (
    <main id="shop" ref={observeRef}>
      <section id="sliders">
        <h2>떠오르는 상품</h2>
        <Slider />
      </section>

      <section id="trend">
        <h2>지금 많이 찾는 상품</h2>
        <Trend />
      </section>

      <section id="recommend">
        <h2>추천 상품</h2>
        <Recommend />
      </section>

      <section id="community">
        <h2>커뮤니티</h2>
        <Community />
      </section>
    </main>
  );
}
