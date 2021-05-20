import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';



export const Navbar = () => {

  const onExit = () => {
    Cookies.remove('jwt');
    Cookies.remove('username');
    Cookies.remove('showuser');
    window.location.reload(false);
  };

  if (Cookies.get('jwt')) {
return (
<div>
<nav className="navbar navbar-expand-lg  " >
  <div className="container-fluid" >
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/MyProfile">Mon profil</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/">Les Posts</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page"  to="/users">Les Profils utilisateurs</Link>
        </li>
        <li className="nav-item">
        <button className="nav-link active btdec" onClick={onExit}>Se déconnecter</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
);
  }
  else {
    return (
      <div>
      <nav className="navbar navbar-expand-lg  " >
        <div className="container-fluid" >
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to="/signup">Inscription</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to="/login">Se connecter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      );

  }
}

