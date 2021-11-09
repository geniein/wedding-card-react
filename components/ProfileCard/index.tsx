import React, { FC } from 'react';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

interface Props{
    init:any
}

const ProfileCard:FC<Props> = ({init}) => {
    const {
      name,
      image,
      phone,      
      father,
      mother,      
    } = init.profile;
    return (
      <Row>
        <Col>
          <Row className="pt-3">
            <Col>
            <img className="img-fluid rounded-circle profile-image" src={image} alt={`${name}`} />
            </Col>
          </Row>
          <Row className="pt-4">
            <Col>
              <p className="mb-1">{father},{mother}</p>
              <h4>{name}</h4>
            </Col>
          </Row>
          <Row className="pt-2">
            <Col>              
              <a className="btn btn-secondary m-1" role="button" href={`sms:${phone}`}>
                <FontAwesome name="phone" />                
              </a>
              <a className="btn btn-secondary m-1" role="button" href={`sms:${phone}`}>
                <FontAwesome name="envelope" />
              </a>              
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

export default ProfileCard;
