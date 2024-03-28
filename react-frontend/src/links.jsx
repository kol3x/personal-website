import "./links.css";
import github from "./icons/github.png";
import linkedin from "./icons/linkedin.png";
import cv from "./icons/cv.png";
import email from "./icons/email.png";

function Links() {
  return (
    <footer>
      <div className="links">
        <a href="https://github.com/kol3x" target="_blank">
          <div>
            <img alt="Github" className="icon" src={github}></img>
            <h2>Github</h2>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/nikolai-shcherbinin/"
          target="_blank"
        >
          <div>
            <img alt="LinkedIn" className="icon" src={linkedin}></img>
            <h2>LinkedIn</h2>
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/1NyO2-LAhvZKerFN_pPtdhybbGYvlN-Pe"
          target="_blank"
        >
          <div>
            <img alt="CV" className="icon" src={cv}></img>
            <h2>CV</h2>
          </div>
        </a>
        <div>
          <div>
            <img alt="E-mail" className="icon" src={email}></img>
            <h2>kolaegipet</h2>@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Links;
