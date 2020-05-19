import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const stockData = (
  <p>
    I'm baby biodiesel etsy sustainable hexagon occupy. PBR&B literally
    sriracha, jianbing skateboard you probably haven't heard of them man braid
    affogato blog actually forage mustache irony typewriter paleo. Dreamcatcher
    pitchfork gastropub, vaporware four loko pour-over succulents single-origin
    coffee.
  </p>
);

const Accordion = ({ title = "Accordion", children = stockData }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled(!isToggled)}>
        {title}
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            style={{ overflow: "hidden" }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
