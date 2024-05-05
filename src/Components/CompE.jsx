import React from 'react';

const CompE = ({setArrValue,arrValue}) => {
    const handleRemove= (indexPos)=>{
        setArrValue((initialValue)=>initialValue.filter((element,index)=>index!==indexPos))
    }
    return (
        <div>
            <h1>Component for Array using State</h1>
            <h2>Array values is:</h2>
            {arrValue.map((element,index)=>{
                return(
                    <>
                    <div key={index}>
                        <h2>{element}</h2>
                        <button onClick={()=>{handleRemove(index)}}>Remove</button>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default CompE;