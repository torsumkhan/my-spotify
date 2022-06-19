import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  id,
  songs,
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songHandler = () => {
    setCurrentSong(song);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songHandler}
    >
      <img src={song.cover} />
      <div className="song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
