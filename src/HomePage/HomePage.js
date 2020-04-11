import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomePage.css';


class HomePage extends React.Component{ 
    /* 
        ---------------------------------
        |            CONTEXT            |
        ---------------------------------
    */


    render(){
            return(
                <div className="page-container display">
                              
                    {/* Header */}
                    <header className='header'>
                        <h1>Donought King</h1>
                    </header>
                    
        
                    {/* Scheduling */}
                    <div className='operations-links'>
                        <ul className="navLink">
                            <li> <NavLink to="/demo">Generate/View Setup</NavLink> </li>
                            <li> <NavLink to="/operations">Operations</NavLink> </li>
                        </ul>
                    </div>
                    
                </div>
            );
        }
        
    
}


export default HomePage;