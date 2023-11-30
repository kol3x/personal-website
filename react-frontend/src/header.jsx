import mainPic from "./imgs/main-pic.jpeg";
import HeroEffect from "./hero";

function Hero({styles, quantity }) {
  return (
    <>
      <header>
        <div className="main-pic">
          <img src={mainPic} />
          <h3>Nikolai Sherby</h3>
        </div>
        <div className="about-me">
          <h2>About me</h2>
          <p>
            A software engineer with a great passion for everything
            tech-related.
          </p>
          <p>
            I found my way into coding by learning basic C, then switching to
            Python and built a dozen of projects using Django and Flask.
          </p>
          <p>
            The next thing I did was going really deep inside HTML, CSS and
            plain JavaScript, which i've already had a grasp of previously.
          </p>
          <p>
            After mastering JavaScript, I finally got into learning React,
            NodeJS, Express and finished my portfolio projects on top of those.
          </p>
        </div>
      </header>
      <div style={styles}>
        <HeroEffect quantity={quantity} />
      </div>
    </>
  );
}

export default Hero;
