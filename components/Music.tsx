import  Box  from "@chakra-ui/react";
import type { NextComponentType } from "next";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";


const Music: NextComponentType = () => {
      const handleClick = () => {
        const audio = document.querySelector('audio') as HTMLAudioElement;
        audio.volume = 0.7;
        document.body.addEventListener("mousemove", function() {
          audio.play();
        })
      }
    
      return (
        <div className="fixed z-30 bottom-0 right-0">
          <audio preload="auto" loop>
              <source src="audio/music.mp3" type="audio/mpeg" />
          </audio>
        </div>
      );
};

export default Music;
