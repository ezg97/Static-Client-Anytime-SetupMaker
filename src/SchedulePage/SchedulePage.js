import React from 'react';
import { withRouter } from 'react-router-dom';

import './SchedulePage.css';

class SchedulePage extends React.Component{ 


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
        <div className="page-container crud">
            <div className='back'>
                <button className="back-button" onClick={this.props.onClickBack}>&#x202D;&#10094;</button>
            </div>
                      
            {/* Header */}
            <header className='header'>
                <h1>Donought King</h1>
                <p className='schedule-text'>Select the positions required for the setup, select the employees required 
                    and chose the work hours for the selected employee(s).</p>
            </header>
            
            <ul className="display-list-positions">
                        <li className='list-element'>
                            <button className={`pos-requirement-button clicked`}></button>
                            <p>Register</p>
                        </li>
                        <li className='list-element'>
                            <button className={`pos-requirement-button clicked`}></button>
                            <p>Dinning Room</p>
                        </li>
                        <li className='list-element'>
                            <button className={`pos-requirement-button clicked`}></button>
                            <p>Bagging</p>
                        </li>
                        <li className='list-element'>
                            <button className={`pos-requirement-button clicked`}></button>
                            <p>Order Taker 1</p>
                        </li>

            </ul>

            <div className='list-style'>
                    
                <ul className="display-list-employees">

                        <li className='text-style'>
                            <h3 className='shift-text'>Shift Time:</h3>
                            <h3 className='shift-text'>Name:</h3>
                        </li>
                                            
                            <li className='list-element'>

                                {/* BUTTON */}
                                    <button className={`emp-requirement-button clicked`}></button>

                                {/* IN TIME */ }
                                <select className='scheduler-hours'>
                                    <option className='option-time'>{'4 AM'}</option>
                                </select>

                                {/* OUT TIME */}
                                <select className='scheduler-hours'>
                                    <option className='option-time'>{'10 AM'}</option>
                                </select>

                                {/* NAME */}
                                <p className='emp-name'>{'Johnny Mac'}</p>

                            </li>

                            <li className='list-element'>

                                {/* BUTTON */}
                                    <button className={`emp-requirement-button clicked`}></button>

                                {/* IN TIME */ }
                                <select className='scheduler-hours'>
                                    <option className='option-time'>{'6 AM'}</option>
                                </select>

                                {/* OUT TIME */}
                                <select className='scheduler-hours'>
                                    <option className='option-time'>{'8 AM'}</option>
                                </select>

                                {/* NAME */}
                                <p className='emp-name'>{'Colin Smith'}</p>

                            </li>

                            <li className='list-element'>

                                {/* BUTTON */}
                                    <button className={`emp-requirement-button clicked`}></button>

                                {/* IN TIME */ }
                                <select className='scheduler-hours'>
                                    <option className='option-time'>{'4 AM'}</option>
                                </select>

                                {/* OUT TIME */}
                                <select className='scheduler-hours'>
                                    <option className='option-time'>{'7 AM'}</option>
                                </select>

                                {/* NAME */}
                                <p className='emp-name'>{'Earl Thomas'}</p>

                            </li>

                            <li className='list-element'>

                                {/* BUTTON */}
                                    <button className={`emp-requirement-button clicked`}></button>

                                {/* IN TIME */ }
                                <select className='scheduler-hours'>
                                    <option className='option-time'>{'8 AM'}</option>
                                </select>

                                {/* OUT TIME */}
                                <select className='scheduler-hours'>
                                    <option className='option-time'>{'10 AM'}</option>
                                </select>

                                {/* NAME */}
                                <p className='emp-name'>{'Gordon Ramsy'}</p>

                            </li>


                </ul>
            </div>

            


          
        </div>
        );
    }
}


export default withRouter(SchedulePage);