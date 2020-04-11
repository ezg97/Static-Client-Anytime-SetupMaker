import React from 'react';
import { withRouter } from 'react-router-dom';

import './AddEmployeesPage.css';




class AddEmployeesPage extends React.Component{


    render(){
    
        return(
        <div className="page-container crud">

            <div className='back'>
                <button className="back-button" onClick={this.props.onClickBack}>&#x202D;&#10094;</button>
            </div>
                      
            {/* Header */}
            <header className='header'>
                <h1>Donought King</h1>
                <p>Enter the full name and the overall skill (1-100) of a new employee.</p>
       

            </header>

           {/* FORM */}
            <form className="employee-form">

                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="name">Name:</label>
                        {/* Name INPUT */}
                        <input 
                            type="text"
                            className="name-box" 
                            name="name" 
                            id="name" 
                            placeholder="John Doe"
                        />
                    </div>
                </section>

                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="quantity">Skill:</label>
                        <input type="number" className='quantity-box' name="quantity" id="quantity" 
                        min="1" max="100"/>
                    </div>
                </section>

                <button type='submit' className='submit'>Submit</button>

            </form>
          
        </div>
        );
    }
}


export default withRouter(AddEmployeesPage);