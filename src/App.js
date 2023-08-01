import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Redirect from './pages/Redirect';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Redirect/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route exact path='/profile/:username' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
