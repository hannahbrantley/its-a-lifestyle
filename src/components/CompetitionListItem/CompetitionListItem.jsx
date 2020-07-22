import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './CompetitionListItem.css';
class CompetitionListItem extends Component {
  state = {

    competition: this.props.competition,
    user: this.props.user,
    participants: this.props.participants,
    workouts: this.props.workouts,
    theseParticipants: [],
    owner: {}
  }
  async componentDidMount() {
    console.log(this.props.competition.owner);
    const theseParticipants = await this.props.participants.filter(participant => this.props.competition.participants.includes(participant._id));
    const owner = this.props.participants.find(participant => participant._id === this.props.competition.owner);
    this.setState({
      theseParticipants, owner
    })
  }
  
  render() {
      return (
        <div className='panel panel-default'>
          <div className="panel-heading">
          <h3 className='panel-title'>{this.state.competition.name}</h3>
          </div>
          <div className='body'>
            <dl>When: {moment(this.state.competition.startDate).format('MMMM Do YYYY')} to {moment(this.state.competition.endDate).format('MMMM Do YYYY')}</dl>
            <dl>Organizer: {this.state.owner.name}</dl>
            <dl>Who: {this.state.theseParticipants.map(participant => <span>{participant.name}&nbsp;&nbsp;|&nbsp;&nbsp; </span>)}</dl>
            <dl>Challenge: Excercise {this.state.competition.daysPerWeek} times per week or pay ${this.state.competition.penalty}</dl>
          </div>
          <div className='panel-footer CompetitionListItem-action-panel'>
            <Link
              className='btn btn-xs btn-info'
              to={{
                pathname: '/details',
                state: {clickedOnCompetition: this.state.competition, participants: this.state.participants, workouts: this.state.workouts }
              }}
            >
              DETAILS
            </Link>
            <button
              className='btn btn-xs btn-danger margin-left-10'
              disabled={this.state.user._id !== this.state.competition.owner}
              onClick={() => this.props.handleDeleteCompetition(this.state.competition._id)}
            >
              DELETE
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default CompetitionListItem;