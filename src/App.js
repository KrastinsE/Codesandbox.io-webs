import React from "react";
import "./styles.css";

import ReactPlayer from "react-player";

export default function App() {
  return (
    <div className="App">
      <div class="EDIBOtext">
        <h1>Hello EDIBO</h1>
      </div>

      <center>
        <div class="Ytdist">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=MRIMT0xPXFI"
          />
        </div>

        <div class="Next">
          <p>WATCH NEXT</p>
        </div>

        <div class="Ytdist">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=UGcALH8kPC0"
          />
        </div>

        <div class="Next">
          <p>WATCH NEXT</p>
        </div>

        <div class="Ytdist">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=Ke90Tje7VS0"
          />
        </div>

        <div class="Next">
          <p>WATCH NEXT</p>
        </div>

        <div class="Ytdist">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=hQAHSlTtcmY"
          />
        </div>

        <div class="Next">
          <p>WATCH NEXT</p>
        </div>

        <div class="Ytdist">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=9U3IhLAnSxM"
          />
        </div>
      </center>

    
      <p>Start learning to see some magic happen!</p>
      

    </div>
  );
}
