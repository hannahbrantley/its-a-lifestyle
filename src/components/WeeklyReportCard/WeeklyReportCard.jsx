import React from 'react';
import './WeeklyReportCard.css';
import moment from 'moment';
import 'moment-timezone';

function WorkoutPerWeekPerParticipant( competition, competitionWeeks, workouts, participant, getAllValidWorkoutsByParticipant, week ) {
    let validWorkouts = getAllValidWorkoutsByParticipant(participant, workouts, competition);
    week = moment(week).format();
        let count = 0;
        validWorkouts.forEach((workout, i) => {
            if (workout.date <= week && workout.date >= moment(week).subtract(7, 'd').format()) {
                count++;
            }
            
        })
        if (count >= competition.daysPerWeek) {return <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>}
        else {return count};
}
  
function WeeklyReportCard({ competition, competitionWeeks, workouts, participants, getAllValidWorkoutsByParticipant, week }) {
        WorkoutPerWeekPerParticipant(competition, competitionWeeks, workouts, participants[3], getAllValidWorkoutsByParticipant);

        return (
            <table>
                <thead>
                    <tr> 
                        <th>{moment(week).subtract(6, 'd').format('MMM Do')} to {moment(week).format('MMM Do')}</th>  
                        {participants.map(participant => 
                        <td>{WorkoutPerWeekPerParticipant( competition, competitionWeeks, workouts, participant, getAllValidWorkoutsByParticipant, week )}</td>         
                            )}
                    </tr>
                </thead>
            </table>
        )
}
    
    export default WeeklyReportCard;
