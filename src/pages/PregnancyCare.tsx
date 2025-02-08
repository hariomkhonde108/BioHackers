import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PregnancyCare = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/tablet.png" alt="Tablet" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-gray-900">{t('Pregnancy Care')}</h1>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">{t('Home')}</Link>
            <Link to="/pregnancy-care" className="text-gray-700 hover:text-blue-600">{t('Pregnancy Care')}</Link>
            <Link to="/child-health" className="text-gray-700 hover:text-blue-600">{t('Child Health')}</Link>
            <Link to="/common-illnesses" className="text-gray-700 hover:text-blue-600">{t('Common Illnesses')}</Link>
            <Link to="/nutrition" className="text-gray-700 hover:text-blue-600">{t('Nutrition')}</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('Tips for a Healthy Pregnancy')}</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>{t('Eat a balanced diet rich in fruits, vegetables, and whole grains.')}</li>
            <li>{t('Take prenatal vitamins as recommended by your healthcare provider.')}</li>
            <li>{t('Stay hydrated by drinking plenty of water.')}</li>
            <li>{t('Get regular prenatal checkups to monitor your health and the baby\'s development.')}</li>
            <li>{t('Avoid alcohol, tobacco, and harmful substances.')}</li>
            <li>{t('Get enough rest and manage stress through relaxation techniques.')}</li>
            <li>{t('Engage in safe physical activities as advised by your healthcare provider.')}</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default PregnancyCare;
