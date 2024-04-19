import "./header.css";
import "./main.css";
import Header from "./header";
import Portfolio from "./portfolio";
import { motion } from "framer-motion";

function App() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
      <Header />
      <Portfolio />
    </motion.div>
  );
}

export default App;
