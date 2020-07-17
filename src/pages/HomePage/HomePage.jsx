import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TestComponent from '../../components/TestComponent/TestComponent'
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
        <div>This is the home page</div>
      </div>
    );
  
  };
export default HomePage;