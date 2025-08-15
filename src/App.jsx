import Navbar from "./section/Navbar"
import './App.css'
import Hero from "./section/Hero"
import Demo from "./section/Demo"
import About from "./section/About";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
function App() {
  

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Projects />
      </div>
      <Experience />
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App
