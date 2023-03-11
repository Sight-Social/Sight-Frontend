import React from 'react';
import YouTube from 'react-youtube';
import { VideoContainer } from './YouTubeVideoElements.js';

class YouTubeVideo extends React.Component {
  render() {
    const video_id = this.props.videoId;
    const opts = {
      /* LANDSCAPE */
      height: '600',
      width: '345',

      // https://developers.google.com/youtube/player_parameters
      playerVars: {
        autoplay: 0 /* 1 to auto-start-load */,
        controls: 0 /* 1 to show controls */,
        color: 'red',
        /* (Loop==1 && playlist==video_id) allows for single video looping */
        loop: 1,
        playlist: video_id,
        modestbranding: 1,
      },
    };

    return (
      <VideoContainer>
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </VideoContainer>
    );
  }

  _onReady(event) {
    event.target.pauseVideo(); // access to player in all event handlers via event.target
  }
}

export default YouTubeVideo;
