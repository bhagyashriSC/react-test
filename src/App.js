import React, { useState } from "react";
import Altimetric from "./altimetric";
import Wipro from "./wipro";
import Accenture from "./accenture";
import Hackeranker from "./hackeranker";
import Persistance from "./persistance";
import Mphasis from "./mphasis";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="container">
          <div style={{ "width": "25%", "float": "left" }}>
            <Wipro />
          </div>
          <div style={{ "width": "25%", "float": "left" }}>
            <Altimetric />
          </div>
          <div style={{ "width": "25%", "float": "left" }}>
            <Accenture />
          </div>
          <div style={{ "width": "25%", "float": "left" }}>
            <Hackeranker />
          </div>
          <div style={{ "width": "25%", "float": "left" }}>
            <Persistance />
          </div>
          <div style={{ "width": "25%", "float": "left" }}>
            <Mphasis />
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
