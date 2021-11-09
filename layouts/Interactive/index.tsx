import { AnimatedSprite, Container, Sprite, Stage } from '@inlet/react-pixi';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
//import a, {getSize} from '@utils/leonUtil';
import '@utils/leonUtil';
import { getSize, sw, sh, generateCanvas, ctx, canvas } from '@utils/leonUtil';
//import {LeonSans} from '@utils/leon.js';
//import from '@inlet'

interface Props extends RouteComponentProps {}

const Interactive: FC<Props> = ({ history }) => {
  let leon: any;
  let text: string;
  const init = () => {
    generateCanvas();
    //animation
    const drawing = () => {
      let i,
        total = leon.drawing.length;
      for (i = 0; i < total; i++) {
        window.TweenMax.killTweensOf(leon.drawing[i]);
        window.TweenMax.fromTo(
          leon.drawing[i],
          5.0,
          {
            value: 0,
          },
          {
            delay: i * 0.05,
            value: 1,
            ease: window.Power4.easeOut,
          },
        );
      }
      window.TweenMax.delayedCall(total * 0.15, weighting);
    };

    const weighting = () => {
      window.TweenMax.fromTo(
        leon,
        3.0,
        {
          weight: 200,
        },
        {
          delay: 0.05,
          weight: 700,
          ease: window.Power4.easeOut,
          //onCompleteAll: zoomIn(),
        },
      );
      window.TweenMax.delayedCall(1, zoomIn);
    };

    const zoomIn = () => {
      window.TweenMax.to(leon, 1.0, {
        size: 2500,
        ease: window.Power4.easeIn,
      });
      setTimeout(() => {
        let leonCanvas = document.querySelector('#leonCanvas');
        if (leonCanvas != null) document.body.removeChild(leonCanvas);
        history.push('/main');
      }, 1000);
    };
    
    if(sw >1000){
      text= `Invite \n Wedding Ceremony`
    }else {
      text= `Invite \n Wedding\n  Ceremony`
    }
    
    leon = new window.LeonSans({
      text: text,
      color: ['#342f2e'],
      size: getSize(120),
      weight: 200,
    });

    requestAnimationFrame(animate);
    drawing();
  };

  const animate = (t: any) => {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, sw, sh);

    const x = (sw - leon.rect.w) / 2;
    const y = (sh - leon.rect.h) / 2;
    leon.position(x, y);

    leon.draw(ctx);
  };

  init();

  return <div />;
};

export default Interactive;
