import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon: IconComponent, title, description, size } = feature;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative p-6 bg-gradient-to-r from-white to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200 dark:border-blue-900"
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-md"
        whileHover={{ rotate: 15, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <IconComponent size={32} />
      </motion.div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-transparent hover:border-primary transition-colors"></div>
    </motion.div>
  );
};

export default SingleFeature;