// components/VideoPlayer.js
import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function VideoPlayer({ url }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        className="react-player"
        playing
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
}
