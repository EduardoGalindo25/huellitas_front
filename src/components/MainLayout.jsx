// src/layouts/MainLayout.jsx
import Navbar from "../components/navbarServicios";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -30 },
};

const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.main>
    </>
  );
};

export default MainLayout;
