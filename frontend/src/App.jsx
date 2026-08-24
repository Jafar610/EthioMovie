import Hero from "./Components/Hero/Hero"
import Movies from "./Components/Movies/Movies"
import Navbar from "./Components/Navbar/Navbar"
import PremiumCard from "./Components/PremiumCard/PremiumCard"
import Login from "./Pages/Login/Login"
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Movies/>
    <PremiumCard/>
    {/* <Login/> */}
    </>
  )
}

export default App
