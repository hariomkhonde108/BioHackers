import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CommonIllnesses = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">{t('Common Illnesses')}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">{t('Symptoms')}</h2>
          <p className="text-gray-700 mb-4">{t('Common symptoms include fever, cough, fatigue, and body ache.')}</p>
          
          <h2 className="text-xl font-semibold mb-4">{t('Prevention')}</h2>
          <p className="text-gray-700 mb-4">{t('Preventive measures include regular hand washing, wearing masks in crowded places, and avoiding close contact with sick individuals.')}</p>
          
          <h2 className="text-xl font-semibold mb-4">{t('Treatment')}</h2>
          <p className="text-gray-700 mb-4">{t('Treatment may include rest, hydration, over-the-counter medications, and, in severe cases, professional medical care.')}</p>
          
          <h2 className="text-xl font-semibold mb-4">{t('When to See a Doctor')}</h2>
          <p className="text-gray-700">{t('If symptoms worsen or persist beyond a few days, it is advisable to consult a healthcare provider immediately.')}</p>
          <div className="mt-4">
            <Link to="/" className="text-blue-600 hover:underline">{t('Back to Home')}</Link>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-8">
          <h2 className="text-xl font-semibold mb-4">{t('Common Illnesses Images and Videos')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/71flxC_I2c0?si=HHTSt1YdgqqiNaU2&amp;start=41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="public\images\illness_1.jpg" alt="Common Illness 1" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\illness_2.jpg" alt="Common Illness 2" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\illness_3.jpg" alt="Common Illness 3" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\illness_4.jpg" alt="Common Illness 4" className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommonIllnesses;
