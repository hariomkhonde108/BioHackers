import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Stethoscope, Baby, Heart, Apple, Calendar, Activity, Moon } from 'lucide-react';

const PregnancyCare = () => {
  const { t } = useTranslation();

  const tips = [
    'Take prenatal vitamins regularly',
    'Maintain a healthy diet rich in folic acid',
    'Get regular moderate exercise',
    'Attend all prenatal checkups',
    'Get adequate rest and sleep',
    'Stay hydrated with plenty of water',
    'Avoid harmful substances',
    'Monitor weight gain',
    'Practice stress management'
  ];

  const trimesterMilestones = [
    {
      period: "First Trimester (Weeks 1-12)",
      physical: "Morning sickness, fatigue, breast tenderness",
      development: "Major organs and structures begin forming",
      care: "Start prenatal vitamins, avoid harmful substances"
    },
    {
      period: "Second Trimester (Weeks 13-26)",
      physical: "Baby bump shows, more energy, less nausea",
      development: "Baby starts moving, organs continue developing",
      care: "Regular exercise, healthy weight gain, anatomy scan"
    },
    {
      period: "Third Trimester (Weeks 27-40)",
      physical: "Back pain, shortness of breath, frequent urination",
      development: "Baby gains weight, gets into birth position",
      care: "Birth preparation, regular monitoring, rest"
    }
  ];

  const checkups = [
    { week: "8-10 weeks", exam: "First Prenatal Visit", description: "Complete physical exam, medical history, initial blood tests" },
    { week: "11-13 weeks", exam: "NT Scan", description: "Nuchal translucency ultrasound, genetic screening" },
    { week: "18-22 weeks", exam: "Anatomy Scan", description: "Detailed ultrasound to check baby's development" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">{t('Pregnancy Care')}</h1>
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
          <h2 className="text-xl font-semibold mb-4">{t('Prenatal Checkup Schedule')}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-pink-50">
                <th className="border border-gray-300 p-2">Week</th>
                <th className="border border-gray-300 p-2">Examination</th>
                <th className="border border-gray-300 p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {checkups.map((checkup, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{checkup.week}</td>
                  <td className="border border-gray-300 p-2">{checkup.exam}</td>
                  <td className="border border-gray-300 p-2">{checkup.description}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Pregnancy Care Tips')}</h2>
          <ul className="list-disc pl-5">
            {tips.map((tip) => (<li key={tip}>{t(tip)}</li>))}
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Trimester Milestones')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trimesterMilestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-semibold text-blue-600">{milestone.period}</h3>
                <p><strong>Physical Changes:</strong> {milestone.physical}</p>
                <p><strong>Development:</strong> {milestone.development}</p>
                <p><strong>Care Focus:</strong> {milestone.care}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Nutrition During Pregnancy')}</h2>
          <p>Essential nutrients for a healthy pregnancy include:</p>
          <ul className="list-disc pl-5">
            <li>Folic acid - crucial for preventing birth defects</li>
            <li>Iron - important for preventing anemia</li>
            <li>Calcium - essential for bone development</li>
            <li>Protein - vital for baby's growth</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Common Pregnancy Concerns')}</h2>
          <p>Common symptoms and management tips:</p>
          <ul className="list-disc pl-5">
            <li><strong>Morning Sickness:</strong> Eat small, frequent meals and stay hydrated.</li>
            <li><strong>Back Pain:</strong> Practice good posture and gentle exercises.</li>
            <li><strong>Fatigue:</strong> Get adequate rest and maintain a regular sleep schedule.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">{t('Pregnancy Health Awareness')}</h2>
          <div className="flex justify-center my-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AMqcj0sJnsM?si=aMj67fpdrjX2g9LF&amp;start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <img src="public\images\preg_care_1.jpg" alt="Pregnancy Care 1" className="rounded-lg shadow-md" />
            <img src="public\images\preg_care_2.jpg" alt="Pregnancy Care 2" className="rounded-lg shadow-md" />
            <img src="public\images\preg_care_3.jpg" alt="Pregnancy Care 3" className="rounded-lg shadow-md" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PregnancyCare;