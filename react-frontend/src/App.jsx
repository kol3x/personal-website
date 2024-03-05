import "./App.css";
import "./header.css";
import "./main.css";
import Header from "./header";
import Portfolio from "./portfolio";
import Links from "./links";
import { motion } from "framer-motion";


function App() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 7 } },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
      <Header />
      <Portfolio />
      <Links />
    </motion.div>
  );
}

export default App;
