import React from "react";
import LibrarySong from "./LibrarySong";
import "./library.css";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  LibraryOpen,
}) => {
  return (
    <div className={`library ${LibraryOpen ? "active-library" : ""}`}>
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
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
