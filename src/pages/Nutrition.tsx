import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Nutrition = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/tablet.png" alt="Tablet" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-gray-900">{t('Nutrition')}</h1>
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
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('Healthy Eating Tips')}</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>{t('Eat a variety of foods to ensure you get all the necessary nutrients.')}</li>
            <li>{t('Include plenty of fruits and vegetables in your diet.')}</li>
            <li>{t('Stay hydrated by drinking enough water throughout the day.')}</li>
            <li>{t('Limit your intake of sugary drinks and snacks.')}</li>
            <li>{t('Choose whole grains over refined grains.')}</li>
            <li>{t('Include lean proteins such as fish, chicken, and legumes.')}</li>
            <li>{t('Avoid excessive salt and processed foods.')}</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Nutrition;
