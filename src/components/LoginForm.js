import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../features/user';
import {useNavigate} from 'react-router-dom';


const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) =>{
    const {id, value} = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  useEffect(() => {
    if (user.isLoggedIn) navigate(`/profile/${user.username}`);
  })


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
      </div>
  );
};

export default LoginForm;
