import React from 'react';
import moment from 'moment';
import './WorkoutListItem.css';

function WorkoutListItem({workout, handleDeleteWorkout, user}) { 
    return (
        <div className='panel panel-default'>
        <div className="panel-heading">
        <h3 className='panel-title'>
          <button
            className='btn btn-xs btn-danger margin-left-10'
            onClick={() => handleDeleteWorkout(workout._id)}
          >
            X
          </button>
          {moment(workout.date).format('L')}: {workout.activity} for {workout.duration} minutes
          </h3>
        </div>
      </div>
    );
  }
  
  export default WorkoutListItem;