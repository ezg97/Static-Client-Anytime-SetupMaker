import React from 'react';
import { withRouter } from 'react-router-dom';

import './HoursPage.css';

class HoursPage extends React.Component{ 

   constructor(props){
        super(props);
    }


    render(){

    
        
        return(
        <div className="page-container crud">

            <div className='back'>
                <button className="back-button" onClick={this.props.onClickBack}>&#x202D;&#10094;</button>
            </div>
            
            <header className='header'>
                <h1>Donought King</h1>
                <p>Select the hours of operation</p>
            </header>

            <form className="employee-form"> 
                
                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="hours">Open:</label>
                        <select> 
                            <option value={-1}>Closed</option>
                            <option value={0}>12 AM</option>
                            <option value={1}>1 AM</option>
                            <option value={2}>2 AM</option>
                            <option value={3}>3 AM</option>
                            <option value={4} selected>4 AM</option>
                            <option value={5}>5 AM</option>
                            <option value={6}>6 AM</option>
                            <option value={7}>7 AM</option>
                            <option value={8}>8 AM</option>
                            <option value={9}>9 AM</option>
                            <option value={10}>10 AM</option>
                        </select>
                    </div>
                </section>

                    
                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="hours">Close:</label>
                        <select>
                            <option value={-1}>Closed</option>
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
                            <option value={10} selected>10 AM</option>
                        </select>
                    </div>
                </section>


                <button type='submit' className='submit'>Submit</button>

            </form>
                     
        </div>
        );
    }
}


export default withRouter(HoursPage);