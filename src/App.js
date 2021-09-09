import React, { useState } from "react";
import Altimetric from "./altimetric";
import Wipro from "./wipro";



function App() { 
  return (
    <div className="App">
      <div style={{"width":"20%", "float":"left"}}>
   <Wipro />
    </div>
    <div style={{"width":"20%", "float":"left"}}>
    <Altimetric />
    </div>
    </div>
  );
}

export default App;
