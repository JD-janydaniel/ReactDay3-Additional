import React, { useState } from "react";

const CompD = ({ count, setCount }) => {
  const [status, setStatus] = useState(true);
  const handleInc = () => {
    setStatus(false)
    setCount((initialCount) => initialCount + 1);
  };
  const handleDec = () => {
    setStatus(true)
    if (count > 0) {
      setCount((initialCount) => initialCount - 1);
    }
  };
  return (
    <div>
      <h1>Component D to display Counter and conditional rendering using State</h1>
      <h2>The values of count is: {count}</h2>
      {status ? (
        <button className="btn btn-warning " onClick={handleInc}>
          Click to Increment
        </button>
      ) : (
        <button className="btn btn-dark" onClick={handleDec}>
          Click to Decrement
        </button>
      )}
    </div>
  );
};

export default CompD;
