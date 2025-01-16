import logo from "./logo.svg";
// import "./App.css";
import "./Styles/main.scss";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import GitHubStats from "./Components/GitHubStats";
import SoftSkills from "./Components/SoftSkills";

function App() {
  return (
    <div id="app" className="App">
      <Navbar />
      <About />
      <Skills />
      <SoftSkills />
      <Project />
      <GitHubStats />
      <Contact />
    </div>
  );
}

export default App;
