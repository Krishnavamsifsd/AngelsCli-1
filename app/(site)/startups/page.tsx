import React from 'react';

const startups = [
  {
    name: 'Tech Atriocare Private Limited',
    description: 'Innovative healthcare solutions for a better tomorrow.',
    image: 'https://via.placeholder.com/150',
    funding: '$1M',
    website: 'https://techatriocare.com/?__cf_chl_rt_tk=oCUbH_sqp003La1nDG83QjSgHuatHR1AARd4bvHFy2E-1723268501-0.0.1.1-3754'
  },
  {
    name: 'Team Power Infrastructure Private Limited',
    description: 'Leading infrastructure solutions for modern cities.',
    image: 'https://via.placeholder.com/150',
    funding: '$2M'
  },
  {
    name: 'Jesvid Cryo Technologies Private Limited',
    description: 'Advanced cryogenic technologies for industrial applications.',
    image: 'https://via.placeholder.com/150',
    funding: '$500K'
  }
];

const Portfolio = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {startups.map((startup) => (
        <div
          key={startup.name}
          className="relative w-72 transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
        >
          <div className="h-32 overflow-hidden rounded-t-lg">
            <img
              className="h-full w-full object-cover object-center"
              src={startup.image}
              alt={startup.name}
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold dark:text-gray-100">{startup.name}</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
              {startup.description}
            </p>
            <p className="mt-4 text-blue-700 dark:text-blue-400 text-lg font-bold">
              {startup.funding}
            </p>
            {startup.website && (
              <a
                href={startup.website}
                className="mt-2 text-blue-500 dark:text-blue-300 text-sm underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  return (
    <div className="mt-20 mx-8">
      <h1 className="text-3xl font-bold text-center my-8">Andhra Angel Network Portfolio</h1>
      <h2 className="text-2xl font-semibold text-center my-4">Mentored Startups</h2>
      <Portfolio />
    </div>
  );
};

export default Page;