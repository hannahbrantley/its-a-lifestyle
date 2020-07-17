import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  /*--- Callback Methods ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/
  render() {
    return (
      <div>
        <header className='header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
        <Switch>
          <Route exact path='/' render={() =>
            userService.getUser() ?
            <div>You are logged in</div>
            :
            <Redirect to='/login' />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

