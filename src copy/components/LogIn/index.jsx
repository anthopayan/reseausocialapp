import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';
import Field from '../elements/field/index';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie'
function SignUp  () {
    const API_URL = "http://localhost:1337/auth/local"
  
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    var value = 'jwt';
    

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const onChangePassword = (event) => {
        setPassword(event.target.value);
      };

      const onRefresh = () => {
        window.location.reload(false)
        return (
          <Redirect to="/"/>
          
        )
      };


      const onSend = (event) => {
        event.preventDefault();
    const data = {
        identifier: email,
        password: password
      };
      
      fetch(API_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then (response => response.json())
      .then((response) => {
        console.log(response)
        Cookies.set('jwt', response.jwt, { expires: 7 });
        Cookies.set('username', response.user.id, { expires: 7 });
      })
     setTimeout(onRefresh, 1000);
    };
   
    return (
<div className="formcontainer">
   <form className="signUp signform" >
   <h3 className="titleform">Log in</h3>
		<p ><br></br>

		</p>

  <Field name="email" value={email} onChange={onChangeEmail} placeholder="Enter your Email"></Field>
  <Field name="password" value={password} onChange={onChangePassword} placeholder="Insert Password"></Field>
   
   
   <input className="submitbt" type = "submit" onClick={onSend} value = "Submit"></input>
   </form>
 </div>
    );
    
}
export default SignUp;



 
  