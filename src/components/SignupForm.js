import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {child, getDatabase, ref, get, set} from 'firebase/database';

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
    repeatedPassword: '',
    errors: [],
  })
  const navigate = useNavigate();
  const handleChange = (event) => {
    const {id, value} = event.target;
    setSignupData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const checkUsernameExists = async () => {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `/${signupData.username}`)).then((snapshot) => {
      if (snapshot.exists()) {
        signupData.errors.push('username already exists');
        return true;
      } else {
        return false;
      }
    }).catch((error) => {
      console.error(error);
      return false;
    });
  }

  const checkErrors = async () => {
    if(signupData.password !== signupData.repeatedPassword) signupData.errors.push('passwords are not the same');
    if (signupData.username.length < 8) signupData.errors.push('username is too short');
    if (signupData.password.length < 4) signupData.errors.push('password is too short');
    if(signupData.username === 'jojonoskill') signupData.errors.push('its my username!!!!');
    await checkUsernameExists();
    setSignupData((prevState) => ({
      ...prevState,
    }));
  }

  const signupUser = async (event) => {
    event.preventDefault();
    signupData.errors = [];
    await checkErrors();
    console.log(signupData.errors);
    if(signupData.errors.length !== 0) return;

    const db = await getDatabase();
    set(ref(db, '/' + signupData.username), {
      username: signupData.username,
      password: signupData.password,
      followers: 0,
      following: 0,
    }).then(() => {
      alert('succesful registration');
      navigate('/login');
    })
  }

  return (
      <div>
        <form>
          <input
            id='username'
            type='text'
            placeholder='username(login)'
            onChange={handleChange}
            />
          <input
              id='password'
              type='password'
              placeholder='password'
              onChange={handleChange}
          />
          <input
              id='repeatedPassword'
              type='password'
              placeholder='repeat password'
              onChange={handleChange}
          />
          <button onClick={signupUser}>Sign up!</button>
        </form>
      </div>
  );
};

export default SignupForm;
