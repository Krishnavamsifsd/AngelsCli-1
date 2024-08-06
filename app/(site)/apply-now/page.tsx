"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  useEffect(() => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf62AXtz3OMqTk6SkW4FG-A-V0-DuBrC8Oyw8JarnFJm-0LsA/viewform';
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-transparent">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="loader mb-4"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        ></motion.div>
        <motion.p
          className="text-lg text-gray-800 dark:text-gray-200"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Redirecting to the application form...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Page;