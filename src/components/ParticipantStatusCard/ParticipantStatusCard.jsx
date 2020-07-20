import React from 'react';

function ParticipantStatusCard({competition, participant}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{typeof(participant)}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Competition</dt>
          <dd>{competition.name}</dd>
        </dl>
      </div>
    </div>
  );
}

export default ParticipantStatusCard;