import React, { useState } from "react";
import Song from "./Components/Song";
import Player from "./Components/Player";
import Footer from "./Components/Footer";
import "./main-app.css";
import data from "./data";

function App() {
  //states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Footer />
    </div>
  );
}

export default App;
