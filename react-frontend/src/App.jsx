import "./header.css";
import "./portfolio.css";
import Header from "./header";
import Portfolio from "./portfolio";
import { motion } from "framer-motion";
import Helmet from "react-helmet";
import BottomMenuBar from "./components/bottomMenuBar";

function App() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Portfolio />
      <BottomMenuBar></BottomMenuBar>
    </motion.div>
  );
}

export default App;
