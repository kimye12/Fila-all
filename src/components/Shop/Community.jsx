import Drag from "./Drag";
import { COMMUNITY_PRODUCTS } from "../../communty-product";
import CommunityItem from "./CommunityItem";

export default function Community() {
  return (
    <Drag classname={"community-box"}>
      {COMMUNITY_PRODUCTS.map((item) => (
        <div key={item.id} className="com-item-box">
          <CommunityItem item={item} />
        </div>
      ))}
    </Drag>
  );
}
