import React, { useState } from "react";

const tabRow = (inputNumber) =>{
  let menuItems = [];
    for (var i = 1; i <= inputNumber; i++) {
        menuItems.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{i}</td>
          <td>{i}</td>
        </tr>
        );
    }
    return <div>{menuItems}</div>;
}

function Wipro() {
  const [inputNumber, setInputNumber] = useState(0);
  const sayHello = (e)=> {
    return setInputNumber(e.target.value);
  }
  return (
    <div className="App">
       <h3>Wipro task </h3>
      <div>
    <input type="text" value={inputNumber} onChange ={sayHello}/>
   
    <table>
       <tbody>
    {tabRow(inputNumber)}
    </tbody>
    </table>
    </div>
  
    </div>
  );
}

export default Wipro;
