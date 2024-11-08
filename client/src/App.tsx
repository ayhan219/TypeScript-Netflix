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
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/newpopular" element={<NewPopular />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:type/details/:id" element={<Details />} />
          <Route path="/searched/:value" element={<SearchedDatas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
