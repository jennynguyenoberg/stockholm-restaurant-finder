import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Restaurants from "./pages/Restaurants/Restaurants";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
