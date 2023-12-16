import React from "react";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  // Replace 'YOUR_VIDEO_ID' with the actual unlisted video ID
  const videoId = "NOYRl12zNJw";

  return (
    <div className="App">
      <h1>YouTube Video Player</h1>
      <VideoPlayer videoId={videoId} />
    </div>
  );
}

export default App;
