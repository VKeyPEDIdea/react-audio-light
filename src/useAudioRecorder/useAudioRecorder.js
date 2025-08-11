import { useRef, useState } from 'react';

const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorder = useRef(null);

  const startRecording = async () => {
    if (!mediaRecorder.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (event) => {
          setAudioBlob(event.data);
        };
        recorder.start();
        mediaRecorder.current = recorder;
        setIsRecording(true);
      } catch (err) {
        console.error('Error starting recording: ', err);
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  return { isRecording, audioBlob, startRecording, stopRecording };
};

export default useAudioRecorder;
