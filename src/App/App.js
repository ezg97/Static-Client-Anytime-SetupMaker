import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import LandingPage from '../LandingPage/LandingPage';
import Demo from '../Demo/Demo';
import NavBar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import OperationsPage from '../OperationsPage/OperationsPage';
import EmployeesPage from '../EmployeesPage/EmployeesPage';
import AddEmployeesPage from '../AddEmployeesPage/AddEmployeesPage';
import AddPositionsPage from '../AddPositionsPage/AddPositionsPage';
import PositionsPage from '../PositionsPage/PositionsPage';

import HoursPage from '../HoursPage/HoursPage';
import SchedulePage from '../SchedulePage/SchedulePage';
import UnknownPage from '../UnknownPage/UnknownPage';

import LandingPage from '../LandingPage/LandingPage';


class App extends Component {
  
  constructor(props){
    super(props);
  }

 
  //render
  render(){
    
      return (
        
          <div className="container">
            {/* NAV BAR */}
            <Switch>
                {/* SIGNED IN */}
                <Route 
                  exact path={['/demo','/home','/operations','/employees', '/addEmployees','/positions','/addPositions',
                  '/hours','/schedule']}
                  render={(routeProps) =>
                    <NavBar
                      bool={'true'}
                    />
                  }
                />

                <Route exact path='/' 
                  render={(routeProps) =>
                      <LandingPage
                        bool={false} 
                      />
                  }
                />

            </Switch>

            <main role="main">

              {/* MAIN TEXT SECTION */}
              <Switch>
                <Route exact path='/' component={LandingPage} />

                <Route exact path='/demo' component={Demo} />

                <Route exact path='/home' component={HomePage} />

                <Route exact path='/operations' 
                  render={(routeProps) =>
                    <OperationsPage
                      onClickBack={() =>routeProps.history.goBack()} 
                    />}
                  />

                <Route exact path='/employees' 
                  render={(routeProps) =>
                    <EmployeesPage
                      onClickBack={() =>routeProps.history.goBack()} 
                    />}
                  />

                <Route exact path='/addEmployees' 
                  render={(routeProps) =>
                    <AddEmployeesPage
                      onClickBack={() =>routeProps.history.goBack()} 
                    />}
                  />

              <Route exact path='/positions' 
                  render={(routeProps) =>
                    <PositionsPage
                      onClickBack={() =>routeProps.history.goBack()} 
                    />}
                  />    

                <Route exact path='/addPositions' 
                  render={(routeProps) =>
                    <AddPositionsPage
                      onClickBack={() =>routeProps.history.goBack()} 
                    />}
                  />

                <Route exact path='/hours' 
                  render={(routeProps) =>
                    <HoursPage
                      onClickBack={() =>routeProps.history.goBack()} 
                    />}
                  />

                <Route exact path='/schedule' 
                  render={(routeProps) =>
                    <SchedulePage
                      onClickBack={() =>routeProps.history.goBack()} 
                    />}
                  />
              
              <Route path='/' component={UnknownPage} />
                
              </Switch>

            </main>

          </div>
      );
    }
}
  
  

export default App;
