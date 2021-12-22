import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  }

  console.log("I run all time.");

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    if (keyword != "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);

  useEffect(() => {
    if (counter != 0){
      console.log("I run when 'counter' changes.");
    }
  }, [counter]);

  useEffect(() => {
      console.log("I run when 'keyword' & 'counter' change.");
  }, [keyword, counter]);

  return (
    <div>
      <h1>Welcome</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <button onClick={onClick}>Click me</button>
      <h3>Clicks: {counter}</h3>
    </div>
  );
}

export default App;
