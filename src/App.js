import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Adventures from "./components/Adventures.jsx";
import AdventureDetails from "./components/AdventureDetails.jsx";
import Bookings from "./components/Bookings.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import New from "./components/New.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventures/:id" element={<Adventures />} />
        {/* down here id = adventure id */}
        <Route path="/adventures/details/:id" element={<AdventureDetails />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
}

export default App;
