import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  console.log("I run all time.");

  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  return (
    <div>
      <h1>Welcome</h1> 
      <button onClick={onClick}>Click me</button>
      <h3>Clicks: {counter}</h3>
    </div>
  );
}

export default App;
