import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./player.css";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  //Ref
  const audioRef = useRef(null);
  //event handlers
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>Start Time</p>
        <input className="song-input" type="range" />
        <p>End Time</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={faPlay}
          onClick={playHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
