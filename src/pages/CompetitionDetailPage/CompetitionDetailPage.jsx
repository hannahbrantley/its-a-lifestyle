import React from 'react';
import CompetitionCard from '../../components/CompetitionCard/CompetitionCard';

function CompetitionDetailPage(props) {
  // Refer to PuppyListItem to see how puppy is being passed via the <Link>
  const competition = props.location.state.competition;
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