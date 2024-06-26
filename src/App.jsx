import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Prevention from "./pages/Prevention.jsx";
import Safety from "./pages/Safety.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/prevention" element={<Prevention />} />
        <Route exact path="/safety" element={<Safety />} />
      </Routes>
    </Router>
  );
}

export default App;