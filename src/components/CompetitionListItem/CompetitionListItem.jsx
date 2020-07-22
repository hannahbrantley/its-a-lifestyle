import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './CompetitionListItem.css';

function CompetitionListItem({competition, handleDeleteCompetition, user, participants, workouts}) { 
  let theseParticipants = participants.filter(participant => competition.participants.includes(participant._id)) 
    return (
      <div className='panel panel-default'>
        <div className="panel-heading">
        <h3 className='panel-title'>{competition.name}</h3>
        </div>
        <div className='body'>
          <dl>When: {moment(competition.startDate).format('MMMM Do YYYY')} to {moment(competition.endDate).format('MMMM Do YYYY')}</dl>
          <dl>Who: {theseParticipants.map(participant => <span>{participant.name}&nbsp;&nbsp;|&nbsp;&nbsp; </span>)}</dl>
          <dl>Challenge: Excercise {competition.daysPerWeek} times per week or pay ${competition.penalty}</dl>
        </div>
        <div className='panel-footer CompetitionListItem-action-panel'>
          <Link
            className='btn btn-xs btn-info'
            to={{
              pathname: '/details',
              state: {clickedOnCompetition: competition, participants: participants, workouts: workouts}
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