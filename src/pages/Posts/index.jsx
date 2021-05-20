import React from 'react';
import Cookies from 'js-cookie'
import CountPosts from '../../components/CountPosts/index';
import AddPost from '../AddPost';
import Field from '../../components/elements/field/index';


function Posts() {
    const token = Cookies.get('jwt');
    const [messageliste, setWorkName] = React.useState({liste: [], isFetching: false});
    const legnthliste = messageliste.liste.length;
    const API_URL = "http://localhost:1337/posts";

    const onDelete = (e) => {
       const urlpost = `http://localhost:1337/posts/${e.target.id}`
        
       
        fetch(urlpost, {
            method: 'delete',
            headers: {
              'Authorization': `Bearer ${token}`, 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify()
          })
      .then((response) => response.json()) 
      .then(function(response) {
        if (response.error !== 404){
           
        };
      });
      window.location.reload(false);
      };

      const onLike = (e) => {
        const urlpost = `http://localhost:1337/posts/${e.target.id}`
        var deflike = 0;
        const currentlike = e.target.like;
        console.log(currentlike)
        if (currentlike === undefined) {
            deflike = 0;
        }
        else {
           deflike =  currentlike;
        }
       
        const resultlike = deflike + 1;
       
        e.preventDefault();
        const data = {
            like: resultlike,
          };

    fetch(urlpost, {
        method: 'put',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
  .then((response) => response.json()) 
  .then(function(response) {
    if (response.error !== 404){
       
    };
    
  });
  window.location.reload(false);
};

const onDisLike = (e) => {
    const urlpost = `http://localhost:1337/posts/${e.target.id}`
    var deflike = 0;
    const currentlike = e.target.like;
    const resultlike = 0;
    console.log(currentlike)
    if (currentlike === undefined) {
        deflike = 0;
    }
    else {
       deflike =  currentlike;
       resultlike = deflike - 1;
    }
   
    
   
    e.preventDefault();
    const data = {
        like: resultlike,
      };

fetch(urlpost, {
    method: 'put',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
.then((response) => response.json()) 
.then(function(response) {
if (response.error !== 404){
   
};

});
window.location.reload(false);
};
      
      const onChange = (e) => {/* 
          const id = e.target.id;
        const username = Cookies.get('username');
        const [content, setContent] = React.useState("");
        const onChangeContent = (event) => {
            setContent(event.target.value);
          };
        const onSendChange = (event) => {
            const urlpost = `http://localhost:1337/posts/${id}`

       
            event.preventDefault();
            const data = {
                text: content,
               user: username
              };
    
        fetch(urlpost, {
            method: 'put',
            headers: {
              'Authorization': `Bearer ${token}`, 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
      .then((response) => response.json()) 
      .then(function(response) {
        if (response.error !== 404){
           
        };
      });
    
    };


        
        return (
        
            <div className="right">
            <form className="signUp signform" >
   <h3 className="titleform">Modifier le post</h3>
		<p ><br></br>

		</p>

  <Field name="content" value={e.target.text}  placeholder="Enter text"></Field>
   <input className="submitbt" type = "submit"  value = "Submit"></input>
   </form>
        </div>

        );
*/
       
        console.log(e.target.id)
      };




    
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
  setWorkName({liste: response.map((a, i) => <div id={a.id} key={a.id}>Contenue: {a.text}<br></br>Nombre de likes: {a.like}<br></br>Auteur: {a.user.username}<br></br>Créé le: {a.user.created_at}<br></br><button id={a.id} onClick={onDelete} type="button" className="btn btn-danger">Supprimer</button> <button id={a.id} onClick={onChange} type="button" className="btn btn-warning">Modifier</button> <button id={a.id} type="button" onClick={onLike} className="btn btn-outline-dark">Like</button> <button id={a.id} type="button" onClick={onDisLike} className="btn btn-outline-dark">Dislike</button><br></br><br></br><br></br></div>), isFetching: false});
  
  }
    };
  });
   

    return (
        

        <div>
            <AddPost />
          {messageliste.liste}
          <CountPosts />
        </div>
        );
    }

    export default Posts;