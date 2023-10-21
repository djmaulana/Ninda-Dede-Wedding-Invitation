import  Box  from "@chakra-ui/react";
import type { NextComponentType } from "next";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";


const Music: NextComponentType = () => {
    useEffect(() => {
        const audio = document.querySelector('audio') as HTMLAudioElement;
        audio.volume = 0.7;
        audio.play();
      }, []);
    
      return (
        <audio preload="auto" loop>
            <source src="audio/music.mp3" type="audio/mpeg" />
        </audio>
      );
};

export default Music;