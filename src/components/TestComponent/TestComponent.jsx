import React from 'react';
import styles from './TestComponent.module.css';
import NavBar from '../../components/NavBar/NavBar';

const TestComponent = (props) => (
  <div className="TestComponent">
    <NavBar
      user={props.user}
      handleLogout={props.handleLogout}
    />
    <div className={`${styles.TestComponent} flex-h`}>
      00:00
    </div>
  </div>
);

export default TestComponent;
