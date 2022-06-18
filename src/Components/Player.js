import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import "./player.css";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
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

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          className="song-input"
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        {!isPlaying ? (
          <FontAwesomeIcon
            className="play"
            size="2x"
            icon={faPlay}
            onClick={playHandler}
          />
        ) : (
          <FontAwesomeIcon
            className="play"
            size="2x"
            icon={faPause}
            onClick={playHandler}
          />
        )}

        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
