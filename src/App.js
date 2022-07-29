// import { render } from '@testing-library/react';
import './App.css';
import React, {useState} from 'react';

// const multiplier = 0;
// const chickenRate = 0;
// const total = 0; 


function App() {
  
  const [chickRate, setChickRate] = useState(0);

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Farm Idle Game</h1>
        <button type="button" onClick={() => setChickRate(chickRate + 1)}>Click Me!, {chickRate}</button>
      </header>
    </div>
  );
}

export default App;

// style={{backgroundImage: `url(${background})`}}