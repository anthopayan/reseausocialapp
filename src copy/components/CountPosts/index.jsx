import React from 'react';
import Cookies from 'js-cookie'

function CountPosts() {
    const token = Cookies.get('jwt');
    const [messageliste, setWorkName] = React.useState({count: [], isFetching: false});
    const legnthliste = messageliste.count.length;
    const API_URL = "http://localhost:1337/posts/count";
    
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
 setWorkName({count: (response), isFetching: false});
  
  }
    };
  });
   

    return (
        

        <div>
          Nombre de posts:  {messageliste.count}
        </div>
        );
    }

    export default CountPosts;