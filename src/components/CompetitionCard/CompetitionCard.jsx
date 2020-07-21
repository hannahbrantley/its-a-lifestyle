import React from 'react';
import { Link } from 'react-router-dom';
import ParticipantStatusCard from '../ParticipantStatusCard/ParticipantStatusCard';

function getWorkouts(participant, workouts) {
  console.log('participant on comp card:', participant, participant._id, typeof(participant._id));
  console.log('workouts on comp card:', workouts[0], workouts[0].user, typeof(workouts[0].user));
  let participantWorkouts = workouts.filter(workout => workout.user === participant._id);
  return participantWorkouts;
}

function CompetitionCard({competition, participants, workouts}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{competition.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Participants {workouts.length}</dt>
          <div className='CompetitionListPage-grid'>
            {participants.map(participant => 
              <ParticipantStatusCard
                competition={competition}
                participant={participant}
                key={participant._id}
                workouts={workouts}
                getWorkouts={getWorkouts}
              />
            )}
        </div>
        </dl>
      </div>
      <div className='panel-footer'>
         <Link
            className='btn btn-xs btn-warning'
            to={{
              pathname: '/edit',
              state: {competition}
            }}
          >
            EDIT
          </Link>
        <Link className='btn btn-xs btn-danger margin-left-20' to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}

export default CompetitionCard;