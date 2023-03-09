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
    <div className="bigContainer">
    <div className="App">
      <div className="mainContainer">
      <h1>ezMoney!</h1>

      
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
      <div className="container">
      <table class="table table-bordered table-sm">

        <tr>
          <th scope="col">Expense/Income</th>
          <th scope="col">Amount</th>
        </tr>
        
        
        {bills.map(bill=>(
          <tr>
          <td >{bill.name}</td>
          <td >{bill.amount}</td>
          </tr>
          ))}
          
        
      </table>
      
      <h2>{total}</h2>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
