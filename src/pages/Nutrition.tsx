import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Nutrition = () => {
  const { t } = useTranslation();

  const tips = [
    'Eat a variety of foods to ensure you get all the necessary nutrients',
    'Include plenty of fruits and vegetables in your diet',
    'Stay hydrated by drinking enough water throughout the day',
    'Limit your intake of sugary drinks and snacks',
    'Choose whole grains over refined grains',
    'Include lean proteins such as fish, chicken, and legumes',
    'Avoid excessive salt and processed foods'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">{t('Nutrition')}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">{t('Healthy Eating Tips')}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {tips.map((tip) => (
              <li key={tip}>{t(tip)}</li>
            ))}
          </ul>
          <div className="mt-4">
            <Link to="/" className="text-blue-600 hover:underline">{t('Back to Home')}</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nutrition;
