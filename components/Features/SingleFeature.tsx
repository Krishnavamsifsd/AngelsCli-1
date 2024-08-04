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
      className="relative p-4 bg-gradient-to-r from-white to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg border border-gray-200 dark:border-blue-900"
    >
      <motion.div
        className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-sm"
        whileHover={{ rotate: 10, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <IconComponent style={{ fontSize: '24px' }} />
      </motion.div>
      <div className="mt-4">
        <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl border border-transparent hover:border-primary transition-colors"
        whileHover={{ borderColor: "#3b82f6" }}
      ></motion.div>
    </motion.div>
  );
};

export default SingleFeature;