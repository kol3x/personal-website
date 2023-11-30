function Tile() {
  const rand = Math.random();
  let isTile;
  if (rand >= 0.5) {
    isTile = "tile";
  }
  let delay = {
    animationDelay: `-${rand * 100}s`,
  };
  return (
    <div className="tile-wrapper">
      <div className={isTile} style={delay}></div>
    </div>
  );
}

export default Tile;
