import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CommonIllnesses = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/tablet.png" alt="Tablet" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-gray-900">{t('Common Illnesses')}</h1>
          </div>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600">{t('Home')}</Link>
            <Link to="/pregnancy-care" className="text-gray-700 hover:text-blue-600">{t('Pregnancy Care')}</Link>
            <Link to="/child-care" className="text-gray-700 hover:text-blue-600">{t('Child Care')}</Link>
            <Link to="/common-illnesses" className="text-gray-700 hover:text-blue-600">{t('Common Illnesses')}</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <p className="text-gray-900">{t('Content for Common Illnesses...')}</p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6">{t('Symptoms')}</h2>
          <p className="text-gray-700 mt-2">{t('Common symptoms include fever, cough, and fatigue.')}</p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6">{t('Prevention')}</h2>
          <p className="text-gray-700 mt-2">{t('Preventive measures include regular hand washing and avoiding close contact with sick individuals.')}</p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6">{t('Treatment')}</h2>
          <p className="text-gray-700 mt-2">{t('Treatment options vary depending on the illness and may include rest, hydration, and medication.')}</p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6">{t('When to See a Doctor')}</h2>
          <p className="text-gray-700 mt-2">{t('If symptoms persist or worsen, it is important to seek medical advice.')}</p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6">{t('Additional Resources')}</h2>
          <p className="text-gray-700 mt-2">{t('For more information, visit the World Health Organization website or consult your healthcare provider.')}</p>
        </div>
      </main>
    </div>
  );
};

export default CommonIllnesses;
