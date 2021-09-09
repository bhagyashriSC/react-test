import React, { useState } from "react";

function Hackeranker() {
    const [name, setName] = useState();
    var timer;
    const clikedOk = () => {
        timer = setTimeout(() => {
            alert("clicked me!");
        }, 3000)
    }
    const clikedCancle = () => {
        clearTimeout(timer);
    }
    return (
        <div>
            <h3>Hackeranker task </h3>
            <p>Ok and cancle button. if click on ok will get Hello clicked after 5s and if clicked cancle in between will not show hello clicked</p>
            <form>
                <button type="button" onClick={clikedOk}>Click Me!</button>
                <button type="button" onClick={clikedCancle}>Cancle Me!</button>
            </form>
        </div>
    );
}

export default Hackeranker;
