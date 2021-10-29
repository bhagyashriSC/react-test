import React from 'react';
import './style.css';

export default function Sapient() {
  const [inputNo, setinputNo] = React.useState();
  const [addTodo, setaddTodo] = React.useState([]);

  const addItem = () => {
    let arr = [];
    arr = [...addTodo];
    arr.push(inputNo);
    setaddTodo(arr);
  };
  const deleteItem = (value) => {
    const narr = addTodo.filter((item) => item !== value);
    setaddTodo(narr);
  };
  return (
    <div>
      <input
        type="text"
        value={inputNo}
        onChange={(e) => setinputNo(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      {addTodo.map((item) => {
        return (
          <p>
            {item} <button onClick={() => deleteItem(item)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
}
