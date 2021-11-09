import React from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Footer = () =>{    
    return (
      <Row>
        <Col className="app-fluid app-footer d-flex justify-content-center align-items-center" >                  
          <p className="mb-0">
            <small className="text-muted">
            Copyright © 2021 <a href="https://github.com/geniein/wedding-card-react">geniein</a> All right reserved.              
              <span className="pl-2">
                <a href="https://github.com/geniein/wedding-card-react"><FontAwesome name="github" /></a>
              </span>
            </small>
          </p>          
        </Col>
      </Row>
    );
  }

export default Footer; 
