import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import TabComponent from "./components/Tab/TabComponent";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <><Navbar/> 
      <Hero/> 
      <Section name={"Top Albums"} url={"https://qtify-backend-labs.crio.do/albums/top"}/> 
      <Section name={"New Albums"} url={"https://qtify-backend-labs.crio.do/albums/new"}/> 
      <Section name={"Songs"} song={true}/> 
       <TabComponent/>
      </>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
