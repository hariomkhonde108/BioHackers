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
      </main>
    </div>
  );
};

export default CommonIllnesses;
