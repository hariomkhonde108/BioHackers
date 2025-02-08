import { useState, useCallback } from 'react';

interface UseSpeechSynthesisProps {
  language: string;
  rate?: number;
  pitch?: number;
}

export function useSpeechSynthesis({ language, rate = 1, pitch = 1 }: UseSpeechSynthesisProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const getVoices = useCallback(() => {
    const availableVoices = window.speechSynthesis.getVoices();
    setVoices(availableVoices.filter(voice => voice.lang.startsWith(language.split('-')[0])));
  }, [language]);

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      
      if (voices.length > 0) {
        utterance.voice = voices[0];
      }
      
      utterance.lang = language;
      utterance.rate = rate;
      utterance.pitch = pitch;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  }, [language, rate, pitch, voices]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  return {
    speak,
    stop,
    isSpeaking,
    getVoices,
    voices
  };
}