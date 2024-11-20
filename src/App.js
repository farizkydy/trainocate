import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Children from './children';

function WelcomeMessage({isLoggedIn}) {
  
}


function App() {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("male")
  const inputRef = useRef();
  const [error, setError] = useState("")
  const [dataUser, setDataUser] = useState([])
  const [checkBox, setCheckBox] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length < 3) {
      setError('Please input minimal 3 characters')
    } else if (!gender) {
      setError('Please choose a gender')
    } else {
      setError('')
      setName('')
      setGender('male')
      const newUser = {
        name,
        gender
      }
      setCheckBox(!checkBox)
      setDataUser([...dataUser, newUser])
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Gender:
          <input type="radio" name="gender" value="male" 
          onChange={(e) => setGender(e.target.value)}/>
          Male  
          <input type="radio" name="gender" value="female" 
          onChange={(e) => setGender(e.target.value)}/>
          Female
        </label>
        <label>
          Name:
          <input type="text" name="name" value={name} placeholder='Input Your Full name'
          onChange={(e) => setName(e.target.value)}
          />
          {error && <p style={{color: 'red'}}>{error}</p>}
        </label>
        <label>
          Terms of Service
          <input type="checkbox" name="terms" value={checkBox} />
          {checkBox ? "Agree" : "Not Agree"}
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>List Users</h2>
      {dataUser.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {dataUser.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>There is no data</h3>
      )} 
    </div>
  );
}

export default App;
