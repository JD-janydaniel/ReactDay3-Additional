import React from "react";

const CompA = ({ a }) => {
  const handleSubmit = () => {
    a += 1;
    console.log(a)
  };
  return (
    <div>
      <h1>Component using props</h1>
      <h2>The value of A is: {a}</h2>
      <button className="btn btn-info" onClick={handleSubmit}>Click</button>
    </div>
  );
};

export default CompA;
