"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const COUNTDOWN_TARGET = new Date("2024-09-08T14:00:00");
const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();

  if (totalTimeLeft <= 0) {
    return { message: "The event is now live! Countdown ended." };
  }


  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
};
const GrandLaunchPopup = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isVisible, setIsVisible] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 p-4 sm:p-8">
        <div className="relative bg-black p-6 sm:p-8 rounded-lg shadow-lg max-w-lg w-full text-center overflow-hidden bg-cover bg-center bg-no-repeat border-4 border-yellow-400 border-opacity-50 glow-border" style={{ backgroundImage: "url('/images/shape/celebration.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-gradient mb-4">Grand Launch Event</h2>
            <p className="text-yellow-gradient mb-4">
              Celebrate with us on <strong>8th September</strong> for the 
              <br /> Grand Launch
               {/* on <strong>World Entrepreneur Day</strong>! */}
            </p>
            <p className="text-yellow-gradient mb-4">Venue: <strong>ITC Guntur</strong></p>
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-gradient">Countdown to the Big Day:</h3>
              <div className="flex justify-center space-x-2 sm:space-x-4 mt-2">
                {Object.entries(timeLeft).map(([label, value]) => (
                  <motion.div
                    key={label}
                    className={`text-center ${label}-background p-2 rounded-lg`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="block text-3xl sm:text-4xl font-bold text-yellow-gradient">
                      {value}
                    </span>
                    <span className="block text-xs sm:text-sm text-yellow-gradient">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <button
              onClick={handleClose}
              className="mt-4 px-3 py-2 sm:px-4 sm:py-2 bg-yellow-gradient text-black rounded-lg shadow-md hover:bg-yellow-gradient-dark transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default GrandLaunchPopup;