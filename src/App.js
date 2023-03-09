import "./App.css";
import { React, useState } from "react";
function App() {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [bills, setBills] = useState([]);
  const handleSubmit = (event) => {
    setAmount(parseInt(event.target.value));
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleClick = () => {
    setBills([...bills, { name:  name , amount: parseInt( amount ) }]);
    setTotal(total + amount);
    console.log(bills);
  };

  return (
    <div className="App">
      <h1>Welcome to ezMoney!</h1>

      <h2>An easy to use budget management application.</h2>

      <h2>{total}</h2>
      <ul>
        {bills.map(bill=>(
          <li> {bill.name}{bill.amount}</li>
        ))}
      </ul>
      <input
        type="number"
        id="amount"
        onChange={handleSubmit}
        name="amount"
      ></input>
      <input type="text" id="name" onChange={e => setName(e.target.value)} name="name"></input>
      <button onClick={handleClick} type="submit">
        Add
      </button>
    </div>
  );
}

export default App;
