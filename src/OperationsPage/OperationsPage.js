import React from 'react';
import { NavLink } from 'react-router-dom';
import './OperationsPage.css';

class OperationsPage extends React.Component{ 
    

    /* 
        ---------------------------------
        |            STATE              |
        ---------------------------------
    */
   constructor(props){
    super(props);
        this.state = {
        employee: 'employee',
        employeeChildren: 'children hide',
        position: 'employee',
        positionChildren: 'children hide'
    };
}

handleEmployees = () => {
    this.setState({
        position: 'employee',
        positionChildren: 'children hide'
    });

    if(this.state.employee.includes('hide')){
        this.setState({
            employee: 'employee',
            employeeChildren: 'children hide'
        });
    }
    else{
        this.setState({
            employee: 'employee hide',
            employeeChildren: 'children'
        });
    }
}

handlePositions = () => {
    this.setState({
        employee: 'employee',
        employeeChildren: 'children hide'
    });

    if(this.state.employee.includes('hide')){
        this.setState({
            position: 'employee',
            positionChildren: 'children hide'
        });
    }
    else{
        this.setState({
            position: 'employee hide',
            positionChildren: 'children'
        });
    }
}

clearClick = () => {
    this.setState({
        employee: 'employee',
        employeeChildren: 'children hide'
    });

    this.setState({
        position: 'employee',
        positionChildren: 'children hide'
    });
}

  

    render(){

        return(
            <div className='operations-links'>
            <ul className="navLink">
                <li className={this.state.employeeChildren}> 
                    <NavLink to="/addEmployees">Add Employee</NavLink> 
                    <NavLink to="/employees">Modify Employee</NavLink> 
                </li>

                <li className={this.state.employee}>  
                    <a href='#' onClick={() => this.handleEmployees()}>Employees</a> 
                </li>

                <li className={this.state.positionChildren}> 
                    <NavLink to="/addPositions">Add Position</NavLink> 
                    <NavLink to="/positions">Modify Position</NavLink> 
                </li>

                <li className={this.state.position}> 
                    <a href='#' onClick={() => this.handlePositions()}>Positions</a> 
                </li>

                <li onClick={() => this.clearClick()}> <NavLink to="/hours">Operation Hours</NavLink> </li>
                <li onClick={() => this.clearClick()}> <NavLink to="/schedule">Schedule</NavLink> </li>
            </ul>
            

        </div>
        );
    }
}


export default OperationsPage;