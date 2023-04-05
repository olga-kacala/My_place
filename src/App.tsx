import classes from "./App.module.css";
import { Routes, Route} from "react-router-dom";
import { Memory } from "./components/Memory/Memory";
import {Snake} from "./components/Snake/Snake";
import {Navbar} from "./components/Navbar/Navbar";
import {Home} from "./components/Home/Home";


function App() {
  

  return (
    <div className={classes ["App"]}>
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
