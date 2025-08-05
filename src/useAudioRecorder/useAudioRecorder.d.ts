export default useAudioRecorder;
declare function useAudioRecorder(): {
    isRecording: boolean;
    audioBlob: any;
    startRecording: () => Promise<void>;
    stopRecording: () => void;
};
