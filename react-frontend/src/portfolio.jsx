import BlogAppImg from "./imgs/project-1.png";
import LeagueHelperImg from "./imgs/project-2.png";
import BattleshipImg from "./imgs/project-3.png";
import TurtleImg from "./imgs/project-4.png";
import { Reveal } from "./components/reveal";
import ProjectCard from "./components/projectCard";

const projects = [
  {
    title: "Blog App",
    desc: "One of my most advanced projects. It consists of a React front-end to view blogposts and leave comments, REST API build on Express.js in the backend, MongoDB and additional React admin front-end for adding new blog-posts, build with express-session.",
    img: BlogAppImg,
    appURL: "https://spectacular-raindrop-01ff35.netlify.app",
    codeURL: "https://github.com/kol3x/blog-API",
  },
  {
    title: "League Helper",
    desc: "My passion project, build with React and Redis, it uses Riot Games' API to fetch user's last League of Legends matches and show some fun statistics, that are not usually shown on popular LoL-stats websites. To not rely on the API too much, I used Redis to cache data on the first look-up.",
    img: LeagueHelperImg,
    appURL: "https://moonlit-kleicha-cc0648.netlify.app/",
    codeURL: "https://github.com/kol3x/League-Helper",
  },
  {
    title: "Battleship Game",
    desc: "The classic Battleship game, implemented with vanilla JavaScript and written using test-driven development techniques with Jest.",
    img: BattleshipImg,
    appURL: "https://kol3x.github.io/battleship/dist/",
    codeURL: "https://github.com/kol3x/battleship",
  },
  {
    title: "Find the turtle!",
    desc: "My implementation of 'Where's Waldo?' game, but with TMNT characters. Express.js backend to store best time results and game state, React front-end.",
    img: TurtleImg,
    appURL: "https://visionary-beignet-52e97c.netlify.app/",
    codeURL: "https://github.com/kol3x/Find-the-Turtle",
  },
];

function Portfolio() {
  return (
    <main>
      <h1>My Work</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index}></ProjectCard>
        ))}
      </div>
    </main>
  );
}

export default Portfolio;
