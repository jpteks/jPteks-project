import React from 'react';
import sa from '../assets/sa.png';
import { useTranslation } from 'react-i18next'
function Service() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
          {/* Heading on the left side */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left md:w-1/2"  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
          {t('service.title')} 
          </h1>
          {/* Description on the right side */}
          <p className="text-base md:text-lg text-gray-700 md:w-1/2 mt-4 md:mt-0"  data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in">
          {t('service.description')} 
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="grid gap-6 md:grid-cols-3"data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in"  >
          <ServiceCard 
            title={t('service.title1')}
            description={t('service.description1')}
          />
          <ServiceCard 
            title={t('service.title2')}
            description={t('service.description2')}
          />
          <ServiceCard 
            title={t('service.title3')}
            description={t('service.description3')}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description }) {
  const { t } = useTranslation();
  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        <img src={sa} alt="Service icon" className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h2>
      <p className="text-gray-600 text-center mb-4">
        {description}
      </p>
      <div className="text-center">
        <a href="#" className="text-white rounded-md px-6 py-2 font-semibold bg-yellow-600 hover:bg-yellow-700 transition">
        {t('service.learn_more')}
        </a>
      </div>
    </div>
  );
}

export default Service;
