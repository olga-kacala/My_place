
import "./App.css";

import { Routes, Route} from "react-router-dom";



function App() {
  

  return (
    <div className="App">
<Routes>
<Route path="/memory" element={<Memory/>}/>
<Route path="/snake" element={<Snake/>}/>
</Routes>
<Footer/>
      

    </div>
  );
}

export default App;
