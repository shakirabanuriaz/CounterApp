import "./Counter.css";
import { useState } from "react";

function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
    // count = count + 1;
    console.log("Count is now :", count);
  }

  function handleDecrease() {
    setCount(count - 1);
    // count = count + 1;
    console.log("Count is now :", count);
  }

  function handleReset() {
    setCount(0);
    // count = count + 1;
    console.log("Count is now :", count);
  }
  return (
    <div className="counter">
      <div>{count}</div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <p className="msg">
        {count >= 10 && "Amazing you have reached the count of 10"}
      </p>
    </div>
  );
}

export default Counter;
