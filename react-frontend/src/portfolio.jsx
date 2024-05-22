import BlogAppImg from "./imgs/project-1.png";
import LeagueHelperImg from "./imgs/project-2.png";
import BattleshipImg from "./imgs/project-3.png";
import PersonalWebsiteImg from "./imgs/projectPersonalWebsite.png";
import ProjectCard from "./components/projectCard";
const projects = [
  {
    title: "Blog App",
    desc: "One of my most advanced projects. It consists of a React front-end to view blogposts and leave comments, REST API build on Express.js in the backend, MongoDB and additional React admin front-end for adding new blog-posts, build with express-session.",
    stack: "React, Express, RestAPI, MongoDB",
    img: BlogAppImg,
    appURL: "https://kol3x-blog.netlify.app/",
    codeURL: "https://github.com/kol3x/blog-API",
  },
  {
    title: "League Helper",
    desc: "My passion project, build with React and Redis, it uses Riot Games' API to fetch user's last League of Legends matches and show some fun statistics, that are not usually shown on popular LoL-stats websites. To not rely on the API too much, I used Redis to cache data on the first look-up.",
    stack: "React, Express, RestAPI, Redis cache",
    img: LeagueHelperImg,
    appURL: "https://league-helper.netlify.app/",
    codeURL: "https://github.com/kol3x/League-Helper",
  },
  {
    title: "Battleship Game",
    desc: "The classic Battleship game, implemented with vanilla JavaScript and written using test-driven development techniques with Jest.",
    stack: "Plain JavaScript, tests with Jest",
    img: BattleshipImg,
    appURL: "https://kol3x.github.io/battleship/dist/",
    codeURL: "https://github.com/kol3x/battleship",
  },
  {
    title: "Personal Website",
    desc: "Well, you are here right now. Simple nice personal website, made with React, Framer Motion, MaterialUI. It went throw many variations, but came down to this.",
    stack: "React, Framer Motion, MaterialUI",
    img: PersonalWebsiteImg,
    appURL: "./",
    codeURL: "https://github.com/kol3x/personal-website",
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
