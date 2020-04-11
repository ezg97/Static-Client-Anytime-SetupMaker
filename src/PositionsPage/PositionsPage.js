import React from 'react';
import { withRouter } from 'react-router-dom';


class PositionsPage extends React.Component{ 


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
                <p>Select a position from the drop down menu, 
                    then edit or delete the position.</p>

            </header>

           {/* FORM */}
            <form className="employee-form" >
                    
                <section className="section-form">
                    <div className="section-form-inner">

                        <label htmlFor="employee">Position:</label>
                        {/* Name INPUT */}
                        <select id='select-employees'>
                            <option value="">None</option>
                            <option value="1">John MacS</option>
                            <option value="2">Colin Smith</option>
                            <option value="3">Earl Thomas</option>
                            <option value="4">Gordon Ramsy</option>
                        </select>

                    </div>
                </section>

                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="name">Name:</label>
                        {/* Name INPUT */}
                        <input 
                            type="text"
                            className="name-box" 
                            name="name" 
                            id="name" 
                            value="Gordon Ramsy"
                        />
                    </div>
                </section>

                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="importance">Importance:</label>
                        {/* skill SELECTION */}
                        <select value={this.state.importance} id='importance'>
                            <option value={'Low'}>{'Low'}</option>
                            <option value={'Medium'}>{'Medium'}</option>
                            <option value={'High'}>{'High'}</option>
                        </select>
                    </div>
                </section>

                <section className="section-form">
                    <div className="section-form-inner">
                        <label htmlFor="quantity">Skill:</label>
                        <select value={this.state.importance} id='importance'>
                            <option value={'Low'}>{'Low'}</option>
                            <option value={'Medium'}>{'Medium'}</option>
                            <option value={'High'}>{'High'}</option>
                        </select>
                    </div>
                </section>

                <button type='submit' className='submit'>Submit</button>
                <button type='button' className='submit'>Delete</button>

            </form>
                
                

          
        </div>
        );
    }
}


export default withRouter(PositionsPage);