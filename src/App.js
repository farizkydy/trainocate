import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Children from './children';

function WelcomeMessage({isLoggedIn}) {
  if (isLoggedIn) {
    return <p>Welcome, User!</p>;
  } else {
    return <p>Please log in to continue.</p>;
  }
}


function App() {
  const [count, setCount] = useState(0)
  const [nameObk, setNameObj] = useState([
    {name: 'Fariz', age: 32},
    {name: 'Rizky', age: 16},
    {name: 'Rizaldy', age: 22}
  ])

  const userStatus = null;
  const getStatusStyle = (statusbarStyle) => {
    switch (statusbarStyle) {
      case 'active':
        return {color: 'green'};
      case 'inactive':
        return {color: 'red'};
      default:
        return {color: 'yellow'};
    }
  }
  return (
    <div className="App">
      <WelcomeMessage isLoggedIn={false}/>
      <h2>User Status</h2>
      <p style={getStatusStyle(userStatus)}>Status: {userStatus}</p>
      <p style={{color: 'blue'}}>Warna: {userStatus}</p>
      <h1>Test</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>

      {nameObk.map((item, index) => (
        <Children key={index} item={item}/>
      ))}
    </div>
  );
}

export default App;
