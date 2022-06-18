import React from "react";

const LibrarySong = ({ id, songs, song, setCurrentSong }) => {
  const songHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div className="library-song" onClick={songHandler}>
      <img src={song.cover} />
      <div className="song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
