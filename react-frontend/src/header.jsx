import mainPic from "./imgs/main-pic.jpeg";
import HeroEffect from "./hero";
import { useRef, useState, useLayoutEffect, useEffect } from "react";

function Header() {
  const header = useRef();
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      const newCol = Math.floor(window.innerWidth / 50);
      const newRows = Math.floor(header.current?.clientHeight / 50);
      setColumns(newCol);
      setRows(newRows);
    }
    handleResize();

    window.addEventListener("DOMContentLoaded", handleResize);
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("DOMContentLoaded", handleResize);
    };
  }, []);

  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const newQ = columns * rows;
    setQuantity(newQ);
  }, [columns, rows]);

  let styles = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };
  return (
    <header ref={header}>
      <div className="main-pic">
        <img src={mainPic} />
        <h3>Nikolai Shcherbinin</h3>
      </div>
      <div className="about-me">
        <h2>About me</h2>
        <p>
          A software engineer with a great passion for everything tech-related.
        </p>
        <p>
          I found my way into coding by learning basic C, then switching to
          Python and built a dozen of projects using Django and Flask.
        </p>
        <p>
          The next thing I did was going really deep inside HTML, CSS and plain
          JavaScript, which i've already had a grasp of previously.
        </p>
        <p>
          After mastering JavaScript, I finally got into learning React, NodeJS,
          Express and finished my portfolio projects on top of those.
        </p>
      </div>
      <div style={styles}>
        <HeroEffect quantity={quantity} />
      </div>
    </header>
  );
}

export default Header;
