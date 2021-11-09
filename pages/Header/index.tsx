import React, { FC } from 'react';
import dayjs from 'dayjs';
import { Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { useState } from 'react';
import Audio from '@components/Audio';
import { url } from 'inspector';
import useScrollFadeIn from '@hooks/useScrollFadeIn';

interface Props {
  init: any;
}

const Header: FC<Props> = ({ init }) => {
  const { title, bride, groom, wedding, email } = init;
  const [musicState, setMusicState] = useState<boolean>(true);
  const animatedItem = {
    0:useScrollFadeIn('up',1,0),
    1:useScrollFadeIn('up',1,0.2),
    2:useScrollFadeIn('up',1,0.3),
    3:useScrollFadeIn('up',1,0.3),
}
  dayjs.locale('ko');
  return (
    <Row>      
      <Col>
        <Row>
          <Col className="app-fluid">
            <div className="app-header d-flex justify-content-center align-items-center">
              <h2 className="mb-0">{title}</h2>              
              <Audio/>
            </div>            
            {/* <audio src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3" controls/> */}
            <img className="header-fluid" src="./Image/main.jpg" alt="header" {...animatedItem[0]}/>            
          </Col>
        </Row>
        <Row>
          <Col className="pt-5" >
            <div {...animatedItem[1]}>
              <h3>
                {bride.name}&nbsp;
                <small>
                  <span className="text-middle" style={{ color: 'red' }}>
                    <FontAwesome name="heart" />
                  </span>
                </small>
                &nbsp;{groom.name}
              </h3>
              <h3>Invite Wedding Cereminies</h3>
              <p className="lead pt-3" style={{fontWeight:'bold'}}>{dayjs(wedding.at).format('YYYY-MM-DD HH:mm')}</p>
              <p className="lead">{wedding.name}</p>
            </div>
          </Col>
        </Row>
        <div {...animatedItem[2]}>
        <Row>
          <Col className="pt-5" style={{backgroundImage: 'url("./Image/letter1.jpg")', backgroundRepeat: 'no-repeat', backgroundSize:'100% 100%'}}>            
            
              <h1 style={{textDecoration : 'underline'}}>초대합니다</h1>            
              <p className="lead">
              서로가 평생의 동반자가 된다는 <br/>
              사실에 벅차오릅니다. <br/>
              매 순간 큰 사랑에 감동하고, <br/>
              서로를 존중하며, <br/>
              그 자체로 감사하는 그런 사랑하겠습니다. <br/>
              차근차근 우리답게 나아가겠습니다. <br/>
                </p>
          </Col>
        </Row>
        </div>
        <div {...animatedItem[3]}>
        <Row>
          <Col className="pt-5" style={{backgroundImage: 'url("./Image/letter2.jpg")', backgroundRepeat: 'no-repeat', backgroundSize:'100% 100%'}}>            
            <h2 style={{textDecoration : 'underline'}}>
              <small>
                <span className="text-middle" style={{ color: 'red' }}>
                  <FontAwesome name="heart" />
                </span>
              </small>
              &nbsp;코로나19로 인한 안내의 말&nbsp;
              <small>
                <span className="text-middle" style={{ color: 'red' }}>
                  <FontAwesome name="heart" />
                </span>
              </small>
            </h2>            
            <p className="lead">
            코로나 19가 장기화되면서 <br/>
            현 상황에서 언제쯤 진정될지 알 수 없어 <br/>
            예정대로 결혼식을 진행하게 되었습니다. <br/>
            혹여나 청첩장 전달이 누가 되지 않을지 <br/>
            걱정이 많지만 참석이 어려우시더라도 <br/>
            축하해 주시는 마음은 같으실꺼라 생각합니다. <br/>
            새로운 출발을 축하해 주시는 모든 분들께 <br/>
            진심으로 감사 인사를 드리며 <br/> 
            예쁘게 잘 살겠습니다. <br/>
              </p>
          </Col>
        </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
