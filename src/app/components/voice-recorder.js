import { Mic, Square } from 'lucide-react';
import { useRef, useState } from 'react';

export default function VoiceRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBase64, setAudioBase64] = useState(null);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data)
                }
            }

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(chunksRef.current, {
                    type: 'audio/wav'
                })
                const reader = new FileReader();
                reader.readAsDataURL(audioBlob);
                reader.onloadend = () => {
                    const base64Audio = reader.result;
                    //Takes the actual data from the base64 string from ['data:audio/wav;base64', 'ACTUALBASE64DATAHERE']
                    setAudioBase64(base64Audio.split(',')[1]);
                }
                chunksRef.current = [];
            }
            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Failed recording' + error);
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    }

    const toggleRecording = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    }

    return (
        <div className='flex items-center p-4'>
            <button
                type='button'
                className={`w-12 h-12 rounded-full border flex items-center justify-center ${isRecording ? 'bg-red-500 text-white' : ""}`}
                onClick={toggleRecording}>
                {isRecording ? <Square
                    className='w-4 h-4' /> : <Mic
                    className='w-4 h-4' />}
            </button>
            <input type='hidden' name="audio" value={audioBase64 || ''} aria-label='Recorded audio' />
        </div>
    );
}