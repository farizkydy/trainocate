import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Children from './children';

function WelcomeMessage({isLoggedIn}) {
  
}


function App() {
  const [name, setName] = useState(" Mr.")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama anda terdaftar sebagai ${name}`);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Gender:
          <input type="radio" name="gender" value="male" />
          Male  
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          Name:
          <input type="text" name="name" value={name} 
          onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
