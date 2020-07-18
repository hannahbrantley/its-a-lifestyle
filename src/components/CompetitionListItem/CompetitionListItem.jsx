import React from 'react';
import { Link } from 'react-router-dom';
import './CompetitionListItem.css';

function CompetitionListItem({competition, handleDeleteCompetition}) { 
    return (
      <div className='panel panel-default'>
        <div className="panel-heading">
          <h3 className='panel-title'>{competition.name}</h3>
        </div>
        <div className='body'>{competition.startDate}</div>
        <div className='panel-footer CompetitionListItem-action-panel'>
          <Link
            className='btn btn-xs btn-info'
            to={{
              pathname: '/details',
              state: {competition}
            }}
          >
            DETAILS
          </Link>
          <button
            className='btn btn-xs btn-danger margin-left-10'
            onClick={() => handleDeleteCompetition(competition._id)}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
  
  export default CompetitionListItem;