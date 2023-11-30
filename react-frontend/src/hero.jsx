import Tile from "./singleTile";

function HeroScreen({ quantity, style }) {
  const tiles = [];
  for (let i = 0; i < quantity; i++) {
    tiles.push(<Tile key={i} />);
  }
  return (
    <>
      <div className="tiles" style={style}>{tiles}</div>
    </>
  );
}

export default HeroScreen;
