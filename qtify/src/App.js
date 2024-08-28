import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <><Navbar/> <Hero/> <Section/></>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
