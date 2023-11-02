import './App.css';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import PickWinner from './Pages/PickWinner.js';
import { WagmiConfig } from 'wagmi';
import { Wallpaper } from '@mui/icons-material';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/winner' element={<PickWinner/>}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
