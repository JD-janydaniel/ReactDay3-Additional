import React from "react";

const CompF = ({ setPerson, person }) => {
    hand
  return (
    <div>
      <h1>Component F display Array of Object using State</h1>
      {person.map((element, index) => {
        return (
          <div key={element.id}>
           <h2>{element.name}</h2> 
            <h2>{element.age}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CompF;
