import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import './NavBar.css';

class NavBar extends React.Component{ 
    
    render(){

        let bool = this.props.bool;

        return(
            
        <nav className="app_nav">
            {(bool === 'false')

            /* IF NOT SIGNED IN */
            ?<ul className='navbar'>
              <li className='site'> <NavLink to="/">Anytime SetupMaker</NavLink> </li>
              <li className='options'>  
                    <NavLink to="/demo">Demo</NavLink> 
              </li>
            </ul>

            /* IF SIGNED IN */
            :<ul className='navbar'>
                <li className='site'> <NavLink to="/home">Anytime SetupMaker</NavLink> </li>
                <li className='logos'>
                    <span className='home'> <NavLink to="/home">&#8962;</NavLink> </span>
                    <span className='log-out'> <NavLink to="/">&#10162;</NavLink> </span>
                </li>
            </ul>
            }
        </nav>
        );
    }
}


export default withRouter(NavBar);