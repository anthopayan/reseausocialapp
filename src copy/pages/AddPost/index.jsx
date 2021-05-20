import React from 'react';
import Cookies from 'js-cookie'
import Field from '../../components/elements/field';



function AddPost() {
    const token = Cookies.get('jwt');
    const username = Cookies.get('username');
    const API_URL = "http://localhost:1337/posts";
    const [content, setContent] = React.useState("");

    const onCreateContent = (event) => {
        setContent(event.target.value);
      };

    

      const onSend = (event) => {
       
        event.preventDefault();
        const data = {
            text: content,
           user: username
          };

    fetch(API_URL, {
        method: 'post',
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

    return (
        
        <div className="right">
            <form className="signUp signform" >
   <h3 className="titleform">Créer un post</h3>
		<p ><br></br>

		</p>

  <Field name="content" value={content} onChange={onCreateContent} placeholder="Enter text"></Field>
   
   <input className="submitbt" type = "submit" onClick={onSend} value = "Submit"></input>
   </form>
        </div>
        );
    }

    export default AddPost;