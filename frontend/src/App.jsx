import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import MoviePage from "./Pages/MoviePage/MoviePage";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
