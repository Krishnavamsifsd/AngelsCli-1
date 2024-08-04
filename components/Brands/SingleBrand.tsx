import React from "react";

const ServiceItem = ({ title, description, Icon, animationDelay }) => (
  <div
    className="relative flex items-start p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800 overflow-hidden border-gray-300 dark:border-none"
    style={{ animationDelay: `${animationDelay}s` }}
  >
    {/* Decorative Shape */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg pointer-events-none"></div>
    
    <Icon size={40} className="relative z-10 mr-4 text-primary" />
    <div className="relative z-10">
      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default ServiceItem;