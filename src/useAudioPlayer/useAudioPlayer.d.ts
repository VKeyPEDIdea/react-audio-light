export default useAudioPlayer;
declare function useAudioPlayer(audioBlob: any): {
    audio: any;
    playAudio: () => void;
    stopAudio: () => void;
};
