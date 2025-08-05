# React Audio Recorder

A lightweight React hooks library for audio recording and playing in web applications based on MediaStream Recording API. Provides a simple hooks for recording, stopping, and accessing audio data as a Blob.

## Features
- Record audio from the user's microphone
- Start/stop recording with simple functions
- Access recorded audio as a Blob
- TypeScript support with clear prop types
- Easy integration into any React project

## Installation

```bash
npm install react-audio
```

## Usage

```tsx
import React from 'react';
import { useAudioRecorder, useAudioPlayer } from 'react-audio';

const AudioComponent: React.FC = () => {
  const { audioBlob, isRecording, stopRecording, startRecording } = useAudioRecorder();
  const { audio, playAudio, stopAudio } = useAudioPlayer(audioBlob);

  return (
    <div>
      <button
        id="record-btn"
        type="button"
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? 'Stop' : 'Start'}
      </button>
      {audio && (
        <>
          <button type="button" id="play-btn" onClick={playAudio}>
            Play
          </button>
          <button id="stop-btn" onClick={stopAudio}>
            Stop
          </button>
        </>
      )}
    </div>
  );
};

export default AudioComponent;
```

## License

MIT
