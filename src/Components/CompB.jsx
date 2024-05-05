import React, { useState } from "react";

const CompB = ({ setValue, value }) => {
  const [status, setStatus] = useState(true);
  const handleInc = () => {
    setStatus(false)
    setValue((initialValue) => initialValue + 1); // a=a+1
  };
  const handleDec = () => {
    setStatus(true)
    if (value > 0) {
      setValue((initialValue) => initialValue - 1); //a =a-1
    }
  };
  return (
    <div>
      <h1>Component using state</h1>
      <h2>The value of A is: {value}</h2>
      {status ? (
        <button className="btn btn-info" onClick={handleInc}>Click to Increment</button>
      ) : (
        <button className="btn btn-warning" onClick={handleDec}>Click to Decrement</button>
      )}<br/>
      <br/>
      <button className="btn btn-info" onClick={handleInc}>Click to Increment</button>
      <button className="btn btn-warning" onClick={handleDec}>Click to Decrement</button>
    </div>
  );
};

export default CompB;
