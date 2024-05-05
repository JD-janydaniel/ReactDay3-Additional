import React from "react";

const CompC = ({ unit, setUnit }) => {
  const handleInc = () => {
    setUnit((initialValue) => initialValue + 1);
  };
  const handleDec = () => {
    if (unit > 0) {
      setUnit((initialValue) => initialValue - 1);
    }
  };
  return (
    <div>
      <h1>Component C to display Counter using State</h1>
      <h2>The values of unit is: {unit}</h2>
      <button className="btn btn-info " onClick={handleInc}>
        Click to Increment
      </button>
      <button className="btn btn-danger mx-2" onClick={handleDec}>
        Click to Decrement
      </button>
    </div>
  );
};

export default CompC;
