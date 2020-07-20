import React from 'react';
import CompetitionCard from '../../components/CompetitionCard/CompetitionCard';

function CompetitionDetailPage(props) {

  
  const competition = props.location.state.competition;
  props.handleShowCompetition(competition._id)
  return (
    <>
      <h1>Competition Details</h1>
      <CompetitionCard
        key={competition._id}
        competition={competition}
      />
    </>
  );
}

export default CompetitionDetailPage;