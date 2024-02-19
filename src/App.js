import CustomNavBar from "./components/NavBar";
import Banner from './components/Banner';
import Experience from "./components/Experience";
import About from "./components/about"; // Assurez-vous que le chemin et la casse sont corrects
import Projects from "./components/project"; // Assurez-vous que le chemin et la casse sont corrects
import Credits from "./components/credits"; // Assurez-vous que le chemin et la casse sont corrects
import './styles/Global.css'; // Assurez-vous que le fichier existe

import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <div id="content">
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
    </div>
  );
}

export default App;
