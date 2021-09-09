import React, { useState } from "react";

function Accenture() {
    const [name, setName] = useState();
    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = () => {
        alert('A name was submitted: ' + name);
        console.log(window)
    }
    return (
        <div>
            <h3>Accenture task </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Accenture;
