import React from 'react';
import './CompetitionCard.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ParticipantStatusCard from '../ParticipantStatusCard/ParticipantStatusCard';
import WeeklyReportCard from '../WeeklyReportCard/WeeklyReportCard';

function getAllValidWorkoutsByParticipant(participant, workouts, competition) {
  let validWorkouts = workouts.filter(workout => 
    workout.user === participant._id 
    && competition.startDate <= workout.date 
    && workout.date <= competition.endDate);
  return validWorkouts;
}

function CompetitionCard({participants, workouts, competition}) { 

  let startDate = moment(competition.startDate);
  let competitionWeeks = [];
  let endDate = moment(competition.endDate);
  let lastDayOfWeek = startDate.add(7, 'days').format();
  while(lastDayOfWeek < endDate._i) {
    competitionWeeks.push(lastDayOfWeek);
    lastDayOfWeek = moment(lastDayOfWeek).add(7, 'days').format();
  }
  competitionWeeks.push(lastDayOfWeek);





  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{competition.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Dates</dt>
          <dl>{moment(competition.startDate).format('MMMM Do YYYY')} to {moment(competition.endDate).format('MMMM Do YYYY')}</dl>
        </dl>
        <dl>
          <dt>Requirements</dt>
  <dl>{competition.daysPerWeek} days per week</dl>
        </dl>
        <dl>
          <dt>Leaderboard</dt>
          <div className='CompetitionListPage-grid'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total Workouts</th>
                </tr>
              </thead>
            <tbody>
            {participants.map(participant => 
              <ParticipantStatusCard
                competition={competition}
                participant={participant}
                key={participant._id}
                workouts={workouts}
                getAllValidWorkoutsByParticipant={getAllValidWorkoutsByParticipant}
              />
            )}
            </tbody>
            </table>
         </div>
         </dl>
         <dl>
         <div className='CompetitionListPage-grid'> 
           <div>
             <th></th>
             {participants.map(participant => 
             <th>{participant.name}</th>
             )}
             {competitionWeeks.map(week => 
                  <WeeklyReportCard
                   week={week}
                   competition={competition}
                   competitionWeeks={competitionWeeks}
                   workouts={workouts} 
                   participants={participants}
                   getAllValidWorkoutsByParticipant={getAllValidWorkoutsByParticipant}
                   key={competition._id}
                  />
              )}
           </div>
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