import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Demo.css';

import ViewSchedule from '../ViewSchedule/ViewSchedule';


class Demo extends React.Component{ 
    
    constructor(props){
        super(props);
      }
    
     
 
    render(){

        
        return(
            <div className="page-container display schedule">
                {/* 1 HEADER*/}
                <header className='header'>
                    <h1>Daily Setup.</h1>
                </header>

                {/* 2 THIS WILL LET YOU SELECT THE DAY OF THE SCHEDULE YOU WANT TO SEE*/}
                <select id='mySelect'>
                        <option value={-1}>None</option>
                        <option value={0}>12 AM</option>
                        <option value={1}>1 AM</option>
                        <option value={2}>2 AM</option>
                        <option value={3}>3 AM</option>
                        <option value={4}>4 AM</option>
                        <option value={5}>5 AM</option>
                        <option value={6}>6 AM</option>
                        <option value={7}>7 AM</option>
                        <option value={8}>8 AM</option>
                        <option value={9}>9 AM</option>
                        <option value={10}>10 AM</option>
                        
                    </select>

            

                {/* 3 THIS COMPONENT WILL DISPLAY THE SCHEDULE*/}
                    <Switch>
                        <Route exact path='/Demo'
                        render={(routeProps) =>
                            <ViewSchedule
                                selectedHour={4}
                            />
                        } />
                    </Switch>
            </div>
        );
    }
}


export default Demo;