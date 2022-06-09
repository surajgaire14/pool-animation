import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [clicked, setClicked] = React.useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
          //   if (!clicked) {
            setClicked(true);

  };

  React.useEffect(() => {
    setTimeout(() => {
        if(!clicked)
        navigate("/next");
    }, 800);
  },[clicked])

  return (
    <motion.div
      className="example"
      onClick={handleClick}
      initial={{
        width: "150px",
        height: "150px",
        background: "white",
        cursor: "pointer",
      }}
      animate={ {
          width: "100vw",
          height: "100vh",
          background: "white",
          transition: { duration: 0.8 },
        }
      }
      //   exit={{
      //     width: "100vw",
      //     height: "100vh",
      //     background: "white",
      //   }}
    />
  );
};

export default Home;
