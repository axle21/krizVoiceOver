import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* Components */
import Home from './components/home';
import Player from './components/player';
import './styles/header.css';


const App = () => {
    


  return (
    <React.Fragment>
    <header className="masthead clear">
      <div className="centered">
        <div className="site-branding">
          <h1 className="site-title">To All The Voice I Loved Before 
          {/* <img src={logo} alt="Italian Trulli" width="50" height="50" /> */}
          </h1>
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
