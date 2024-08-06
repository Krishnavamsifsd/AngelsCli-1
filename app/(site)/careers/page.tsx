import { NextPage } from 'next';
import Head from 'next/head';

const Careers: NextPage = () => {
  return (
    <div className="container mx-auto p-4 pt-8 min-h-screen text-gray-800 dark:text-gray-200">
      <Head>
        <title>Careers at Andhra Angel Networks</title>
        <meta name="description" content="Join Andhra Angel Networks and be a part of a dynamic team supporting startups and nurturing entrepreneurial talent." />
      </Head>

      <h1 className="text-3xl font-bold text-center my-8">Careers at Andhra Angel Networks</h1>

      <section id="about" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">About Us</h2>
        <p className="text-base">
          Andhra Angel Networks is a platform for angel investors and startup entrepreneurs. We also conduct entrepreneurial mindset curriculum for school students, aiming to foster the next generation of innovators and leaders.
        </p>
      </section>

      <section id="openings" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Current Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-lg font-semibold tracking-wide">Business Development Intern</h3>            <p className="text-base">Assist in business development activities. Required skills: Communication, Market Research, Sales.</p>
            <a href="#" className="text-blue-500 dark:text-blue-300 underline">Learn More</a>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-lg font-semibold tracking-wide">Digital Media Intern</h3>
            <p className="text-base">Create and manage digital content. Required skills: Social Media Management, Content Creation, Analytics.</p>
            <a href="#" className="text-blue-500 dark:text-blue-300 underline">Learn More</a>
          </div>
        </div>
      </section>

      <section id="values" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Our Values</h2>
        <p className="text-base">
          At Andhra Angel Networks, we believe in integrity, innovation, and collaboration. We strive to create a supportive environment where everyone can thrive and contribute to our mission.
        </p>
      </section>

      <section id="benefits" className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Employee Benefits</h2>
        <p className="text-base">
          We offer competitive salaries, comprehensive health benefits, and opportunities for professional development. Join us to enjoy a balanced work-life environment and be part of a team that values your growth.
        </p>
      </section>

      <section id="apply" className="text-center">
        <h2 className="text-xl font-semibold mb-4">Ready to Apply?</h2>
        <p className="text-base">
          If you are excited about the opportunity to work with us, we would love to hear from you. Click the button below to view all open positions and submit your application.
        </p>
        <a href="mailto:careers@andhraangelnetworks.com" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Contact Us</a>
      </section>

      <footer className="text-center py-4">
        <p className="text-sm">&copy; 2023 Andhra Angel Networks. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Careers;