import './App.css';
import React, { useState } from 'react';

function App () {
  const [ score, setScore ] = useState(0); // [0, f]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome! { score }</h1>
      </header>
        <button onClick={() => setScore(prevScore => prevScore + 1 )}>Click me</button>
    </div>
  );
}

export default App;
