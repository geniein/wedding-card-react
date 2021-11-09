import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import FontAwesome from 'react-fontawesome';
import { useRef } from 'react';

const Audio = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [musicState, setMusicState] = useState<boolean>(false);
    const isOne = useMediaQuery({ query: '(max-width: 576px)' })
    const isTwo = useMediaQuery({ query: '(max-width: 768px)' })
    const isThree = useMediaQuery({ query: '(max-width: 992px)' })
    const isFour = useMediaQuery({ query: '(max-width: 1200px)' })
    const isFive = useMediaQuery({ query: '(max-width: 1400px)' })
    let positiveLeft = "440px"

    if(isOne) positiveLeft="120px";
    else if(isTwo) positiveLeft="140px";
    else if(isThree) positiveLeft="210px";
    else if(isFour) positiveLeft="330px";
    else if(isFive) positiveLeft="440px";

    const onClickMusic = () =>{        
        if(!musicState){
            audioRef.current?.play();
        }else{
            audioRef.current?.pause();
        }
        setMusicState(!musicState);
    }        
    return (        
        <div style={{position:"relative",top:"0px",left: positiveLeft, color:"white",cursor:"pointer"}}>
            {!musicState && <FontAwesome name="music" color="white" size="lg" onClick={onClickMusic}/>}            
            {musicState &&<FontAwesome name="stop-circle" color="white" size="lg" onClick={onClickMusic}/>}
            <audio src="./Image/Meditation.mp3" ref={audioRef} loop={true}/>            
        </div>
    );
};

export default Audio;