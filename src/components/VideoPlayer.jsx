import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.playVideo();
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;
