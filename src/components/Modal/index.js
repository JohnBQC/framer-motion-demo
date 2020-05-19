import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children, setToggle, isToggled }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: "#fff",
            border: "1px solid #fffffe",
            boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.15)",
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translate3d(-50%,0,0)",
          }}
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            // exit={{ y: 40 }}
          >
            <button onClick={() => setToggle(false)}>Close</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
