import { useState } from 'react';

const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(
    null
  );

  const startRecording = async () => {
    if (!mediaRecorder) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => {
        setAudioBlob(event.data);
      };
      recorder.start();
      setMediaRecorder(recorder);
    }
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return { isRecording, audioBlob, startRecording, stopRecording };
};

export default useAudioRecorder;
