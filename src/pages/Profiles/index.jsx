import React from 'react';
import Cookies from 'js-cookie'



function Profiles() {
    const token = Cookies.get('jwt');
    const [messageliste, setWorkName] = React.useState({liste: [], isFetching: false});
    const legnthliste = messageliste.liste.length;
    const API_URL = "http://localhost:1337/users";

 
   
    
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
console.log(response)
    if (response.error !== 404){
        const responselength = response.length;
        
      if (legnthliste !== responselength) {
          console.log(response);
  setWorkName({liste: response.map((a, i) => <div id={a.id} key={a.id}>Nom d'utilisateur: {a.username}<br></br>Email: {a.email}<br></br><br></br><br></br><br></br></div>), isFetching: false});
  
  }
    };
  });
   

    return (
        

        <div>
            {messageliste.liste}
            
        </div>
        );
    }

    export default
        Profiles;
       
      



      
    