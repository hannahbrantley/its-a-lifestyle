import React from 'react';
import './WeeklyReportCard.css';
// import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

// function getWeeks(competition) {
//    let startDate = new Date(competition.startDate);
//    let endDate = new Date(competition.endDate);
//    let today = new Date();
//    console.log('start', startDate, 'end', endDate, 'today', today);
// //    if (endDate >= today) {
// //        console.log('competition is currently happening');
// //        let endOfCurrentWeek = startDate;
// //        while (endOfCurrentWeek < today) {

// //        }

// //    }
// }

// function getValidWorkoutsPerWeek(competition, validWorkouts) {
//     let startDate = new Date(competition.startDate); // first day of comp
//     let unixDateEnd = startDate.setDate(startDate.getDate() + 7);
//     let endOfWeekOne = new Date(unixDateEnd).toISOString(); // last day of first week of comp 
//     // console.log('validworkoutsFormatted', validWorkouts)
//     let weekOneWorkouts = validWorkouts.filter(workout => workout.date >= competition.startDate && workout.date < endOfWeekOne);
//     console.log('weekOneWorkouts', weekOneWorkouts);
// }

// class WeeklyReportCard extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             startDate: ''
//         }
//     }

    // getWeeks() {
    //     let compStartDate = new Date(this.props.competition.startDate).toISOString();
    //     console.log(compStartDate);
    //     let startDate = moment(compStartDate);
    //     let endDate = this.props.competition.endDate;
    //     console.log(startDate, endDate)
    //     // let weeks = [];
    //     let lastDayOfWeek = moment([compStartDate]).add(5, 'days');
    //     let nextWeek = moment().add(7, 'days');
    //     console.log('lastdayofweek', lastDayOfWeek._i);
    //     console.log('nextweek', nextWeek._i);
    //     // while (lastDayOfWeek )
    // }

function WorkoutPerWeekPerParticipant( competition, competitionWeeks, workouts, participant, getAllValidWorkoutsByParticipant, week ) {
    let validWorkouts = getAllValidWorkoutsByParticipant(participant, workouts, competition);
    console.log(participant.name, validWorkouts.length)
    console.log('participant name', participant.name)
    week = moment(week).format();
    // competitionWeeks.forEach((week) => {
        let count = 0;
        validWorkouts.forEach(workout => {
            if (workout.date <= week && workout.date >= moment(week).subtract(6, 'd').format()) {
                count++;
            }
        })
        console.log('first day', moment(week).subtract(6, 'd').format(), 'last day', moment(week).format(), 'how many', count);
        if (count >= competition.daysPerWeek) {return count} else {return 'boo'};
    // })
}
  
function WeeklyReportCard({ competition, competitionWeeks, workouts, participants, getAllValidWorkoutsByParticipant, week }) {
        WorkoutPerWeekPerParticipant(competition, competitionWeeks, workouts, participants[3], getAllValidWorkoutsByParticipant);

        return (
            <table>
                <thead>
                    <tr> 
                        <th>{moment(week).subtract(6, 'd').format('MMM Do')} to {moment(week).format('MMM Do')}</th>  
                        <td>{WorkoutPerWeekPerParticipant( competition, competitionWeeks, workouts, participants[0], getAllValidWorkoutsByParticipant, week )}</td>         
                        <td>{WorkoutPerWeekPerParticipant( competition, competitionWeeks, workouts, participants[1], getAllValidWorkoutsByParticipant, week )}</td>         
                        <td>{WorkoutPerWeekPerParticipant( competition, competitionWeeks, workouts, participants[2], getAllValidWorkoutsByParticipant, week )}</td>         
                        <td>{WorkoutPerWeekPerParticipant( competition, competitionWeeks, workouts, participants[3], getAllValidWorkoutsByParticipant, week )}</td>         
                    </tr>
                </thead>
            </table>
        )
}
    
    export default WeeklyReportCard;

// function WeeklyReportCard(participant) {
//     console.log(participant);
//     console.log(participant.participant.name);
//     // let weeks = getWeeks(competition);
//     // let validWorkouts = getAllValidWorkoutsByParticipant(participant, workouts, competition);
//   return (
//           <>hello {participant.participant.name}</>
//   );
// }
