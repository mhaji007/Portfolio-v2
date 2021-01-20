import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Portfolio from "./components/Portfolio"

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Portfolio/>
    </>
  );
}

export default App;
