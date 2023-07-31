import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Redirect = () => {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.isLoggedIn) navigate('/login');
    if(user.isLoggedIn) navigate(`/profile/${user.name}`);
  })

  return (
      <div>

      </div>
  );
};

export default Redirect;
