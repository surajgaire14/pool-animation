import { motion } from "framer-motion";
import React from "react";

function Next() {
  return (
    <motion.div
      className="example2"
      initial={{
        width: "100vw",
        height: "100vh",
        background:"linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
      }}
      animate={{
        width: "150px",
        height: "150px",
        background: "white",
        transition: { duration: .8,},
      }}
      exit={{
        width: "150px",
        height: "150px",
        background: "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
      }}
    />
  );
}

export default Next;
