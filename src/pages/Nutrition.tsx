import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Stethoscope, Home, Apple, Heart } from 'lucide-react';

const Nutrition = () => {
  const { t } = useTranslation();

  const nutritionTips = [
    'Eat a variety of colorful fruits and vegetables',
    'Choose whole grains over refined grains',
    'Include lean proteins in your diet',
    'Limit processed foods and added sugars',
    'Stay hydrated with water',
    'Control portion sizes',
    'Eat regular meals throughout the day',
    'Include healthy fats in your diet',
    'Read nutrition labels carefully'
  ];

  const nutrients = [
    {
      name: 'Protein',
      benefits: 'Builds and repairs tissues, supports immune system',
      sources: 'Meat, fish, eggs, legumes, nuts'
    },
    {
      name: 'Carbohydrates',
      benefits: 'Provides energy, supports brain function',
      sources: 'Rice, bread, pasta, fruits, vegetables'
    },
    {
      name: 'Vitamins',
      benefits: 'Supports overall health, boosts immunity',
      sources: 'Vegetables, fruits, dairy products'
    },
    {
      name: 'Minerals',
      benefits: 'Maintains bone health, supports vital functions',
      sources: 'Dairy, leafy greens, nuts, seeds'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">{t('Nutrition')}</h1>
            </Link>
          </div>
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <span className="text-gray-900 font-medium">Home</span>
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">{t('Essential Nutrients Guide')}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-yellow-50">
                <th className="border border-gray-300 p-2">Nutrient</th>
                <th className="border border-gray-300 p-2">Benefits</th>
                <th className="border border-gray-300 p-2">Food Sources</th>
              </tr>
            </thead>
            <tbody>
              {nutrients.map((nutrient, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{nutrient.name}</td>
                  <td className="border border-gray-300 p-2">{nutrient.benefits}</td>
                  <td className="border border-gray-300 p-2">{nutrient.sources}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Healthy Eating Tips')}</h2>
          <ul className="list-disc pl-5">
            {nutritionTips.map((tip) => (<li key={tip}>{t(tip)}</li>))}
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Daily Nutrition Requirements')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600">Carbohydrates</h3>
              <p><strong>Daily Needs:</strong> 45-65% of total calories</p>
              <p><strong>Best Sources:</strong> Whole grains, fruits, vegetables</p>
              <p><strong>Benefits:</strong> Energy, fiber, essential nutrients</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600">Proteins</h3>
              <p><strong>Daily Needs:</strong> 10-35% of total calories</p>
              <p><strong>Best Sources:</strong> Lean meats, fish, legumes</p>
              <p><strong>Benefits:</strong> Muscle repair, immune function</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600">Fats</h3>
              <p><strong>Daily Needs:</strong> 20-35% of total calories</p>
              <p><strong>Best Sources:</strong> Nuts, avocados, olive oil</p>
              <p><strong>Benefits:</strong> Brain health, vitamin absorption</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Nutrition Awareness')}</h2>
          <div className="flex justify-center my-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vQSYbAaDANE?si=yDPXGDXt8x17w8Nc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <img src="public\images\what_to_eat.jpg" alt="Nutrition guide" className="rounded-lg shadow-md" />
            <img src="public\images\diet.jpg" alt="Healthy diet" className="rounded-lg shadow-md" />
            <img src="public\images\protein.jpg" alt="Protein sources" className="rounded-lg shadow-md" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nutrition;