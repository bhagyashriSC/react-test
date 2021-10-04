import React from "react";


function HackerAnkerTwoString() {
  /*------------------------------
  str1 = ABC | str1 = BC 
  str2 = BC  | str2 = BANGALORE
  op1 = A    | op1 = C
  op2 = null | op2 = ANGLORE
  ---------------------------------*/
  const str1 = "BC".split(''); // convering string to array
  const str2 = "BANGALORE".split(''); //convering string to array
  var op1 = [];  //C        
  var op2 =[];  // ANGLORE 
  
  for(let i=0; i<=str1.length; i++){    
      if(!str2.includes(str1[i])) {
        op1.push(str1[i])     
      }    
  }
  for(let i=0; i<=str2.length; i++){    
      if(!str1.includes(str2[i])) {
        op2.push(str2[i])     
      }   
  }
  return (
    <div>
      <h3>hacker Anker Two String (with api)</h3>
      <p>{op1 && op1.join('')}</p>
      <p>{op2 && op2.join('')}</p>
    </div>
  );
}
export default HackerAnkerTwoString;