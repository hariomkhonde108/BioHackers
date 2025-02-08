import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CommonIllnesses = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <header className="bg-white shadow-sm flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">{t('Dhanvantari')}</h1>
        <Link to="/" className="text-blue-600 hover:underline">{t('Home')}</Link>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">{t('Symptoms')}</h2>
          <p className="text-gray-700 mb-4">{t('Common symptoms include fever, cough, fatigue, sore throat, and body ache.')}</p>
          
          <h2 className="text-xl font-semibold mb-4">{t('Prevention')}</h2>
          <p className="text-gray-700 mb-4">{t('Preventive measures include regular hand washing, wearing masks in crowded places, maintaining social distance, and staying updated on vaccinations.')}</p>
          
          <h2 className="text-xl font-semibold mb-4">{t('Treatment')}</h2>
          <p className="text-gray-700 mb-4">{t('Treatment may include rest, hydration, over-the-counter medications, proper nutrition, and, in severe cases, professional medical care.')}</p>
          
          <h2 className="text-xl font-semibold mb-4">{t('When to See a Doctor')}</h2>
          <p className="text-gray-700 mb-4">{t('If symptoms worsen or persist beyond a few days, or if there is difficulty breathing, persistent high fever, or severe fatigue, consult a healthcare provider immediately.')}</p>
          
          <h2 className="text-xl font-semibold mb-4">{t('Common Health Issues and Their Symptoms')}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border">{t('Illness')}</th>
                  <th className="py-2 px-4 border">{t('Symptoms')}</th>
                  <th className="py-2 px-4 border">{t('Prevention')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border">{t('Flu')}</td>
                  <td className="py-2 px-4 border">{t('Fever, chills, sore throat, muscle aches')}</td>
                  <td className="py-2 px-4 border">{t('Vaccination, hand hygiene, avoid contact with sick individuals')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">{t('Cold')}</td>
                  <td className="py-2 px-4 border">{t('Runny nose, sneezing, congestion, mild fever')}</td>
                  <td className="py-2 px-4 border">{t('Hand washing, staying hydrated, avoiding sick people')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">{t('Stomach Flu')}</td>
                  <td className="py-2 px-4 border">{t('Nausea, vomiting, diarrhea, abdominal pain')}</td>
                  <td className="py-2 px-4 border">{t('Proper food hygiene, clean drinking water, hand washing')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-8">
          <h2 className="text-xl font-semibold mb-4">{t('Common Illnesses Images and Videos')}</h2>
          <div className="flex flex-col gap-4">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/71flxC_I2c0?si=HHTSt1YdgqqiNaU2&amp;start=41" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src="public/images/illness_1.jpg" alt="Common Illness 1" className="w-full object-cover rounded-lg shadow-md" />
              <img src="public/images/illness_2.jpg" alt="Common Illness 2" className="w-full object-cover rounded-lg shadow-md" />
              <img src="public/images/illness_3.jpg" alt="Common Illness 3" className="w-full object-cover rounded-lg shadow-md" />
              <img src="public/images/illness_4.jpg" alt="Common Illness 4" className="w-full object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommonIllnesses;