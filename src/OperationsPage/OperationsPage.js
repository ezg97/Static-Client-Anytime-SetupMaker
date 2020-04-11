import React from 'react';
import { NavLink } from 'react-router-dom';
import {InfoContext } from '../InfoContext';
import './OperationsPage.css';

class OperationsPage extends React.Component{ 
    /* 
        ---------------------------------
        |            CONTEXT            |
        ---------------------------------
    */
   static contextType = InfoContext;

    /* 
        ---------------------------------
        |            STATE              |
        ---------------------------------
    */
   constructor(props){
        super(props);
            
    }

  

    render(){

        return(
        <div className='page-container display'>
                      
            {/* Header */}
            <header className='header' onClick={() => this.clearClick()}>
                <h1>Donought King</h1>
                <h2>Operations</h2>
            </header>
            
            {/* List of choices */}
            <div className='operations-links'>
                <ul className="navLink">
                    <li> <NavLink to="/addEmployees">Add Employee</NavLink> </li>
                    <li> <NavLink to="/employees">Modify Employee</NavLink> </li>

                    <li> <NavLink to="/addPositions">Add Position</NavLink>  </li>
                    <li> <NavLink to="/positions">Modify Position</NavLink> </li>

                    <li> <NavLink to="/hours">Operation Hours</NavLink> </li>
                    <li> <NavLink to="/schedule">Schedule</NavLink> </li>
                </ul>
                

            </div>
          
        </div>
        );
    }
}


export default OperationsPage;