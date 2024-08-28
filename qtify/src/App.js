import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <><Navbar/> <Hero/></>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
