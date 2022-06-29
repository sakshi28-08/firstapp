import React, { useState } from "react";

const EventHandling = () => {
  let count = 1;

  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log("button was clicked");
    console.log("You can pass as many lines as you want");
  };

  const increment = () => {
    count++;
    console.log(count);
  };

  const incrementState = () => {
    console.log(num);
    setNum(num + 1);
  };

  return (
    <div>
      <h1>EventHandling</h1>
      <hr />

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <button
              className="btn btn-primary"
              onClick={() => alert("You Clicked that button")}
            >
              Using Inline Function
            </button>
            <button className="btn btn-secondary" onClick={handleClick}>
              Using External Function
            </button>
            <button className="btn btn-success" onClick={increment}>
              Increment Count
            </button>
            <h1>{count}</h1>

            <button className="btn btn-primary mt-5" onClick={incrementState}>
              Update State
            </button>
            <h1>{num}</h1>
            <input
              className="form-control"
              onChange={(event) => {
                console.log(event.target.value);
                setText(event.target.value);
              }}
            />
            
            
           
           </div> 
          </div>
        </div>
      </div>
    
  )
}

export default EventHandling;
