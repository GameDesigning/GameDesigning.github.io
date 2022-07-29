// import { render } from '@testing-library/react';
import './App.css';
import React, {useState} from 'react';

// var start = Date.now()

function App() {
  
  const [chickRate, setChickRate] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  setInterval(function(){
      setTotalMoney(chickRate + totalMoney);
  }, 1000);

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Farm Idle Game</h1>
        <button type="button" onClick={() => setChickRate(chickRate + 1)}>Click to increase chicken production rate</button>
        <p>Chickens Making: {chickRate} per second <br></br>
          Total Money {totalMoney}</p>
      </header>
    </div>
  );
}

export default App;
