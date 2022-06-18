import React from "react";
import LibrarySong from "./LibrarySong";
import "./library.css";

const Library = ({ songs, setCurrentSong }) => {
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
              setCurrentSong={setCurrentSong}
              key={song.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
