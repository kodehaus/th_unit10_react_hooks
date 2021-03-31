import './App.css';
import React, { useState, useEffect } from 'react';
const url = 'https://dog.ceo/api/breeds/image/random';

function App () {
  const [ score, setScore ] = useState(0); // [0, f]
  const [message] = useState('Welcome');
  const [data, setData] = useState('');
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log('Oh noes!' + {score}, err))
  },[score]);
  return (
    <div className="App">
      <h1>The score is: {score}</h1>
      <img src={data} alt="A random dog breed" /><br/>
      <button onClick={() => setScore(prevScore => prevScore + 25 )}>Click me</button>
    </div>
  );
}

export default App;
