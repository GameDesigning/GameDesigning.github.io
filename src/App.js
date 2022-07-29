import './App.css';

function App() {

  // chickenClick = () 
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Farm Idle Game</h1>
        <button type="button" onClick={chickenClick}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;

// style={{backgroundImage: `url(${background})`}}