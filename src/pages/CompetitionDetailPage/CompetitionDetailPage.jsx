import React, { Component } from 'react';
import CompetitionCard from '../../components/CompetitionCard/CompetitionCard';

const CompetitionDetailPage = (props) => {

  const competition = props.location.state.clickedOnCompetition
  const participants = props.location.state.participants

  console.log('this is props comp page', competition.participants)
  console.log('participants comp page', participants)
  

  // getState = async () => {
  //   console.log('details page:', this.props.location.state.competition);
  const participantArray = competition.participants.map(participant => 
    participants.filter(p => {return p._id === participant})[0]
  );

  console.log(participantArray);
  //   this.setState({
  //     competition: this.props.competition,
  //     participants: participantArray
  //   }, () => this.props.history.push('/'));
  // }  

  // async componentDidMount() {
  //   this.getState();
  // }

  // console.log('typeof partarray', typeof(participantArray))
  // console.log('participantArray from comp detail page:', participantArray)

  // render() {
    return (
      <>
        <h1>Competition Details</h1>
        <CompetitionCard
          key={competition._id}
          competition={competition}
          participants={participantArray}
        />
      </>
    );
  // }
}

export default CompetitionDetailPage;