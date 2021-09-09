import React from "react";
const inputCities = [
  'Mumbai',
  'Bangalore',
  'Mumbai',
  'Delhi',
  'Coimbatore',
  'Paris',
  'London',
  'Bangalore',
  'Mumbai',
  'London',
  'Delhi'
];
function Altimetric() {
  var city = {};
  inputCities.forEach((item) => {
    city[item] = city[item] ? (city[item] += 1) : 1;
  })
  console.log(city)
  Object.keys(city).map((cityName, index) => {
    console.log(cityName, index);   
  })
  return (
    <div>
      {
        Object.keys(city).map((keyName, i) => (         
          <p key={i}><span>{keyName} : {city[keyName]}</span></p>
        ))
      }
    </div>             
  );
}

 export default Altimetric;
