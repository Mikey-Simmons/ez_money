import './App.css';
import {React, useState} from 'react'
function App() {
  const [amount, setAmount] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setAmount(amount);
    bills.push(amount);
    console.log(bills);
    for(var i =1;i<bills.length;i++){
      var total = parseInt(bills[i])+parseInt(bills[i-1]);
    }
    console.log(total)
  }
  var bills = [];
  
  return (
    <div className="App">
      
      <h1>Welcome to ezMoney!</h1>

      <h2>An easy to use budget management application.</h2>
      <h2>{amount}</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(event)=> setAmount(event.target.value)} id='amounted' name='amounted'></input>
        <button   type="submit">Add</button>

      </form>
      
      
    </div>
  );
}

export default App;
