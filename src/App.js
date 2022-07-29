// import { render } from '@testing-library/react';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [chickRate, setChickRate] = useState(0);

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Farm Idle Game</h1>
        <button type="button" onClick={() => setChickRate(chickRate + 1)}>Click to increase chicken production rate</button>
        <p>Chickens Making: {chickRate} per second</p>
      </header>
    </div>
  );
}

export default App;
