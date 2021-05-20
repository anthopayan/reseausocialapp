import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const MyProfile = () => {
  const history = useHistory();
  const [user, setUser] = useState(0);

  
  useEffect (() => {
    const fetchUserProfile = async () => {
      
      fetch('http://localhost:1337/users/me', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      }).then((response) => response.json())
      .then((response) => {
         setUser(response);
         console.log(response.error)
      }).catch(function() {
        console.log("error");
    });
    }; 
    fetchUserProfile()
  }, []);

  const handleRoute = () =>{ 
    history.push("/login");
  }


  if(user.error === 'Unauthorized'){
    return (
      <>
        <h1>TU N'AS PAS LE DROIT</h1>
        <button onClick={handleRoute}>Log toi petit</button>
      </>
    );
  }else {

 return (
   <>
    <h1>Bonjour voici la page de votre profile</h1>
    <h2>Username : {user.username}</h2>
    <h2>Email : {user.email}</h2>
    <h2>Date de création : {user.created_at}</h2>
  </>
 );
  };
};

export default MyProfile;