import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
/* Components */
import Home from './components/home';
import Player from './components/player';
import logo from './image/logo.png';
import './styles/header.css';

const App = () => {
    


  return (
    <React.Fragment>
    <header className="masthead">
      <div className="centered">
        <div className="site-branding">
          <h1 className="site-title"><del>To All The Voice I've Loved Before</del> </h1>
          <div className="header-right">
          <Link to="/"><img src={logo} alt="Logo" width="10" height="10" /></Link>
            
          </div>


           

        </div>
      </div>
    </header>
    <Switch>
    <Route path="/player">
      <Player />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
  </React.Fragment>
  );

}

export default App;
