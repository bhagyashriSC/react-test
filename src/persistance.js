import React from "react";
//count words in input field while typing without space

function Persistance() {
const [word, setWord]= React.useState();
const countTextLength =(e)=>{  
  setWord(e.target.value.trim());
}
  return (
    <div>
        <h3>Persistance</h3>
     <input type="text" onChange={countTextLength} />
     <p>{word && word.split(' ').length} </p>
    </div>
  );
}


export default Persistance;