import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddCompetitionPage from '../AddCompetitionPage/AddCompetitionPage';
import AddWorkoutPage from '../AddWorkoutPage/AddWorkoutPage';
import EditCompetitionPage from '../EditCompetitionPage/EditCompetitionPage';
import CompetitionDetailPage from '../CompetitionDetailPage/CompetitionDetailPage'
import userService from '../../utils/userService';
import * as competitionsService from '../../utils/competitionsService';
import * as workoutService from '../../utils/workoutService';

class App extends Component {
  state = {
    competitions: [],
    participants: [],
    workouts: [],
    user: userService.getUser(),
  }


  /*--- Callback Methods ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }, () => this.props.history.push('/'));
  };

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  handleAddCompetition = async newCompetitionData => {
    const newComp = await competitionsService.create(newCompetitionData);
    this.setState(state => ({
      competitions: [...state.competitions, newComp]
    }),
    () => this.props.history.push('/'));
  }
  handleDeleteCompetition= async id => {
    await competitionsService.deleteOne(id);
    this.setState(state => ({
      competitions: state.competitions.filter(c => c._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleUpdateCompetition = async updatedCompetitionData => {
    const updatedCompetition = await competitionsService.update(updatedCompetitionData);
    // Using map to replace just the puppy that was updated
    const newCompetitionArray = this.state.competitions.map(c => 
      c._id === updatedCompetition._ic ? updatedCompetition : c
    );
    this.setState(
      {competitions: newCompetitionArray},
      // This cb function runs after state is updated
      () => this.props.history.push('/')
    );
  }
  getAllCompetitions = async () => {
    const competitions = await competitionsService.getAll();
    this.setState({
      competitions
    }, () => this.props.history.push('/'));
  }  
  getAllParticipants = async () => {
    const participants = await userService.index();
    this.setState({
      participants
    }, () => this.props.history.push('/'));
  }
  handleAddWorkout = async newWorkoutData => {
    const newWorkout = await workoutService.create(newWorkoutData);
    console.log('handleAddWorkout happening');
    this.setState(state => ({
      workouts: [...state.workouts, newWorkout]
    }),
    () => this.props.history.push('/'));
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    this.getAllParticipants();
    this.getAllCompetitions();
  }

  render() {
    return (
      <div>
        <header className='header-footer'>It's a Lifestyle</header>
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            history={history}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/' render={({ history }) =>
            userService.getUser() ?
            <HomePage 
            history={history}
            user={this.state.user}
            competitions={this.state.competitions}
            participants={this.state.participants}
            handleLogout={this.handleLogout}
            handleDeleteCompetition={this.handleDeleteCompetition}
            />
            :
            <Redirect to='/login' />
          }/>
          <Route exact path='/add' render={() => 
            userService.getUser() ?
              <AddCompetitionPage
                user={this.state.user}
                participants={this.state.participants}
                handleSignupOrLogin={this.handleSignupOrLogin}
                handleAddCompetition={this.handleAddCompetition}
              />
            :
            <Redirect to='/login' />
          }/>
          <Route exact path='/details' render={({location}) => 
            <CompetitionDetailPage location={location}/>
          } />
          <Route exact path='/edit' render={({location}) => 
            <EditCompetitionPage
              handleUpdateCompetition={this.handleUpdateCompetition}
              location={location}
            />
          } />
          <Route exact path='/addWorkout' render={() => 
            userService.getUser() ?
              <AddWorkoutPage
                user={this.state.user}
                handleSignupOrLogin={this.handleSignupOrLogin}
                handleAddWorkout={this.handleAddWorkout}
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

