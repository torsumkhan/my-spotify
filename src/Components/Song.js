import React, { useState } from "react";
import "./songs.css";

const Song = ({ currentSong }) => {
  return (
    <div
      className="song-container"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(31, 34, 37, 0.9), rgba(68, 72, 76, 0.8)),url(${currentSong.cover})`,
        backgroundRepeat: "no repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundColor: "#23272a",
      }}
    >
      <img className="cover-art" src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
