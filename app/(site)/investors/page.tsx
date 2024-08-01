"use client";
import React from "react";
import { motion } from "framer-motion";
import SidebarLink from "@/components/Docs/SidebarLink";
import { FaFacebook, FaInstagram, FaLinkedin, FaUserCircle } from "react-icons/fa";
import Lines from "@/components/Lines";

const investors = [
  {
    name: "Abdul Paravengal",
    title: "Chief Business Officer, Shipper",
    linkedin: "https://www.linkedin.com/in/abdulparavengal",
    facebook: "https://www.facebook.com/abdulparavengal",
    instagram: "https://www.instagram.com/abdulparavengal",
  },
  {
    name: "Arjun Vaidya",
    title: "Ex CEO, Dr. Vaidya's",
    linkedin: "https://www.linkedin.com/in/arjunvaidya",
    facebook: "https://www.facebook.com/arjunvaidya",
    instagram: "https://www.instagram.com/arjunvaidya",
  },
  {
    name: "Sudarshan Sarma",
    title: "CEO, Carzonrent India Pvt. Ltd.",
    linkedin: "https://www.linkedin.com/in/sudarshansarma",
    facebook: "https://www.facebook.com/sudarshansarma",
    instagram: "https://www.instagram.com/sudarshansarma",
  },
  {
    name: "Naina Lal Kidwai",
    title: "Former CEO, HSBC India",
    linkedin: "https://www.linkedin.com/in/nainalalkidwai",
    facebook: "https://www.facebook.com/nainalalkidwai",
    instagram: "https://www.instagram.com/nainalalkidwai",
  },
  {
    name: "Rajan Anandan",
    title: "Managing Director, Sequoia Capital",
    linkedin: "https://www.linkedin.com/in/rajananandan",
    facebook: "https://www.facebook.com/rajananandan",
    instagram: "https://www.instagram.com/rajananandan",
  },
  {
    name: "Sanjay Mehta",
    title: "Founder & Partner, 100X.VC",
    linkedin: "https://www.linkedin.com/in/sanjaymehta",
    facebook: "https://www.facebook.com/sanjaymehta",
    instagram: "https://www.instagram.com/sanjaymehta",
  },
  // Add more investors here
];
export default function InvestorsPage() {
  return (
    <>
  <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gray-50 pb-16 pt-24 dark:bg-gray-900 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/graph-chart-with-moving-up-arrow-stock-market-financial-investment-diagram-blue-background_56104-1814.jpg?w=826&t=st=1722535568~exp=1722536168~hmac=91d70c92ea94554c24b5f13d7f0a2b2812896ed9cd8e18b22e9185a0e4ec49f2')",
            backgroundAttachment: "fixed",
            zIndex: -1,
          }}
        ></div>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
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
                className="m-3 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
              >
                <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
                  Welcome to Andhra Angels Investors Section
                </h1>

                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  This section is dedicated to providing resources and
                  information for angel investors and startup entrepreneurs.
                </p>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  Here, you can find detailed guides, investment opportunities,
                  and success stories from our community.
                </p>
                <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                  Please visit:{" "}
                  <b>
                    <a
                      href="https://andhraangels.com/investors"
                      className="text-blue-600 dark:text-blue-400"
                    >
                      andhraangels.com/investors
                    </a>
                  </b>{" "}
                  to explore more about our investment opportunities and
                  community events.
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
        className="relative bg-cover bg-fixed bg-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/graph-chart-with-moving-up-arrow-stock-market-financial-investment-diagram-blue-background_56104-1814.jpg?w=826&t=st=1722535568~exp=1722536168~hmac=91d70c92ea94554c24b5f13d7f0a2b2812896ed9cd8e18b22e9185a0e4ec49f2)",
        }}
      >
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Andhra Angel Investors
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {investors.map((investor, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-4 my-4 rounded-lg p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:mx-2 sm:my-2"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaUserCircle className="h-16 w-16 text-gray-500 dark:text-gray-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">
                      {investor.name}
                    </h3>
                    <p className="text-gray-300">{investor.title}</p>
                    <div className="mt-2 flex space-x-2">
                      <a href={investor.linkedin} className="text-blue-500 hover:text-blue-700" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                      <a href={investor.facebook} className="text-blue-500 hover:text-blue-700" aria-label="Facebook">
                        <FaFacebook />
                      </a>
                      <a href={investor.instagram} className="text-pink-500 hover:text-pink-700" aria-label="Instagram">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-300">
              If you want to be part of Andhra Angel's exclusive network, then
              please fill the form.
            </p>
            <a
              href="https://andhraangels.com/join"
              className="mt-4 inline-block rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-blue-600"
            >
              Join Now
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}