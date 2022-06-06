import React, { useState } from "react";

const New = () => {
  const [count, setCount] = useState("World");

  // useEffect(() => {}, [count]);

  const clickEvent = () => {
    count === "World" ? setCount("Akshay") : setCount("World");
  };

  return (
    <div>
      <h1>Hello {count}</h1>
      <button onClick={clickEvent}> click me</button>
    </div>
  );
};

export default New;
