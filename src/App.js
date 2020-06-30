import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
          <h1 className="site-title"><del>To All The Voice I Loved Before</del> </h1>
          <div className="header-right">
            <img src={logo} alt="Italian Trulli" width="10" height="10" />
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
