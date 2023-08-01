import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {child, get, getDatabase, ref} from 'firebase/database';

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  const params = useParams();
  const [profile, setProfile] = useState({
    username: params.username,
    followers: 0,
    following: 0,
    profilePicture: '',
  })


  const fetchProfile = async () => {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `/${profile.username}`));
    if (snapshot.exists()) {
    }
    setProfile(snapshot.val());
    if(snapshot.val().profilePicture.length !== 0){
      const imageData = `data:image/jpeg;base64,${snapshot.val().profilePicture}`;
      setProfile((prevState) => ({
        ...prevState,
        profilePicture: imageData,
      }))
    }
  }

  useEffect(() => {
    fetchProfile();
  }, [])

  return (
      <div>
        {profile.profilePicture.indexOf('data:image') !== -1 && (
            <div>
              <img src={profile.profilePicture} alt="Preview" width="600" />
            </div>
        )}
        <h3>{params.username}</h3>
        <h4>followers: {profile.followers}</h4>
        <h4>following: {profile.following}</h4>
        <div>
          {user.username === params.username
              ?<button>edit profile</button>
              :<button>follow</button>
          }
          <button>copy profile link</button>
        </div>

        {/*<div>*/}
        {/*  <input type="file" onChange={handleImageInputChange} />*/}
        {/*  <textarea*/}
        {/*      value={base64}*/}
        {/*      onChange={handleBase64Change}*/}
        {/*      placeholder="Base64 will be shown here"*/}
        {/*      rows="4"*/}
        {/*      cols="50"*/}
        {/*  />*/}
        {/*  <br />*/}
        {/*  <button onClick={convertFromBase64}>Convert from Base64</button>*/}
        {/*</div>*/}
      </div>
  );
};

export default Profile;
