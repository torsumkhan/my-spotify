import React from "react";
import LibrarySong from "./LibrarySong";
import "./library.css";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h3>Library</h3>
      <div className="lib-songs">
        {songs.map((song) => {
          return <LibrarySong song={song} />;
        })}
      </div>
    </div>
  );
};

export default Library;
