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
        return (count);
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
