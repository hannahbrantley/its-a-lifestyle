import React from 'react';
import CompetitionCard from '../../components/CompetitionCard/CompetitionCard';

const CompetitionDetailPage = (props) => {

  const competition = props.location.state.clickedOnCompetition
  const participants = props.location.state.participants
  const workouts = props.location.state.workouts

  
  const participantArray = competition.participants.map(participant => 
    participants.filter(p => {return p._id === participant})[0]
  );

    return (
      <>
        <h1>Competition Details</h1>
        <CompetitionCard
          key={competition._id}
          competition={competition}
          workouts={workouts}
          participants={participantArray}
        />
      </>
    );
}

export default CompetitionDetailPage;