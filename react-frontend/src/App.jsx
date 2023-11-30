import { useState, useEffect } from "react";
import "./App.css";
import "./header.css";
import "./main.css";
import Hero from "./header";
import Portfolio from "./portfolio";
import Links from "./links";

function App() {
  const [columns, setColumns] = useState(Math.floor(window.innerWidth / 50));
  const [rows, setRows] = useState(Math.floor(window.innerHeight / 50));

  useEffect(() => {
    function handleResize() {
      const newCol = Math.floor(window.innerWidth / 50);
      const newRows = Math.floor(window.innerHeight / 50);
      setColumns(newCol);
      setRows(newRows);
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const newQ = columns * rows;
    setQuantity(newQ);
  }, [columns, rows]);

  let styles = {
    gridTemplateRows: `repeat(${columns}, 1fr)`,
    gridTemplateColumns: `repeat(${rows}, 1fr)`,
  };
  // implement a slide in with this guide https://www.freecodecamp.org/news/reveal-on-scroll-in-react-using-the-intersection-observer-api/
  return (
    <div>
      <Hero styles={styles} quantity={quantity} />
      <Portfolio />
      <Links />
    </div>
  );
}

export default App;
