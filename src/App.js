import './App.css';
import React, { useState, useEffect } from 'react';

function App () {
  const [ score, setScore ] = useState(0); // [0, f]
  const [message] = useState('Welcome');
  useEffect(() => {
    document.title = `${message}. Your score is ${score}`;
  },[score]);
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
