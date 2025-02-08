import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">{t('Nutrition')}</h1>
          </Link>
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
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-8">
          <h2 className="text-xl font-semibold mb-4">{t('Nutrition Images and Videos')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-w-16 aspect-h-9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vQSYbAaDANE?si=yDPXGDXt8x17w8Nc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="public\images\calcium.jpg" alt="Nutrition 1" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\diet.jpg" alt="Nutrition 2" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\healthy_ch.jpg" alt="Nutrition 3" className="w-full h-full object-cover rounded-lg shadow-md" />
              <img src="public\images\protein.jpg" alt="Nutrition 4" className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nutrition;
