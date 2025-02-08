import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Stethoscope, Baby, Syringe, Apple, Brain, Weight as Height, Calendar, Heart } from 'lucide-react';

const ChildHealth = () => {
  const { t } = useTranslation();

  const tips = [
    'Regular health checkups',
    'Maintain vaccination schedule',
    'Balanced nutrition',
    'Regular exercise',
    'Adequate sleep',
    'Good hygiene practices',
    'Monitor growth and development',
    'Encourage social interactions',
    'Ensure mental well-being'
  ];

  const milestones = [
    {
      age: "2 months",
      physical: "Holds head up, begins to push up when lying down",
      cognitive: "Begins to smile at people, tries to look at parent",
      social: "Coos, makes gurgling sounds"
    },
    {
      age: "6 months",
      physical: "Rolls over in both directions, begins to sit without support",
      cognitive: "Knows familiar faces, likes to play with others",
      social: "Responds to own name, strings vowels together when babbling"
    },
    {
      age: "1 year",
      physical: "Begins to walk, can say 'mama' and 'dada'",
      cognitive: "Responds to simple verbal requests, uses gestures like pointing",
      social: "Shy or anxious with strangers, cries when parent leaves"
    }
  ];

  const vaccines = [
    { age: "Birth", name: "HepB", description: "Hepatitis B vaccine first dose" },
    { age: "2 months", name: "DTaP", description: "Diphtheria, tetanus, & acellular pertussis" },
    { age: "4 months", name: "IPV", description: "Inactivated poliovirus vaccine" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">{t('Dhanvantari')}</h1>
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
          <h2 className="text-xl font-semibold mb-4">{t('Vaccination Schedule')}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-gray-300 p-2">Age</th>
                <th className="border border-gray-300 p-2">Vaccine</th>
                <th className="border border-gray-300 p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {vaccines.map((vaccine, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{vaccine.age}</td>
                  <td className="border border-gray-300 p-2">{vaccine.name}</td>
                  <td className="border border-gray-300 p-2">{vaccine.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Child Health Tips')}</h2>
          <ul className="list-disc pl-5">
            {tips.map((tip) => (<li key={tip}>{t(tip)}</li>))}
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Development Milestones')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-semibold text-blue-600">{milestone.age}</h3>
                <p><strong>Physical:</strong> {milestone.physical}</p>
                <p><strong>Cognitive:</strong> {milestone.cognitive}</p>
                <p><strong>Social:</strong> {milestone.social}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Healthy Nutrition for Children')}</h2>
          <p>Proper nutrition is essential for children's growth. A well-balanced diet should include:</p>
          <ul className="list-disc pl-5">
            <li>Breastfeeding for infants up to 6 months</li>
            <li>Iron-fortified cereals and pureed fruits for infants 6-12 months</li>
            <li>Proteins, dairy, and whole grains for toddlers</li>
            <li>Encouraging fruits and vegetables at every meal</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Common Childhood Illnesses')}</h2>
          <p>Some common childhood illnesses and their prevention tips:</p>
          <ul className="list-disc pl-5">
            <li><strong>Colds and Flu:</strong> Encourage hand washing and proper hygiene.</li>
            <li><strong>Ear Infections:</strong> Keep ears dry and maintain hygiene.</li>
            <li><strong>Diarrhea:</strong> Provide clean drinking water and avoid contaminated food.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Child Health Awareness')}</h2>
          <div className="flex justify-center my-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vQSYbAaDANE?si=yDPXGDXt8x17w8Nc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <img src="public\images\child_health_4.jpg" alt="Child health awareness" className="rounded-lg shadow-md" />
            <img src="public\images\healthy_ch.jpg" alt="Healthy nutrition" className="rounded-lg shadow-md" />
            <img src="public\images\healthy_ch2.jpg" alt="Vaccination importance" className="rounded-lg shadow-md" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChildHealth;