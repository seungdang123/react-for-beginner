import { useState, useEffect} from 'react';
import styles from "./App.module.css";

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(1);
  const [cryptocurrency, setCryptocurrency] = useState(1);
  const [name, setName] = useState("Plz select coin...");
  

  const onChange = (event) => {
    setCryptocurrency(event.target.value);
    setDollar(1);
    setName(event.target.options[event.target.selectedIndex].text);
    console.log(event);
  };

  const handleInput = (event) => {
    setDollar(event.target.value);
  };

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);


  
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>The Coins! ({coins.length})</h1>

      {loading ? <strong>loading...</strong> : <select onChange={onChange}>
      
      <option>-- Select Coin --</option>

      {coins.map((coin , index) =>
      <option 
        key={index} 
        value={coin.quotes.USD.price} 
        id={coin.symbol}
        symbol={coin.symbol}>
        {coin.name}({coin.symbol})
        </option>
       )};
      </select>}
      <hr />
      <div>
          <h2 className={styles.choice}>{(name === "" ? name : "You choose", name)}</h2>
          <div className={styles.input_container}>
            <input type="number" value={dollar} onChange={handleInput} placeholder="Dollar" if/><span style={{fontSize:"20px"}}>$</span>
          </div>
            <h2 className={styles.result}>= {dollar/cryptocurrency} {(cryptocurrency === 1 ? "$" :  name)}</h2>
      </div>
    </div>
  )
};

export default App;
