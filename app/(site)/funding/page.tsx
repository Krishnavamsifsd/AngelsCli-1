"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';
import FundingEligibility from '@/components/funding/FundingEligibility';

const FundingEligibilityComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState({
    eligibility: true,
    deck: false,
  });

  const toggleAccordion = (section: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    })); 
  };

  return (
    <div className="p-6 mt-16 text-gray-900 dark:text-gray-100 rounded-lg shadow-md font-sans">
      <h1 className="text-3xl font-bold mb-4">Is your startup Eligible for Angel Funding?</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-shrink-0 md:mr-4 mb-4 md:mb-0" style={{ width: '300px', height: '300px' }}>
          <Image
            src="/images/about/angel-investors.png"
            alt="Eligibility Image"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 w-full">
          <div className="mb-4 w-full">
            <button
              onClick={() => toggleAccordion('eligibility')}
              className="w-full flex justify-between items-center text-left text-lg font-semibold mb-3 p-3 rounded-lg focus:outline-none bg-gray-200 dark:bg-gray-700"
            >
              Work with Andhra angel network if:
              {isOpen.eligibility ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen.eligibility ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {isOpen.eligibility && (
                <ul className="list-disc list-inside mb-4 pl-4 text-sm">
                  <li className="mb-2">You need to raise between 50 Lakhs INR to 2.5 Crores INR from an angel group.</li>
                  <li className="mb-2">Your start up is currently in the early revenue stage.</li>
                  <li className="mb-2">Your startup has gained traction in a large addressable market.</li>
                  <li className="mb-2">Your startup provides unique solutions that are significantly different from competitors.</li>
                  <li className="mb-2">Your start up is headquartered in India.</li>
                </ul>
              )}
            </motion.div>
          </div>

          <div className="mb-4 w-full">
            <button
              onClick={() => toggleAccordion('deck')}
              className="w-full flex justify-between items-center text-left text-lg font-semibold mb-3 p-3 rounded-lg focus:outline-none bg-gray-200 dark:bg-gray-700"
            >
              Your start up deck
              {isOpen.deck ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen.deck ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {isOpen.deck && (
                <div className="pl-4 text-sm">
                  <p className="mb-4">
                    Your pitch should be a comprehensive overview of business aspects such as products or services, clients, go-to-market strategy, etc.
                  </p>
                  <p className="mb-4">
                    Before you submit your deck, ensure that you have read the Eligibility Checklist below. We urge you to submit the best version of your presentation with relevant and concise data. You should include data on all the core team members and cover details such as your advisor’s qualifications, if any.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          <a href="#" className="text-blue-500 hover:underline text-sm">Submit now</a>
        </div>
      </div>

      {/* Required Documents Section */}
      <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Business Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(173,216,230,0.1), rgba(75,0,130,0.1))',
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Business</h3>
          <p className="mb-4">You can view a list of necessary documents below.</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 text-sm rounded border border-blue-700 hover:from-blue-600 hover:to-purple-600 transition duration-300">List of documents</button>
        </motion.div>
        {/* Legal Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: 'linear-gradient(135deg, rgba(173,216,230,0.1), rgba(75,0,130,0.1))',
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <p className="mb-4">You can view a list of necessary documents below.</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 text-sm rounded border border-blue-700 hover:from-blue-600 hover:to-purple-600 transition duration-300">List of documents</button>
        </motion.div>
        {/* Financial Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(173,216,230,0.1), rgba(75,0,130,0.1))',
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Financial</h3>
          <p className="mb-4">You can view a list of necessary documents below.</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 text-sm rounded border border-blue-700 hover:from-blue-600 hover:to-purple-600 transition duration-300">List of documents</button>
        </motion.div>
        {/* Termsheet Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(173,216,230,0.1), rgba(75,0,130,0.1))',
          }}
        >
          <h3 className="text-xl font-semibold mb-4">Termsheet</h3>
          <p className="mb-4">You can view the format of the termsheet here.</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 text-sm rounded border border-blue-700 hover:from-blue-600 hover:to-purple-600 transition duration-300">Termsheet Format</button>
        </motion.div>
      </div>
    </div>

    <FundingEligibility />
    </div>
  );
};

export default FundingEligibilityComponent;