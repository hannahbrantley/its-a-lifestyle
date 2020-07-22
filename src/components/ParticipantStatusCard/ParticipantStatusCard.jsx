import React from 'react';

function ParticipantStatusCard({participant, workouts, competition, getAllValidWorkoutsByParticipant}) {
  return (
    <tr>
      <td>{participant.name}</td>
      <td>{getAllValidWorkoutsByParticipant(participant, workouts, competition).length}</td>
    </tr>
  );
}

export default ParticipantStatusCard;