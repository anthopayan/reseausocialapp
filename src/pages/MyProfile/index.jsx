import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";


const MyProfile = () => {

  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/login");
  }

  const [user, setUser] = useState(0);
  useEffect (() => {
    fetch('http://localhost:1337/users/me', {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${Cookies.get('jwt')}`, 
      'Content-Type': 'application/json'
    }})
    .then((response) => response.json())
    .then((response) => setUser(response))
    .catch((error) => {
      console.log('error')})
  }, [])  

  if (Cookies.get('tokenLogin')) {
    return (
      <>
      <h1>Profile</h1>
      <p>UserName : {user.username}</p>
      <p>Email : {user.email}</p>
      <p>Description : {user.description}</p>
      </>
    )}
  else {
    return (
      <>
      <h1>Profile</h1>
      <p>Connectez-vous chenapan !</p>
      <button
            onClick={handleRoute}>
              Connectez-vous !
          </button>      </>
    )}
  }

export default MyProfile;
