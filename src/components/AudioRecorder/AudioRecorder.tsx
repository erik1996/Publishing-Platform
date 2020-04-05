import React, { Component } from "react";
import { ReactMic } from "react-mic";
import classnames from "classnames";

import "./AudioRecorder.scss";

type AudioRecorderProps = {
  onCancel: () => void;
  className?: string;
};

class AudioRecorder extends Component<AudioRecorderProps> {
  state = {
    videoStart: 0,
    blob: "",
    record: false
  };

  startRecording = () => {
    this.setState({
      record: true
    });
  };

  stopRecording = () => {
    this.setState({
      record: false
    });
  };

  onData(recordedBlob: any) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop = (recordedBlob: any) => {
    this.setState({ blob: recordedBlob.blobURL });
  };

  render() {
    return (
      <div className={`audio-container ${this.props.className}`}>
        <div className="header">
          <h2>Create Your Own Video</h2>
        </div>
        <div className="contetn">
          <div className="audio-content">
            <ReactMic
              record={this.state.record}
              className="sound-wave"
              onStop={this.onStop}
              onData={this.onData}
              strokeColor="#FFF"
              backgroundColor="#353535"
            />
            <div className="buttons">
              <button onClick={this.startRecording} type="button">
                Start
              </button>
              <button onClick={this.stopRecording} type="button">
                Stop
              </button>
            </div>

            <audio id="wavSource" src={this.state.blob} controls></audio>
          </div>
        </div>
        <div className="footer">
          <button onClick={() => this.props.onCancel()}>Cancel</button>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default AudioRecorder;
