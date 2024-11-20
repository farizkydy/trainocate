import './App.css';
import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App;
