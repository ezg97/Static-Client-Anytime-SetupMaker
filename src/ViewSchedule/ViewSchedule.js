import React from 'react';

import { Container, Row, Col } from 'react-grid-system';

import './ViewSchedule.css';


class ViewSchedule extends React.Component{ 


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
            
        <div className='grid-container'>

            <Container className="grid" fluid style={{ lineHeight: '32px'}}>
                <Row className='column'>
                    <Col>Position:</Col> 
                    <Col>Employee:</Col>
                   
                </Row>
                <br />
                <Row className='row'>
                    <Col> {"Register"}</Col>
                    <Col>{"John Mac"}</Col>
                </Row>       

                 <Row className='row'>
                    <Col> {"Dinning Room"}</Col>
                    <Col>{"Colin Smith"}</Col>
                </Row>

                 <Row className='row'>
                    <Col> {"Bagging"}</Col>
                    <Col>{"Earl Thomas"}</Col>
                </Row>

                 <Row className='row'>
                    <Col> {"Order Taker 1"}</Col>
                    <Col>{"Gordon Ramsy"}</Col>
                </Row>           
                
            </Container>
          
        </div>
        );
    }
}


export default ViewSchedule;