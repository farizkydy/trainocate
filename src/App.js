import './App.css';
import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar />
        <AppRoutes />
      </div>
    </Provider>
    
  )
}

export default App;
