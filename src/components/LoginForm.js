import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../features/user';
import {login, logout} from '../features/user';


const LoginForm = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  const user = useSelector((state) => state.user.value);
  const handleChange = (event) =>{
    const {id, value} = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const tryLogin = (event) => {
    event.preventDefault();
    dispatch(loginUser(loginData));
  }
  return (
      <div>
        <form>
          <input
              id='username'
              required
              type='text'
              onChange={handleChange}
          />
          <input
              id='password'
              required
              type='password'
              onChange={handleChange}
          />
          <button onClick={tryLogin}>Login</button>
        </form>
        <h3>{user.username}</h3>
        <h3>{user.isLoggedIn && (<p>true</p>)}</h3>
      </div>
  );
};

export default LoginForm;
