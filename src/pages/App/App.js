import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddCompetitionPage from '../AddCompetitionPage/AddCompetitionPage';
import userService from '../../utils/userService';
import * as competitionService from '../../utils/competitionsService';

class App extends Component {
  state = {
    competitions: [],
    user: userService.getUser(),
  }


  /*--- Callback Methods ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddCompetition = async newCompetitionData => {
    const newComp = await competitionService.create(newCompetitionData);
    this.setState(state => ({
      competitions: [...state.competitions, newComp]
    }),
    () => this.props.history.push('/'));
  }
  handleDeleteCompetition= async id => {
    await competitionService.deleteOne(id);
    this.setState(state => ({
      competitions: state.competitions.filter(c => c._id !== id)
    }), () => this.props.history.push('/'));
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const competitions = await competitionService.getAll();
    this.setState({competitions});
  }

  render() {
    return (
      <div>
        <header className='header-footer'>It's a Lifestyle</header>
        <Switch>
          <Route exact path='/' render={({ history }) =>
            userService.getUser() ?
            <HomePage 
              history={history}
              user={this.state.user}
              competitions={this.state.competitions}
              handleLogout={this.handleLogout}
              handleDeleteCompetition={this.handleDeleteCompetition}
            />
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
          <Route exact path='/add' render={() => 
            userService.getUser() ?
              <AddCompetitionPage
                user={this.state.user}
                handleSignupOrLogin={this.handleSignupOrLogin}
                handleAddCompetition={this.handleAddCompetition}
              />
            :
            <Redirect to='/login' />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

