import React, { useState, useEffect, useCallback } from 'react';
import { Mic, MicOff, Loader2, Volume2, VolumeX, Stethoscope, Star, Languages } from 'lucide-react';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';
import { supabase } from './lib/supabase';

const SUPPORTED_LANGUAGES = [
  { code: 'en-US', name: 'English' },
  { code: 'ta-IN', name: 'Tamil' },
  { code: 'te-IN', name: 'Telugu' },
  { code: 'ml-IN', name: 'Malayalam' },
  { code: 'kn-IN', name: 'Kannada' },
  { code: 'hi-IN', name: 'Hindi' },
  { code: 'es-ES', name: 'Spanish' }
];

function App() {
  const [language, setLanguage] = useState('en-US');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState<number | null>(null);

  const handleTranscript = useCallback((text: string) => {
    setTranscript(text);
  }, []);

  const { isListening, toggleListening, isSupported } = useSpeechRecognition({
    language,
    onResult: handleTranscript
  });

  const { speak, stop, isSpeaking, getVoices } = useSpeechSynthesis({
    language,
    rate: 1,
    pitch: 1
  });

  useEffect(() => {
    getVoices();
  }, [getVoices]);

  const handleSubmit = async () => {
    if (!transcript.trim()) return;

    setIsLoading(true);
    setFeedbackRating(null);

    try {
      // Here you would normally send the transcript to your NLP backend
      // For now, we'll simulate a response
      const simulatedResponse = "Based on your symptoms, it's important to stay hydrated and rest. However, if the fever persists for more than 2 days, please visit your nearest healthcare center.";
      
      // Log the interaction in Supabase
      const { error } = await supabase
        .from('interactions')
        .insert({
          query: transcript,
          response: simulatedResponse,
          language,
          feedback_rating: null
        });

      if (error) throw error;

      setResponse(simulatedResponse);
      speak(simulatedResponse);
    } catch (error) {
      console.error('Error processing request:', error);
      setResponse('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = async (rating: number) => {
    if (!transcript || !response) return;

    try {
      const { error } = await supabase
        .from('interactions')
        .update({ feedback_rating: rating })
        .eq('query', transcript)
        .eq('response', response);

      if (error) throw error;
      
      setFeedbackRating(rating);
    } catch (error) {
      console.error('Error saving feedback:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">AI Health Assistant</h1>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            <Languages className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Voice Input */}
            <div className="space-y-6">
              <div className="text-center">
                {isSupported ? (
                  <button
                    onClick={toggleListening}
                    className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                      isListening
                        ? 'bg-red-100 text-red-600 animate-pulse'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    {isListening ? (
                      <MicOff className="h-8 w-8" />
                    ) : (
                      <Mic className="h-8 w-8" />
                    )}
                  </button>
                ) : (
                  <div className="text-red-600">
                    Speech recognition is not supported in your browser
                  </div>
                )}
                <p className="mt-4 text-sm text-gray-600">
                  {isListening ? 'Tap to stop' : 'Tap to speak'}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                <h2 className="text-sm font-medium text-gray-700 mb-2">Your Question</h2>
                <p className="text-gray-900">{transcript || 'Your speech will appear here...'}</p>
                {transcript && (
                  <button
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>

            {/* Right Column - Response */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4 min-h-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm font-medium text-gray-700">AI Response</h2>
                  <button
                    onClick={() => isSpeaking ? stop() : response && speak(response)}
                    className={`p-2 rounded-full ${
                      isSpeaking ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {isSpeaking ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                  </button>
                </div>
                {isLoading ? (
                  <div className="flex items-center justify-center h-32">
                    <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
                  </div>
                ) : (
                  <>
                    <p className="text-gray-900">{response || 'AI response will appear here...'}</p>
                    {response && (
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Was this helpful?</h3>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              onClick={() => handleFeedback(rating)}
                              className={`p-2 rounded-full ${
                                feedbackRating === rating
                                  ? 'text-yellow-500'
                                  : 'text-gray-300 hover:text-yellow-500'
                              }`}
                            >
                              <Star className="h-6 w-6" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Topics</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Pregnancy Care', 'Child Health', 'Common Illnesses', 'Nutrition'].map((topic) => (
                    <button
                      key={topic}
                      className="bg-white px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-100 transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;