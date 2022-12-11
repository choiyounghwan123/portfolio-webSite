import "./App.css";
import About from "./components/About";
import MainBanner from "./components/MainBanner";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <MainBanner></MainBanner>
      <About></About>
      <Skills></Skills>
      <Project></Project>
    </MainContainer>
  );
}

export default App;
