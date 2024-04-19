import HeroBackground from "./imgs/heroBackground.jpg";
import NikoPhotoAnimated from "./imgs/NikoPhotoAnimated.gif";
import MenuBar from "./components/menuBar";

const style = {
  backgroundImage: `url(${HeroBackground})`,
};

function Header() {
  return (
    <div className="heroScreen" style={style}>
      <MenuBar></MenuBar>
      <h1 className="name">
        NIKOLAI <br></br> <span>SHCHERBININ</span>
        <h4 className="jobTitle">SOFTWARE DEVELOPER</h4>
      </h1>
      <img
        className="nikoAnimatedPhoto"
        src={NikoPhotoAnimated}
        alt="Nikolai Animated"
      />
      
    </div>
  );
}

export default Header;
