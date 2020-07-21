import React from 'react';
import { Link } from 'react-router-dom';
import ParticipantStatusCard from '../ParticipantStatusCard/ParticipantStatusCard';

function getAllValidWorkoutsByParticipant(participant, workouts, competition) {
  let validWorkouts = workouts.filter(workout => 
    workout.user === participant._id 
    && competition.startDate <= workout.date 
    && workout.date <= competition.endDate);
  return validWorkouts;
}

function getValidWorkoutsPerWeek(competition, validWorkouts) {
  let startDate = new Date(competition.startDate); // first day of comp
  let unixDateEnd = startDate.setDate(startDate.getDate() + 7);
  let endOfWeekOne = new Date(unixDateEnd).toISOString(); // last day of first week of comp 
  // console.log('validworkoutsFormatted', validWorkouts)
  let weekOneWorkouts = validWorkouts.filter(workout => workout.date >= competition.startDate && workout.date < endOfWeekOne);
  console.log('weekOneWorkouts', weekOneWorkouts);
}


function CompetitionCard({participants, workouts, competition}) { 
  getValidWorkoutsPerWeek(competition, workouts);
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{competition.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Dates</dt>
          <dl>Start: {competition.startDate} End: {competition.endDate}</dl>
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
                getValidWorkoutsPerWeek={getValidWorkoutsPerWeek}
              />
            )}
            </tbody>
            </table>
         </div>
         <div className='CompetitionListPage-grid'> 
         <dt>hey here i am</dt>
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