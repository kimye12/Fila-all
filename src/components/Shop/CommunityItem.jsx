export default function CommunityItem({ item }) {
  return (
    <article className="com-item">
      <img src={item.image} alt={item.name} draggable={false} />
      <div className="com-item-content">
        <h3>{item.title}</h3>
        <h4>{item.subtitle}</h4>
      </div>
    </article>
  );
}
