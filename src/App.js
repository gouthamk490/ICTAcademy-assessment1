import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Button, Toolbar, Typography} from '@mui/material'
import Navbar from './component/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Form from './component/Form';
import View from './component/View';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path ='/form' element={<Form/>} />
        <Route path ='/view' element={<View/>} />
      </Routes>
    </div>
  );
}

export default App;
