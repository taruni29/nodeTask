/**
 * External dependencies
 */
import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,Switch
} from 'react-router-dom'

/**
 * Internal dependencies
 */
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import Thankyou from './components/Thankyou';

class App extends Component {

  render() {
    return (
      <Router>
         <Switch>
           <Route exact path="/" component={SignIn}/>
           <Route exact path="/signup" component={SignUp}/>
           <Route exact path="/signin" component={SignIn}/>
           <Route exact path="/welcome" component={Welcome}/>
           <Route exact path="/thankyou" component={Thankyou}/>
         </Switch>
       </Router>
    );
  }
}

export default App;
