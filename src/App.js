import React, { useState } from "react";
import Song from "./Components/Song";
import Player from "./Components/Player";
import Footer from "./Components/Footer";
import Library from "./Components/Library";
import "./main-app.css";
import data from "./data";

function App() {
  //states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
