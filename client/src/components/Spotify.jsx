import React from "react";

const SpotifyPlaylist = () => {
  return (
    // <div className="spotify">
    <iframe
      src="https://open.spotify.com/embed/playlist/05OkqemhVmD27zXfdnyNsy?utm_source=generator"
      width="100%"
      height="100%"
      justifyContent="flex-start"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    // </div>
  );
};

export default SpotifyPlaylist;
