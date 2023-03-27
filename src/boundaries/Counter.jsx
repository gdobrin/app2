import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(2);

  const counterClickHandler = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  if (count <= 0) {
    throw new Error("Counter threw an error!");
  }

  return (
    <button onClick={(e) => counterClickHandler(e)}>
      Throw Error in {count} clicks.
    </button>
  );
};

export default Counter;