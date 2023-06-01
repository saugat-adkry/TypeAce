import Login from "./components/Login";
import Register from "./components/Reg";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Project";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/type-ace" element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
