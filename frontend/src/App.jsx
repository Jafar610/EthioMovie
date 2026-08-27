import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Movies from "./Components/Movies/Movies";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import MoviePage from "./Pages/MoviePage/MoviePage";
import Layout from "./Components/Layout/Layout";
import Series from "./Pages/Series/Series";
import Mylist from "./Pages/Mylist/Mylist";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/series" element={<Series/>} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/mylist" element={<Mylist/>} />
            <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
