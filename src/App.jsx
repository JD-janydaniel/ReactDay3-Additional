import React, { useState } from "react";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";
import CompD from "./Components/CompD";
import CompE from "./Components/CompE";
import CompF from "./Components/CompF";

const App = () => {
  //props
  const a = 10;
  //state
  const [value, setValue] = useState(0);
  const [unit, setUnit] = useState(0);
  const [count, setCount] = useState(0);
  //array example
  let arr = [1, 2, 3, 4, 5];
  const [arrValue,setArrValue]=useState(arr)
  //array of object
  const data =[
    {
      id:1,
      name:"jany daniel",
      age:27
    },
    {
      id:2,
      name:"john duo",
      age:30
    },
    {
      id:3,
      name:"saran",
      age:24
    },
  ]
  const[person,setPerson]=useState(data)
  return (
    <div>
      <h1>Hello World</h1>
      <h2>The value of A from props is:{a}</h2>
      <h2>The value of A from state is:{value}</h2>
      <CompA a={a} />
      <CompB setValue={setValue} value={value} />
      <CompC unit={unit} setUnit={setUnit}/>
      <CompD count={count} setCount={setCount} />
      <CompE setArrValue={setArrValue} arrValue={arrValue}/>
    <CompF setPerson={setPerson} person={person} />
    </div>
  );
};

export default App;
