import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Redirect from './pages/Redirect';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Redirect/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
