import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TestComponent from '../../components/TestComponent/TestComponent'
import WorkoutListItem from '../../components/WorkoutListItem/WorkoutListItem'
import './ProfilePage.css';

const ProfilePage = (props) => {
    return (
      <div className="ProfilePage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <div className="flex-h align-flex-end">
          <TestComponent />
        </div>
        <div>PROFILE</div>
        <div>{console.log(props.workouts)}</div>
        <div className='WorkoutListPage-grid'>
            {props.workouts.map(workout => 
              <WorkoutListItem
              user={props.user}
              workout={workout}
              handleDeleteWorkout={props.handleDeleteWorkout}
              key={workout._id}
              />
            )}
        </div>
      </div>
    );
  
  };
export default ProfilePage;