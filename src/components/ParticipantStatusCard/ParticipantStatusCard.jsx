import React from 'react';

function ParticipantStatusCard({participant, workouts, competition, getAllValidWorkoutsByParticipant, getValidWorkoutsPerWeek}) {
  let validWorkouts = getAllValidWorkoutsByParticipant(participant, workouts, competition);
  return (
    <tr>
      <td>{participant.name}</td>
      <td>{getAllValidWorkoutsByParticipant(participant, workouts, competition).length}</td>
    </tr>
    // <div className='panel panel-default'>
    //   <div className="panel-heading">
    //     <h3 className='panel-title'>{participant.name}{participant._id}</h3>
    //   </div>
    //   <div className='panel-body'>
    //     <dl>
    //       <dd>{participant.email}</dd>
    //       <dd>{getAllValidWorkoutsByParticipant(participant, workouts, competition).length}</dd>
    //       {/* <dd>{getValidWorkoutsPerWeek(competition, validWorkouts).length}</dd> */}
    //     </dl>
    //   </div>
    // </div>
  );
}

export default ParticipantStatusCard;