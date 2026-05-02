import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Projects from "./sections/projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
