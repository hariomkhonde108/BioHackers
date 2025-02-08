import React from 'react';
import { useTranslation } from 'react-i18next';

const ChildHealth = () => {
  const { t } = useTranslation();

  const tips = [
    'Regular health checkups',
    'Maintain vaccination schedule',
    'Balanced nutrition',
    'Regular exercise',
    'Adequate sleep',
    'Good hygiene practices'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">{t('Child Health')}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">{t('Child Health Tips')}</h2>
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

export default ChildHealth;
