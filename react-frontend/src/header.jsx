import HeroBackground from "./imgs/heroBackground.jpg";
import NikoPhotoAnimated from "./imgs/NikoPhotoAnimated.gif";

const style = {
  backgroundImage: `url(${HeroBackground})`,
};

function Header() {
  return (
    <header style={style}>
      <h1 className="name">
        NIKOLAI <br></br> <span>SHCHERBININ</span>
        <h4 className="jobTitle">SOFTWARE DEVELOPER</h4>
      </h1>
      <img
        className="nikoAnimatedPhoto"
        src={NikoPhotoAnimated}
        alt="Nikolai Animated"
      />
      
    </header>
  );
}

export default Header;
