import { useState, useEffect, useRef } from "react";
import "./App.css";
import "./header.css";
import "./main.css";
import Header from "./header";
import Portfolio from "./portfolio";
import Links from "./links";

function App() {
  // implement a slide in with this guide https://www.freecodecamp.org/news/reveal-on-scroll-in-react-using-the-intersection-observer-api/
  return (
    <>
      <Header  />
      <Portfolio />
      <Links />
    </>
  );
}

export default App;
