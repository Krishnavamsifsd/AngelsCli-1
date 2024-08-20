"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center py-10 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30"
        style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <div className="mb-4 inline-block rounded-full bg-white dark:bg-gray-700 px-6 py-2 shadow-md dark:border dark:border-gray-600">
          <span className="text-sectiontitle font-medium text-black dark:text-white">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100 md:w-4/5 xl:w-1/2 xl:text-4xl">
          {subtitle}
        </h2>
        <p className="mx-auto text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 md:w-4/5 lg:w-3/5 xl:w-[60%] leading-relaxed">
          {description}
        </p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;