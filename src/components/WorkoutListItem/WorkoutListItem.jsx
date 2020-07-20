import React from 'react';
import './WorkoutListItem.css';

function WorkoutListItem({workout, handleDeleteWorkout, user}) { 
    return (
        <div className='panel panel-default'>
        <div className="panel-heading">
        <h3 className='panel-title'>{workout.date}</h3>
        <p>Are we in here</p>
        </div>
        <div className='body'>{workout.duration}</div>
        <div className='body'>{workout.activity}</div>
        <div className='panel-footer WrkoutListItem-action-panel'>
          <button
            className='btn btn-xs btn-danger margin-left-10'
            onClick={() => handleDeleteWorkout(workout._id)}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
  
  export default WorkoutListItem;