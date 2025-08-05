import { useEffect, useState } from 'react';

const useAudioPlayer = (audioBlob) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(new Audio(audioUrl));
    }
  }, [audioBlob]);

  const playAudio = () => {
    if (audio) {
      audio.play();
    }
  };

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return {
    audio,
    playAudio,
    stopAudio,
  };
};

export default useAudioPlayer;
