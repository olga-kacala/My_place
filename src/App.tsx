import styles from "./App.module.css";
import { Routes, Route} from "react-router-dom";
import { Memory } from "./components/Memory";
import {Snake} from "./components/Snake";


function App() {
  

  return (
    <div className={styles.App}>
<Routes>
<Route path="/memory" element={<Memory/>}/>
<Route path="/snake" element={<Snake/>}/>
</Routes>
    </div>
  );
}

export default App;
