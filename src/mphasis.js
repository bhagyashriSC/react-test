import React from "react";
//fabonisis series on click

function Mphasis() {
    var [prv, setPrv] = React.useState(1);
    var [newVal, setnewVal] = React.useState(1);
    
    const addMe = ()=>{    
      setnewVal(prv + newVal);
      setPrv(newVal)    
    }
    console.log(prv,newVal)
    return (
      <div>
          <h3>Mphasis</h3>
       <button onClick={addMe}>Click</button>
       <p>{newVal}</p>
      </div>
    );
}


export default Mphasis;