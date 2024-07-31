"use client";
import React from "react"; // Ensure React is imported
import { motion } from "framer-motion";
import SidebarLink from "@/components/Docs/SidebarLink";
import { FaUserCircle } from "react-icons/fa"; // Import the avatar icon
import Lines from "@/components/Lines";

const investors = [
  { name: "Abdul Paravengal", title: "Chief Business Officer, Shipper" },
  { name: "Arjun Vaidya", title: "Ex CEO, Dr. Vaidya's" },
  { name: "Sudarshan Sarma", title: "CEO, Carzonrent India Pvt. Ltd." },
  { name: "Naina Lal Kidwai", title: "Former CEO, HSBC India" },
  { name: "Rajan Anandan", title: "Managing Director, Sequoia Capital" },
  { name: "Sanjay Mehta", title: "Founder & Partner, 100X.VC" },
  // Add more investors here
];

export default function InvestorsPage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="sticky top-[74px] rounded-lg border border-gray-200 p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </motion.div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
              >
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Welcome to Andhra Angels Investors Section
                </h1>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  This section is dedicated to providing resources and information for angel investors and startup entrepreneurs.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Here, you can find detailed guides, investment opportunities, and success stories from our community.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Please visit:{" "}
                  <b>
                    <a href="https://andhraangels.com/investors" className="text-blue-600 dark:text-blue-400">
                      andhraangels.com/investors
                    </a>
                  </b>{" "}
                  to explore more about our investment opportunities and community events.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32 bg-gray-100 dark:bg-gray-900"
      >
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">Andhra Angel Investors</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {investors.map((investor, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 mx-4 my-4 sm:mx-2 sm:my-2"
              >
                <div className="flex flex-col items-center">
                  <FaUserCircle className="w-16 h-16 mb-4 text-gray-400 dark:text-gray-500" />
                  <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">{investor.name}</h3>
                  <p className="text-center text-gray-600 dark:text-gray-300">{investor.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              If you want to be part of Andhra Angel's exclusive network, then please fill the form.
            </p>
            <a href="https://andhraangels.com/join" className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg shadow-lg dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
              Join Now
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}