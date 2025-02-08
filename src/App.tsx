import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Loader2, Volume2, VolumeX, Stethoscope, Star, Languages } from 'lucide-react';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';
import { supabase } from './lib/supabase';
import { useLanguage } from './context/LanguageContext';
import { useTranslation } from 'react-i18next';
import './App.css'; // Import the CSS file for animations

const SUPPORTED_LANGUAGES = [
  { code: 'en-US', name: 'English' },
  { code: 'kn-IN', name: 'Kannada' },
  { code: 'hi-IN', name: 'Hindi' }
];

function App() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
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

  useEffect(() => {
    i18n.changeLanguage(language.split('-')[0]);
  }, [language, i18n]);

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

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 relative overflow-hidden">
      <div className="background-animations">
        <div className="tablet"></div>
        <div className="stethoscope"></div>
        <div className="syringe"></div>
        {/* Add more health-related objects as needed */}
      </div>
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/tablet.png" alt="Tablet" className="h-8 w-8" />
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">{t('AI Health Assistant')}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 w-20"
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

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
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
                  {t('Speech recognition is not supported in your browser')}
                </div>
              )}
              <p className="mt-4 text-sm text-gray-600">
                {isListening ? t('Tap to stop') : t('Tap to speak')}
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => isSpeaking ? stop() : response && speak(response)}
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                  isSpeaking ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {isSpeaking ? <Volume2 className="h-8 w-8" /> : <VolumeX className="h-8 w-8" />}
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 min-h-[200px] shadow-md mb-8">
            <h2 className="text-sm font-medium text-gray-700 mb-2">{t('Your Question')}</h2>
            <p className="text-gray-900">{transcript || t('Your speech will appear here...')}</p>
            {transcript && (
              <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('Submit')}
              </button>
            )}
          </div>

          <div className="bg-blue-50 rounded-lg p-2 mb-8 float-right w-1/2">
            <h3 className="text-sm font-medium text-gray-700 mb-2">{t('Change Language')}</h3>
            <div className="grid grid-cols-2 gap-2">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="bg-white px-2 py-1 rounded-lg text-sm text-gray-700 hover:bg-blue-100 transition-colors"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 shadow-md mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-2">{t('Quick Topics')}</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Pregnancy Care', 'Child Health', 'Common Illnesses', 'Nutrition'].map((topic) => (
                <button
                  key={topic}
                  onClick={() => navigate(`/${topic.toLowerCase().replace(' ', '-')}`)}
                  className="bg-white px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-100 transition-colors shadow-sm"
                >
                  {t(topic)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 min-h-[200px] shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-gray-700">{t('AI Response')}</h2>
            </div>
            {isLoading ? (
              <div className="flex items-center justify-center h-32">
                <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
              </div>
            ) : (
              <>
                <p className="text-gray-900">{response || t('AI response will appear here...')}</p>
                {response && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">{t('Was this helpful?')}</h3>
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
        </div>
      </main>
    </div>
  );
}

export default App;