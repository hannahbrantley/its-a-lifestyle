import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CompetitionListItem from '../../components/CompetitionListItem/CompetitionListItem';
import './HomePage.css';

const HomePage = (props) => {
  let myCompetitions = props.competitions.filter(competition =>
    competition.participants.includes(props.user._id)
   )

    return (
      <div className="HomePage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <div>
        <div className='CompetitionListPage-grid'>
            {myCompetitions.map(competition => 
              <CompetitionListItem
                participants={props.participants}
                workouts={props.workouts}
                user={props.user}
                competition={competition}
                handleDeleteCompetition={props.handleDeleteCompetition}
                key={competition._id}
              />
            )}
        </div>
        </div>
      </div>
    );
  
  };
export default HomePage;