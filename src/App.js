import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import AdditionalProjects from "./components/AdditionalProjects"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Portfolio/>
    <Experience/>
    <AdditionalProjects/>
    <Contacts/>
    <Footer/>
    </>
  );
}

export default App;
