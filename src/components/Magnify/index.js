import React, { useState } from "react";
import { motion } from "framer-motion";

const Magnify = () => {
  const [value, setValue] = useState(0);
  console.log("value:", value);

  return (
    <article>
      <h2>Magnifier</h2>
      <input
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <motion.p style={{ padding: "0 20%" }} animate={{ scale: value }}>
        I'm baby biodiesel etsy sustainable hexagon occupy. PBR&B literally
        sriracha, jianbing skateboard you probably haven't heard of them man
        braid affogato blog actually forage mustache irony typewriter paleo.
        Dreamcatcher pitchfork gastropub, vaporware four loko pour-over
        succulents single-origin coffee.
      </motion.p>
    </article>
  );
};

export default Magnify;
