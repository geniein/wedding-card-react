import Map from '@components/Map';
import useScrollFadeIn from '@hooks/useScrollFadeIn';
import React, { FC } from 'react';
import { Row, Col } from 'reactstrap';

interface Props{
    init: any
}

const Place:FC<Props> =({init}) => {
    const {place} = init;
    const animatedItem = useScrollFadeIn('up',1,0.1);
    return (
      <div {...animatedItem}>
        <Row>
          <Col>
            <Row className="pt-3">
              <Col>
                <h3>{place.name}</h3>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <Map place={place}/>
              </Col>
            </Row>
            <Row className="nav-button">
              <Col className="pt-2 pb-2 pl-3 pr-1">
                <a href={`kakaomap://look?p=${place.LatLng[0]},${place.LatLng[1]}`} className="btn btn-kakao btn-block" role="button">Kakao Map</a>
              </Col>
              <Col className="pt-2 pb-2 pr-3 pl-1">
                <a href={`navermaps://?menu=location&pinType=place&lat=${place.LatLng[0]}&lng=${place.LatLng[1]}&title=${place.name}`} className="btn btn-naver btn-block">NAVER Map</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
  

export default Place;