import React from 'react';
import Image from 'next/image';

const Founder = () => {
  return (
    <div className="container mx-auto mt-25 mb-10 p-8 bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
      <div className="md:w-1/3 flex flex-col items-center">
        <Image
          src="/images/team/abdul-riyaz.jpeg"
          alt="Abdul Riyaz"
          className="rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
          width={320}
          height={320}
          objectFit="cover"
        />
        <span className="mt-4 px-4 py-2 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full shadow-md transform transition duration-500 hover:bg-blue-200 flex flex-col items-center">
          <span>Co-Founder & Investment Director</span>
          <span>- Andhra Angel Networks</span>
        </span>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4">Abdul Riyaz</h2>
        <p className="text-md text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Abdul Riyaz is a seasoned leader with over 12 years in corporate management, recognized for his pivotal role in enhancing India's startup ecosystem. He has facilitated the growth of numerous startups, transforming many into unicorns.
        </p>
        <p className="text-md text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Abdul's career highlights include leadership roles at JP Morgan and Accenture, where he spearheaded impactful initiatives during the COVID-19 pandemic, such as healthcare assistance and employment generation. He holds a Master's in Computers and certifications in CSR and training.
        </p>
        <p className="text-md text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Currently, as Incubation Manager at Vignan Group, Abdul manages 200+ startup portfolios and leads Andhra Angel Networks, fostering investments in sectors like Agriculture and Renewable Energy.
        </p>
      </div>
    </div>
  );
};

export default Founder;