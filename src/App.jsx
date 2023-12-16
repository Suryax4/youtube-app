import React from "react";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  // Replace Video Id corresponding to required youtube video
  const videoId = "NOYRl12zNJw";

  return (
    <div className="App">
      <h1>YouTube Video Player</h1>
      <VideoPlayer videoId={videoId} />
    </div>
  );
}

export default App;
