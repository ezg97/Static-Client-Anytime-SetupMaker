import React from 'react';

import { withRouter } from 'react-router-dom';


class AddPositionsPage extends React.Component{ 

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
                <p>Enter the name, skill preference (1-10), and importance of the position.</p>
       

            </header>

           {/* FORM */}
            <form className="employee-form">

                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="name">Position:</label>
                        {/* Name INPUT */}
                        <input 
                            type="text"
                            className="name-box" 
                            name="name" 
                            id="name" 
                            placeholder="Register"
                        />
                    </div>
                </section>

                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="importance">Importance:</label>
                        {/* Availability SELECTION */}
                        <select id='importance'>
                            
                            <option value={1}>Low</option>
                            <option value={2}>Medium</option>    
                            <option value={3}>High</option>              
                        </select>
                    </div>
                </section>

                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="quantity">Skill:</label>
                        <input type="number" className='quantity-box' name="quantity" id="quantity" 
                        min="1" max="10"/>
                    </div>
                </section>

                <button type='submit' className='submit'>Submit</button>

            </form>
          
        </div>
        );
    }
}


export default withRouter(AddPositionsPage);