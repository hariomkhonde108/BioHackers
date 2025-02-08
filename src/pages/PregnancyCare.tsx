import React from 'react';
import { useTranslation } from 'react-i18next';

const PregnancyCare = () => {
  const { t } = useTranslation();

  const tips = [
    'Take prenatal vitamins regularly',
    'Maintain a healthy diet',
    'Get regular exercise',
    'Attend all prenatal checkups',
    'Get adequate rest',
    'Stay hydrated'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">{t('Pregnancy Care')}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">{t('Pregnancy Care Tips')}</h2>
          <ul className="space-y-2">
            {tips.map((tip) => (
              <li key={tip} className="flex items-center">
                <span className="mr-2">•</span>
                {t(tip)}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default PregnancyCare;
