import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Home from "./components/Home";
import Next from "./components/Next";
import "./App.scss";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence onExitComplete={false}>
      <div className="container">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<Next />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
