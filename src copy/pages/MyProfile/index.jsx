import React, { useState } from 'react';
import Cookies from 'js-cookie'

function MyProfile  () {
  const token = Cookies.get('jwt');
const API_URL = "http://localhost:1337/users/me"
const [profile, setWorkProfile] = React.useState({content: []});
const legnthliste = profile.content;

      fetch(API_URL, {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      })
    .then((response) => response.json()) 
    .then(function(response) {
  

          const responseusername = response.username;

          if (legnthliste !== responseusername) {
            if (response.error !== 404){
              console.log(response)
          setWorkProfile({content: (response.username)});

          };

      };
    });








    return (
<div>
{profile.content}
</div>
    );
    
}
export default MyProfile;



 
  