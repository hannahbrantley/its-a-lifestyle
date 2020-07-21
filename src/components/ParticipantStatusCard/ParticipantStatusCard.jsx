import React from 'react';

function ParticipantStatusCard({competition, participant}) { 
    console.log(participant)
    console.log(competition)
  console.log('participant card type: ', typeof(participant))
  console.log('competition card type: ', typeof(competition))
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{participant.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dd>{participant.email}</dd>
        </dl>
      </div>
    </div>
  );
}

export default ParticipantStatusCard;