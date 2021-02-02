import React, { useState } from "react";

function Counter() {
  // using array destructing to access useState array elements
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount(count + 1);
  // }

  // return <button onClick={increment}>I have been clicked {count} times</button>;

  function increment() {
    // callback version of setCount --> offsets asychronous nature of setCount
    // anytime we need to set state based on current value of state --> use callback syntax
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  }

  return <div onClick={increment}>{count}</div>;

}

export default Counter;
