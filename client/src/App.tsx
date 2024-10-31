
import { BrowserRouter , Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/tvshows" element={<TvShows />} />
      </Routes>
      <Footer />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
