import project1 from "./imgs/project-1.png";
import project2 from "./imgs/project-2.png";
import project3 from "./imgs/project-3.png";
import project4 from "./imgs/project-4.png";
import { Reveal } from "./components/reveal";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <main>
      <h1>My Work</h1>
      <div className="projects-list">
        <Reveal className="project">
          <div className="project">
            <img src={project1} />
            <h4>
              <Reveal>Blog App</Reveal>
            </h4>
            <div>
              <Reveal>
                One of my most advanced projects. It consists of a React
                front-end to view blogposts and leave comments, REST API build
                on Express.js in the backend, MongoDB and additional React admin
                front-end for adding new blog-posts, build with express-session.
              </Reveal>
            </div>
            <div className="sources">
              <a
                href="https://spectacular-raindrop-01ff35.netlify.app"
                target="_blank"
              >
                <button>Check out</button>
              </a>
              <a href="https://github.com/kol3x/blog-API" target="_blank">
                <button>Code</button>
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal className="project">
          <div className="project">
            <img src={project2} />
            <h4>
              <Reveal>League Helper</Reveal>
            </h4>
            <div>
              <Reveal>
                My passion project, build with React and Redis, it uses Riot
                Games' API to fetch user's last League of Legends matches and
                show some fun statistics, that are not usually shown on popular
                LoL-stats websites. To not rely on the API too much, I used
                Redis for caching the data for each player on the first look-up
                for 24 hours.
              </Reveal>
            </div>
            <div className="sources">
              <a
                href="https://moonlit-kleicha-cc0648.netlify.app/"
                target="_blank"
              >
                <button>Check out</button>
              </a>
              <a href="https://github.com/kol3x/League-Helper" target="_blank">
                <button>Code</button>
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal className="project">
          <div className="project">
            <img src={project3} />
            <h4>
              <Reveal>Battleship Game</Reveal>
            </h4>
            <div>
              <Reveal>
                The classic Battleship game, implemented with vanilla JavaScript
                and written using test-driven development technics with Jest.
              </Reveal>
            </div>
            <div className="sources">
              <a
                href="https://kol3x.github.io/battleship/dist/"
                target="_blank"
              >
                <button>Check out</button>
              </a>
              <a href="https://github.com/kol3x/battleship" target="_blank">
                <button>Code</button>
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal className="project">
          <div className="project">
            <img src={project4} />
            <h4>
              <Reveal>Find the turtle!</Reveal>
            </h4>
            <div>
              <Reveal>
                My implementation of "Where's Waldo?" game, but with TMNT
                characters. Express.js backend to store best time results and
                game state, React front-end.
              </Reveal>
            </div>
            <div className="sources">
              <a
                href="https://visionary-beignet-52e97c.netlify.app/"
                target="_blank"
              >
                <button>Check out</button>
              </a>
              <a
                href="https://github.com/kol3x/Find-the-Turtle"
                target="_blank"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

export default Portfolio;
