import React from "react";
import LibrarySong from "./LibrarySong";
import "./library.css";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h3>Library</h3>
      <div className="lib-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              songs={songs}
              song={song}
              id={song.id}
              audioRef={audioRef}
              setCurrentSong={setCurrentSong}
              key={song.id}
              isPlaying={isPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
