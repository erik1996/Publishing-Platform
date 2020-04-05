import React, { Component } from "react";
import RecordRTC from "recordrtc";
import classnames from "classnames";

import "./CameraRecorder.scss";

type CameraRecorderProps = {
  onCancel: () => void;
  className: string
}

class CameraRecorder extends Component<CameraRecorderProps>{
  
  video: any;
  recorder: any;
  disabled: boolean = false;

  state = {
    videoStart: 0,
    videoURL: ""
  };

  captureCamera(callback: any) {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(function(camera) {
        callback(camera);
      })
      .catch(function(error) {
        alert("Unable to capture your camera. Please check console logs.");
      });
  }

  stopRecordingCallback() {
    this.video.src = this.video.srcObject = null;
    this.video.muted = false;
    this.video.volume = 1;
    this.video.src = URL.createObjectURL(this.recorder.getBlob());
    this.recorder.camera.stop();

    this.setState({ videoURL: this.video.src });
    // this.recorder.destroy();
    // this.recorder = null;
  }

  startRecord() {
    this.captureCamera((camera: any) => {
      this.video.muted = true;
      this.video.volume = 1;
      this.video.srcObject = camera;

      this.recorder = RecordRTC(camera, {
        type: "video",
        canvas: {
          height: 425,
          width: 850
        }
      });

      this.recorder.startRecording();
      this.setState({ videoStart: 1 });
      // release camera on stopRecording
      this.recorder.camera = camera;
    });
  }
  stopRecord() {
    if (this.state.videoStart) {
      this.setState({ videoStart: 2 });
      this.recorder.stopRecording(this.stopRecordingCallback.bind(this));
    }
  }

  render() {
    const { videoStart, videoURL } = this.state;

    return (
      <div className={`video-container ${this.props.className}`}>
        <div className="header">
          <h2>Create Your Own Video</h2>
        </div>
        <div className="contetn">
          <div className="camera-content">
            <div className="buttons">
              <button onClick={this.startRecord.bind(this)}>
                Start Record
              </button>
              <button
                className={classnames({ "disable-button": videoStart !== 1 })}
                onClick={this.stopRecord.bind(this)}
              >
                Stop Record
              </button>
            </div>
            <video
              ref={item => (this.video = item)}
              controls={true}
              autoPlay={true}
              playsinline={true}
            />
          </div>
        </div>
        <div className="footer">
          <button onClick={() =>this.props.onCancel()}>Cancel</button>
          {videoStart !== 2 ? (
            <a className='disable-button'>
              Download
            </a>
          ) : (
            <a href={videoURL} download="video">
              Download
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default CameraRecorder;
