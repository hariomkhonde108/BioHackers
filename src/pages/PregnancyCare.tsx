import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">{t('Pregnancy Care')}</h1>
          </Link>
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
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-8">
          <h2 className="text-xl font-semibold mb-4">{t('Pregnancy Care Images and Videos')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AMqcj0sJnsM?si=aMj67fpdrjX2g9LF&amp;start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="public\images\preg_care_1.jpg" alt="Pregnancy Care 1" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\preg_care_2.jpg" alt="Pregnancy Care 2" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\preg_care_3.jpg" alt="Pregnancy Care 3" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\preg_care_4.jpg" alt="Pregnancy Care 4" className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PregnancyCare;
