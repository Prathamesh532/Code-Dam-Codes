import React, { useState } from "react";

const Counter = () => {
  const [count, setCout] = useState(0);

  const HandleIncremenet = () => {
    setCout(prev => prev + 1)
  }

  const HandleDecrement = () => {
    setCout(prev => prev - 1)
  }


  return (
    <div>
      <p>{count}</p>
      <button onClick={HandleIncremenet}>Increment</button>
      <button onClick={HandleDecrement}>Decrement</button>

      <p>On Mouse Hover</p>
      <button onMouseEnter={()=>setCout(count + 1)}>Hover </button>
    </div>
  );
};

export default Counter;
