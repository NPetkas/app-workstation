import React from "react";

const SpotifyPlaylist = () => {
  return (
    // <div className="spotify">
    <iframe
      src="https://open.spotify.com/embed/playlist/05OkqemhVmD27zXfdnyNsy?utm_source=generator"
      style={{border: '1px solid black',
        borderRadius: '14px',
        boxShadow: '2px 3px 5px #000000'
        }}
      width="100%"
      height="80%"
      justifyContent="flex-start"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    // </div>
  );
};

export default SpotifyPlaylist;
