import React from 'react';

function ParticipantStatusCard({competition, participant}) { 
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