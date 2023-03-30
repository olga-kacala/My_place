import styles from "./App.module.css";
import { Routes, Route} from "react-router-dom";
import { Memory } from "./components/Memory";
import {Snake} from "./components/Snake";
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";


function App() {
  

  return (
    <div>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/memory" element={<Memory/>}/>
<Route path="/snake" element={<Snake/>}/> 
</Routes>
    </div>
  );
}

export default App;
