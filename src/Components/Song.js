import React from "react";
import "./songs.css";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img className="cover-art" src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
