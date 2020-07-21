import React from 'react';

function ParticipantStatusCard({participant, workouts, getWorkouts}) { 
  console.log('participant card workouts', workouts)
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{participant.name}{participant._id}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dd>{participant.email}</dd>
          <dd>{getWorkouts(participant, workouts).length}</dd>
        </dl>
      </div>
    </div>
  );
}

export default ParticipantStatusCard;