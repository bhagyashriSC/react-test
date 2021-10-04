import React from 'react';
import axios from 'axios';

function ApiCallTask() {
  const [list, setlist] = React.useState([1, 3, 10]);
  const [id, setId] = React.useState(0);
  const [emailId, setEmailId] = React.useState('Select from dropdown');
  const [showSearched, setSearched] = React.useState([]);

  const handleChange = (e) => {
    setId(e.target.value);
    axios
      .get(`https://reqres.in/api/users/${e.target.value}`)
      .then((response) => {
        showSearched.push(response.data.data.email);
        setEmailId(response.data.data.email);
      });
  };

  return (
    <div>
        <h3>api Call Task</h3>
      <select value={id} onChange={handleChange}>
        <option>All</option>
        {list.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <p>
        Show by ID : <span>{emailId}</span>
      </p>
      <p>Visited Email Id</p>
      <hr />
      {[...new Set(showSearched)].map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}
export default ApiCallTask;