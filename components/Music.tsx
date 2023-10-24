import  Box  from "@chakra-ui/react";
import type { NextComponentType } from "next";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";


const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio('audio/music.mp3');

  audio.loop = true;

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="fixed abosute bottom-0 z-50 right-0 mr-5 mb-5">
      <button onClick={togglePlay} className="bg-black py-2 px-2 rounded-full text-white text-[9px]">
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
}

export default Music
