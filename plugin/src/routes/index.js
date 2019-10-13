import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OauthCodeRequest from '../components/oauth/oauthCodeRequest';
import OauthRedirect from '../components/oauth/oauthRedirect';
import AccessDenied from '../components/accessDenied';
import Main from '../components/main';

import Defaults  from "../../../config/default.json"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' 
              exact={true} 
              component={ Main }
            />
            <Route
              exact path="/oauthCodeRequest"
              component={ () => <OauthCodeRequest authURL={"https://oauth.onshape.com/oauth/authorize?response_type=code&client_id="+ Defaults.onshapeClientId} /> }
              />
            <Route path='/oauthRedirect' component={OauthRedirect} />
            <Route path='/accessDenied' component={AccessDenied} />        
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;