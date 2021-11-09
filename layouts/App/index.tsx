import React, { useEffect } from "react";
import '../styles.css';
import Header from '@pages/Header';
import { Container } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "@layouts/Main";
import Interactive from "@layouts/Interactive";

declare global {
  interface Window {
    kakao: any;
    LeonSans: any;
    TweenMax: any;
    Power4: any;
    Hammer: any;
    PIXI: any;
  }
}

const App =() =>{
  return (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Interactive} />
      <Route path="/main" component={Main}/>
      <Route path="/intro" component={Interactive}/>
    </Switch>    
  </BrowserRouter>
      )
}

export default App;