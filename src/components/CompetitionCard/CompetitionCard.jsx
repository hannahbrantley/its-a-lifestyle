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

// function getWeeks(competition) {
//  let dayOne = competition.startDate;
//  let dayLast = competition.endDate;
//  console.log('sliced start', dayOne, 'sliced end', dayLast);
//  let today =  new Date().toISOString();
//  console.log(today);
//  let dayOneDate = new Date(dayOne).toISOString();
//  let dayOneDateB = new Date(dayOneDate);
//  console.log(dayOneDate);
//  console.log(dayOneDateB);

// }

// function getValidWorkoutsPerWeek(competition, validWorkouts) {
//   let startDate = new Date(competition.startDate); // first day of comp
//   let unixDateEnd = startDate.setDate(startDate.getDate() + 7);
//   let endOfWeekOne = new Date(unixDateEnd).toISOString(); // last day of first week of comp 
//   // console.log('validworkoutsFormatted', validWorkouts)
//   let weekOneWorkouts = validWorkouts.filter(workout => workout.date >= competition.startDate && workout.date < endOfWeekOne);
//   console.log('weekOneWorkouts', weekOneWorkouts);
// }

function CompetitionCard({participants, workouts, competition}) { 

  console.log('this', moment().add(7, 'd'));

  let startDate = moment(competition.startDate);
  let competitionWeeks = [];
  let endDate = moment(competition.endDate);
  console.log('enddate', endDate);
  let lastDayOfWeek = startDate.add(7, 'days').format();
  console.log('lastdayofweek', lastDayOfWeek);
  while(lastDayOfWeek < endDate._i) {
    competitionWeeks.push(lastDayOfWeek);
    lastDayOfWeek = moment(lastDayOfWeek).add(7, 'days').format();
    console.log(competitionWeeks);
  }





  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{competition.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Dates</dt>
          <dl>Start: {moment(competition.startDate).format('dddd')} End: {competition.endDate}</dl>
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
                // getValidWorkoutsPerWeek={getValidWorkoutsPerWeek}
              />
            )}
            </tbody>
            </table>
         </div>
         <div className='CompetitionListPage-grid'> 
         <dt>hey here i am</dt>
           <div>
             <th>Week</th>
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