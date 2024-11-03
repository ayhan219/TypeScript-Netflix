import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import NewPopular from "./pages/NewPopular";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Details from "./pages/Details";
import SearchedDatas from "./pages/SearchedDatas";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/newpopular" element={<NewPopular />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/:type/details/:id" element={<Details />} />
          <Route path="/searched/:value" element={<SearchedDatas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
