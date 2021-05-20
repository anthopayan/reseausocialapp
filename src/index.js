import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import  './css/style.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import MyProfile from './pages/MyProfile/index';
import  Cookies from 'js-cookie';
import Posts from './pages/Posts/index';








const App = () => {

 if (Cookies.get('jwt')) {
  return (
    <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/MyProfile">
        <MyProfile />
        </Route>
        <Route path="/">
        <Posts />
        </Route>
      </Switch>
    </main>
  </Router>
  );
}

else {
  return (
    <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/login">
        <LogIn />
        </Route>
      </Switch>
    </main>
  </Router>
  );
}
}

ReactDOM.render(<App />, document.getElementById('root'));