import React, { useState } from 'react';
import styles from './css/styles.css';
import Field from '../elements/field/index';
import jwt_decode from 'jwt-decode';



function SignUp  () {
    const API_URL = "http://localhost:1337/auth/local/register"
    const [firstname, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const onChangeEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const onChangePassword = (event) => {
        setPassword(event.target.value);
      };

      const onChangeFirstName = (event) => {
        setFirstName(event.target.value);
      };


      const onSend = (event) => {
        event.preventDefault();
    const data = {
        username: firstname,
        email: email,
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
      })
      window.location.reload(false);
    };

    return (
<div className="formcontainer">
   <form className="signUp signform" >
   <h3 className="titleform">Create Your Account</h3>
		<p ><br></br>

		</p>

  <Field name="firstname" value={firstname} onChange={onChangeFirstName} placeholder="Insert Your First Name"></Field>
  <Field name="email" value={email} onChange={onChangeEmail} placeholder="Enter your Email"></Field>
  <Field name="password" value={password} onChange={onChangePassword} placeholder="Insert Password"></Field>
   
   
   <input className="submitbt" type = "submit" onClick={onSend} value = "Submit"></input>
   </form>
 </div>
    );
    
}
export default SignUp;



 
  