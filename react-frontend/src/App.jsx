import "./header.css";
import "./portfolio.css";
import "./loading.css";
import Header from "./header";
import Portfolio from "./portfolio";
import { motion } from "framer-motion";
import BottomMenuBar from "./components/bottomMenuBar";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <>
      <LoadingScreen />
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Header />
        <Portfolio />
        <BottomMenuBar></BottomMenuBar>
      </motion.div>
    </>
  );
}

export default App;
