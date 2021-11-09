import React, { FC } from 'react';
import { Row, Col } from 'reactstrap';
import ProfileCard from '@components/ProfileCard';
import useScrollFadeIn from '@hooks/useScrollFadeIn';

interface Props{
    init:any
}

const Profile:FC<Props> = ({init}) => {
    const { bride, groom } = init;

    const animatedItem = useScrollFadeIn('up',1,0.1)

    return (
      <div {...animatedItem}>
        <Row className="mt-3 mb-5">
          <Col>
            <ProfileCard init={bride} />
          </Col>
          <Col>
            <ProfileCard init={groom} />
          </Col>
        </Row>
      </div>
    );
  }


export default Profile; 
