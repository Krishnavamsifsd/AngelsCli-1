"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const investors = [
  {
    name: "Abdul Paravengal",
    title: "Chief Business Officer, Shipper",
    linkedin: "https://www.linkedin.com/in/abdulparavengal",
    facebook: "https://www.facebook.com/abdulparavengal",
    instagram: "https://www.instagram.com/abdulparavengal",
    expertise: "Logistics, Supply Chain",
    budget: "₹3.5 Crore - ₹7 Crore",
    experience: "15 years",
  },
  {
    name: "Arjun Vaidya",
    title: "Ex CEO, Dr. Vaidya's",
    linkedin: "https://www.linkedin.com/in/arjunvaidya",
    facebook: "https://www.facebook.com/arjunvaidya",
    instagram: "https://www.instagram.com/arjunvaidya",
    expertise: "Healthcare, Ayurveda",
    budget: "₹1.4 Crore - ₹3.5 Crore",
    experience: "10 years",
  },
  {
    name: "Radhika Aggarwal",
    title: "Co-Founder, ShopClues",
    linkedin: "https://www.linkedin.com/in/radhikaaggarwal",
    facebook: "https://www.facebook.com/radhikaaggarwal",
    instagram: "https://www.instagram.com/radhikaaggarwal",
    expertise: "E-commerce, Retail",
    budget: "₹5 Crore - ₹10 Crore",
    experience: "12 years",
  },
  {
    name: "Kunal Shah",
    title: "Founder, CRED",
    linkedin: "https://www.linkedin.com/in/kunalshah",
    facebook: "https://www.facebook.com/kunalshah",
    instagram: "https://www.instagram.com/kunalshah",
    expertise: "Fintech, Startups",
    budget: "₹10 Crore - ₹20 Crore",
    experience: "18 years",
  },
  {
    name: "Vani Kola",
    title: "Managing Director, Kalaari Capital",
    linkedin: "https://www.linkedin.com/in/vanikola",
    facebook: "https://www.facebook.com/vanikola",
    instagram: "https://www.instagram.com/vanikola",
    expertise: "Venture Capital, Investments",
    budget: "₹15 Crore - ₹30 Crore",
    experience: "20 years",
  },
  {
    name: "Naveen Tewari",
    title: "Founder, InMobi",
    linkedin: "https://www.linkedin.com/in/naveentewari",
    facebook: "https://www.facebook.com/naveentewari",
    instagram: "https://www.instagram.com/naveentewari",
    expertise: "Advertising, Mobile Technology",
    budget: "₹8 Crore - ₹16 Crore",
    experience: "14 years",
  },
  {
    name: "Anupam Mittal",
    title: "Founder, Shaadi.com",
    linkedin: "https://www.linkedin.com/in/anupammittal",
    facebook: "https://www.facebook.com/anupammittal",
    instagram: "https://www.instagram.com/anupammittal",
    expertise: "Online Matrimony, Entrepreneurship",
    budget: "₹4 Crore - ₹8 Crore",
    experience: "17 years",
  },
  {
    name: "Peyush Bansal",
    title: "Founder, Lenskart",
    linkedin: "https://www.linkedin.com/in/peyushbansal",
    facebook: "https://www.facebook.com/peyushbansal",
    instagram: "https://www.instagram.com/peyushbansal",
    expertise: "Retail, Eyewear",
    budget: "₹6 Crore - ₹12 Crore",
    experience: "13 years",
  },
  {
    name: "Namita Thapar",
    title: "Executive Director, Emcure Pharmaceuticals",
    linkedin: "https://www.linkedin.com/in/namitathapar",
    facebook: "https://www.facebook.com/namitathapar",
    instagram: "https://www.instagram.com/namitathapar",
    expertise: "Pharmaceuticals, Healthcare",
    budget: "₹7 Crore - ₹14 Crore",
    experience: "16 years",
  },
  {
    name: "Ashneer Grover",
    title: "Co-Founder, BharatPe",
    linkedin: "https://www.linkedin.com/in/ashneergrover",
    facebook: "https://www.facebook.com/ashneergrover",
    instagram: "https://www.instagram.com/ashneergrover",
    expertise: "Fintech, Payments",
    budget: "₹9 Crore - ₹18 Crore",
    experience: "15 years",
  },
];

const mentors = [
  // {
  //   name: "John Doe",
  //   title: "Senior Software Engineer",
  //   expertise: "Full Stack Development",
  //   experience: "10 years",
  //   linkedin: "https://www.linkedin.com/in/johndoe",
  //   facebook: "https://www.facebook.com/johndoe",
  //   instagram: "https://www.instagram.com/johndoe"
  // }
];

function InvestorsPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32"
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Andhra Angel Network Investors
        </h2>
        
        {/* Introduction Section */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Welcome to the Andhra Angel Network, where visionary investors meet innovative startups. Our network is dedicated to fostering growth and success in the entrepreneurial ecosystem.
          </p>
        </div>

        {/* Investors Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {investors.map((investor, index) => (
        <motion.div
        key={index}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-[#4a00e0] dark:to-[#8e2de2] text-black dark:text-white m-[15px] md:m-0 border border-gray-200 dark:border-[#3b007d]"
      >
        <div className="relative mb-4 h-24 w-24 rounded-full bg-white p-1">
          <img
            src={`https://via.placeholder.com/150?text=${investor.name.charAt(0)}`}
            alt={investor.name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-center mb-1">{investor.name}</h3>
        <p className="text-sm text-center mb-4">{investor.title}</p>
        <div className="bg-gray-200 dark:bg-[#3b007d] w-full p-4 rounded-lg mb-1">
          <p className="text-sm mb-1">Expertise: {investor.expertise}</p>
          <p className="text-sm mb-1">Budget: {investor.budget}</p>
          <p className="text-sm mb-1">Experience: {investor.experience}</p>
        </div>
        <div className="bg-gray-200 dark:bg-[#3b007d] w-full p-4 rounded-lg">
          <div className="flex justify-center space-x-4">
            <a href={investor.linkedin} className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={investor.facebook} className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href={investor.instagram} className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.div>
          ))}
        </div> */}
<br />
<br />
<br />
{/* Introduction Section */}
<h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Andhra Angel Network Mentors
        </h2>
<div className="mb-12 text-center">
  <p className="text-lg text-gray-700 dark:text-gray-300">
    Welcome to the Andhra Angel Network Mentorship Program. Our mentors are experienced professionals dedicated to guiding and supporting innovative startups. Join us to gain valuable insights and accelerate your entrepreneurial journey.
  </p>
</div>

{/* Mentors Grid */}
{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {mentors?.map((mentor, index) => (
    <motion.div
      key={index}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-[#4a00e0] dark:to-[#8e2de2] text-black dark:text-white m-[15px] md:m-0 border border-gray-200 dark:border-[#3b007d]"
    >
      <div className="relative mb-4 h-24 w-24 rounded-full bg-white p-1">
        <img
          src={`https://via.placeholder.com/150?text=${mentor.name.charAt(0)}`}
          alt={mentor.name}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-center mb-1">{mentor.name}</h3>
      <p className="text-sm text-center mb-4">{mentor.title}</p>
      <div className="bg-gray-200 dark:bg-[#3b007d] w-full p-4 rounded-lg mb-1">
        <p className="text-sm mb-1">Expertise: {mentor.expertise}</p>
        <p className="text-sm mb-1">Experience: {mentor.experience}</p>
      </div>
      <div className="bg-gray-200 dark:bg-[#3b007d] w-full p-4 rounded-lg">
        <div className="flex justify-center space-x-4">
          <a href={mentor.linkedin} className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={mentor.facebook} className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href={mentor.instagram} className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div> */}
        {/* Success Stories Section */}
        {/* <div className="mt-16">
  <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
    Success Stories
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 dark:from-purple-600 dark:via-indigo-600 dark:to-blue-600 opacity-20"></div>
      <h4 className="relative text-lg font-semibold text-gray-900 dark:text-white">Startup A</h4>
      <p className="relative mt-2 text-gray-700 dark:text-gray-300">
        "With the support of Andhra Angel Network, we were able to scale our operations and achieve significant growth in a short period."
      </p>
      <p className="relative mt-4 text-right text-gray-900 dark:text-white">- Founder, Startup A</p>
    </div>
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 dark:from-green-600 dark:via-teal-600 dark:to-blue-600 opacity-20"></div>
      <h4 className="relative text-lg font-semibold text-gray-900 dark:text-white">Startup B</h4>
      <p className="relative mt-2 text-gray-700 dark:text-gray-300">
        "The mentorship and funding from the network were crucial in helping us navigate the challenges of the early stages of our business."
      </p>
      <p className="relative mt-4 text-right text-gray-900 dark:text-white">- Founder, Startup B</p>
    </div>
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-yellow-600 dark:via-orange-600 dark:to-red-600 opacity-20"></div>
      <h4 className="relative text-lg font-semibold text-gray-900 dark:text-white">Startup C</h4>
      <p className="relative mt-2 text-gray-700 dark:text-gray-300">
        "Thanks to Andhra Angel Network, we connected with the right investors who believed in our vision and helped us turn it into reality."
      </p>
      <p className="relative mt-4 text-right text-gray-900 dark:text-white">- Founder, Startup C</p>
    </div>
  </div>
</div> */}

        {/* How It Works Section */}
        <div className="mt-16">
  <h3 className="mb-8 text-center text-xl font-bold tracking-wide text-gray-900 dark:text-white">
    How It Works
  </h3>
  <div className="space-y-8">
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mx-4 md:mx-0">
      <div className="absolute top-0 left-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center transform -translate-y-1/2 -translate-x-1/2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
      </div>
      <h4 className="text-lg font-semibold tracking-wide text-gray-900 dark:text-white ml-16">Step 1: Join the Network</h4>
      <p className="mt-2 text-gray-700 dark:text-gray-300 ml-16">
        Fill out the application form on our website to join the Andhra Angel Network. Our team will review your application and get in touch with you.
      </p>
    </div>
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mx-4 md:mx-0">
      <div className="absolute top-0 left-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center transform -translate-y-1/2 -translate-x-1/2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h4 className="text-lg font-semibold tracking-wide text-gray-900 dark:text-white ml-16">Step 2: Connect with Startups</h4>
      <p className="mt-2 text-gray-700 dark:text-gray-300 ml-16">
        Once you are a member, you will have access to a curated list of innovative startups looking for investment. Connect with the startups that align with your interests and expertise.
      </p>
    </div>
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mx-4 md:mx-0">
      <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center transform -translate-y-1/2 -translate-x-1/2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h4 className="text-lg font-semibold tracking-wide text-gray-900 dark:text-white ml-16">Step 3: Invest and Mentor</h4>
      <p className="mt-2 text-gray-700 dark:text-gray-300 ml-16">
        Provide capital and mentorship to the startups you believe in. Help them grow and succeed with your expertise and guidance.
      </p>
    </div>
  </div>
</div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-base text-gray-700 dark:text-gray-300">
            If you want to be part of Andhra Angel's exclusive network, then please fill the form.
          </p>
          <a
            href="/apply-now"
            className="mt-4 inline-block rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition-colors duration-300 hover:bg-blue-600"
          >
            Join Now
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default InvestorsPage;