import React from 'react'
import { useState } from 'react'
const MyCounter = () => {
    const[count,setCount]=useState(0);
function incrementCount(){
    setCount(count+10);
}
  return (
    <div>
      <h2>Counter Value: {count}</h2>
      <div>
        <button
          style={{ backgroundColor: "blue", fontSize: "30px", borderRadius:"30%" }}
          onClick={incrementCount}
        >
          Increment
        </button> &nbsp;
        <button
          style={{ backgroundColor: "red", fontSize: "30px", borderRadius:"30%" }}
          onClick={() => setCount(count - 20)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default MyCounter