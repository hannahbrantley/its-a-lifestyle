import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import WorkoutListItem from '../../components/WorkoutListItem/WorkoutListItem';
import './ProfilePage.css';

const ProfilePage = (props) => {
  let thisUsersWorkouts = props.workouts.filter(workout => 
    workout.user === props.user._id
   )

    return (
      <div className="ProfilePage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <div className="flex-h align-flex-end">
        <div>PROFILE</div>
        <div className='WorkoutListPage-grid'>
            {thisUsersWorkouts.map(workout => 
              <WorkoutListItem
              user={props.user}
              workout={workout}
              handleDeleteWorkout={props.handleDeleteWorkout}
              key={workout._id}
              />
              )}
        </div>
        </div>
      </div>
    );
  
  };
export default ProfilePage;