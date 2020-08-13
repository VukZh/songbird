import React from "react";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import '../player.css';

const Player = () => {
  return (
    <div className="question__player">
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        customProgressBarSection={[
          RHAP_UI.PROGRESS_BAR
        ]}
        showJumpControls={false}
        // showFilledProgress = {false}
        customAdditionalControls={[]}
        layout={"horizontal-reverse"}
        autoPlay
      />

      {/* <AudioPlayer  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"/> */}

      {/* <figure>
        <audio controls src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" autoplay = {true}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure> */}
    </div>
  );
};
export default Player;

// const AudioPlayer = window.ReactH5AudioPlayer.default

// class PlayerApp extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <h1>Hello, audio player!</h1>
//         <AudioPlayer
//           src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" showJumpControls={false} customAdditionalControls={[]} timeFormat = {'hh'} layout = {'horizontal'}
//           // Try other props!
//         />
//       </div>
//     );
//   }
// }

// export default PlayerApp
