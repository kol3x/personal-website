import project1 from "./imgs/project-1.png";
import project2 from "./imgs/project-2.png";
import project3 from "./imgs/project-3.jpeg";
import project4 from "./imgs/project-4.png";

function Portfolio() {
  return (
    <main>
      <h1>My work</h1>
      <div className="projects-list">
        <div className="project">
          <img src={project1} />
          <h4>Blog App</h4>
          <p>
            One of my most advanced projects. It consists of a React front-end
            for blog viewers, REST API build on Express.js in the backend,
            MongoDB and additional React front-end for adding new blog-posts,
            build with express-session.
          </p>
          <div className="sources">
            <a href="#" target="_blank">
              <button>Check out</button>
            </a>
            <a href="https://github.com/kol3x/blog-API" target="_blank">
              <button>Source code</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={project2} />
          <h4>League Helper</h4>
          <p>
            My passion project, build with React and ExpressJS, it uses Riot
            Games' API to fetch user's last League of Legends matches and show
            some fun statistics, that are not usually shown on popular LoL-stats
            websites.
          </p>
          <div className="sources">
            <a href="#" target="_blank">
              <button>Check out</button>
            </a>
            <a href="#" target="_blank">
              <button>Source code</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={project3} />
          <h4>Battleship Game</h4>
          <p>
            The classic Battleship game, implemented with vanilla JavaScript and
            written using test-driven development technics with Jest.
          </p>
          <div className="sources">
            <a href="#" target="_blank">
              <button>Check out</button>
            </a>
            <a href="https://github.com/kol3x/battleship" target="_blank">
              <button>Source code</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={project4} />
          <h4>Find the turtle!</h4>
          <p>
            My implementation of "Where's Waldo?" game, but with TMNT
            characters. Express.js backend to store best time results and game
            state, React front-end.{" "}
          </p>
          <div className="sources">
            <a href="#" target="_blank">
              <button>Check out</button>
            </a>
            <a href="https://github.com/kol3x/Find-the-Turtle" target="_blank">
              <button>Source code</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;