import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <h1>hello {counter}</h1>
      <button onClick={handleClick}>plus</button>
    </div>
  );
}
