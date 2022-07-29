import { render } from '@testing-library/react';
import './App.css';

const multiplier = 0;


function App() {

  function chickClick() {
    multiplier = multiplier + 1;
  }

  return (
    <div className="App" >
      <header className="App-header">
        <h1>Farm Idle Game</h1>
        <button type="button" onClick={chickClick}>Click Me!, {multiplier}</button>
      </header>
    </div>
  );
}

export default App;

// style={{backgroundImage: `url(${background})`}}