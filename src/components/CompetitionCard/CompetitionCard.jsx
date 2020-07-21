import React from 'react';
import { Link } from 'react-router-dom';
import ParticipantStatusCard from '../ParticipantStatusCard/ParticipantStatusCard';

function CompetitionCard({competition, participants}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{competition.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Participants</dt>
          <div className='CompetitionListPage-grid'>
            {participants.map(participant => 
              <ParticipantStatusCard
                competition={competition}
                participant={participant}
                key={participant._id}
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