import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TestComponent from '../../components/TestComponent/TestComponent'
import CompetitionListItem from '../../components/CompetitionListItem/CompetitionListItem'
import './HomePage.css';

const HomePage = (props) => {
    return (
      <div className="HomePage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <div className="flex-h align-flex-end">
          <TestComponent />
        </div>
    <div>This OKAY page {typeof(props.participants)} 2</div>
        <div className='CompetitionListPage-grid'>
            {props.competitions.map(competition => 
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
    );
  
  };
export default HomePage;