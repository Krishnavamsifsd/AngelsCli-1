"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaProjectDiagram, FaBusinessTime, FaBook, FaLightbulb, FaTools, FaChalkboardTeacher, FaCode, FaDatabase, FaRobot, FaBullhorn, FaTasks, FaPalette, FaChartLine, FaMoneyBillWave, FaUserTie, FaHandshake, FaBalanceScale, FaLaptopCode, FaRocket, FaSeedling } from 'react-icons/fa'; // Added icons for new sections
import { useTheme } from 'next-themes';

const services = [
  {
    icon: FaUsers,
    text: 'Co-working Space',
    animation: 'fade-up-right',
  },
  {
    icon: FaProjectDiagram,
    text: 'Conference Rooms with LCD Projectors',
    animation: 'slide-up',
  },
  {
    icon: FaBusinessTime,
    text: 'Shared Office Infrastructure',
    animation: 'slide-up',
  },
  {
    icon: FaBook,
    text: 'Library and Learning Resources',
    animation: 'fade-up-right',
  },
  {
    icon: FaLightbulb,
    text: 'Prototyping Laboratory',
    animation: 'slide-up',
  },
  {
    icon: FaTools,
    text: 'Testing Infrastructure',
    animation: 'slide-up',
  },
];

const skills = [
  { text: 'Web Development', icon: FaCode },
  { text: 'Data Science', icon: FaDatabase },
  { text: 'Machine Learning', icon: FaRobot },
  { text: 'Digital Marketing', icon: FaBullhorn },
  { text: 'Project Management', icon: FaTasks },
  { text: 'UI/UX Design', icon: FaPalette },
  { text: 'Business Strategy', icon: FaChartLine },
  { text: 'Financial Planning', icon: FaMoneyBillWave },
  { text: 'Leadership', icon: FaUserTie },
  { text: 'Sales', icon: FaHandshake },
  { text: 'Customer Service', icon: FaChalkboardTeacher },
  { text: 'Legal Compliance', icon: FaBalanceScale },
];

const additionalServices = [
  { text: 'Hackathon', icon: FaLaptopCode },
  { text: 'Internship Accelerator Program', icon: FaRocket },
  { text: 'Incubator Service', icon: FaSeedling },
];

const Services = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents rendering until the theme is loaded

  return (
    <div className={`container mx-auto py-8 px-4 pt-20 sm:pt-24`}> {/* Adjusted padding at the top */}
      <div className="section-header text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-600">Coworking Space</h3>
        <p className={`text-xs sm:text-sm ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Explore our range of services designed to help you succeed.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative text-center p-3 rounded-lg shadow-md border ${resolvedTheme === 'dark' ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-200 bg-white text-gray-800'} transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 dark:hover:bg-indigo-900`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-center items-center mb-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500 text-white mx-auto transform transition-transform hover:rotate-12">
              <service.icon className="text-lg sm:text-xl" />
            </div>
            <p className="text-xs sm:text-sm font-medium">{service.text}</p>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity rounded-lg"></div>
          </motion.div>
        ))}
      </div>

      <div className="section-header text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-600">Skill Training</h3>
        <p className={`text-xs sm:text-sm ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Enhance your skills with our comprehensive training programs, including essential skills for startups.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`relative text-center p-3 rounded-lg shadow-md border ${resolvedTheme === 'dark' ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-200 bg-white text-gray-800'} transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 dark:hover:bg-indigo-900`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-center items-center mb-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500 text-white mx-auto transform transition-transform hover:rotate-12">
              <skill.icon className="text-lg sm:text-xl" />
            </div>
            <p className="text-xs sm:text-sm font-medium">{skill.text}</p>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity rounded-lg"></div>
          </motion.div>
        ))}
      </div>

      <div className="section-header text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-600">Additional Services</h3>
        <p className={`text-xs sm:text-sm ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          We also offer hackathons, internship accelerator programs, and incubator services to support your growth.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {additionalServices.map((service, index) => (
          <motion.div
            key={index}
            className={`relative text-center p-3 rounded-lg shadow-md border ${resolvedTheme === 'dark' ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-200 bg-white text-gray-800'} transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 dark:hover:bg-indigo-900`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex justify-center items-center mb-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500 text-white mx-auto transform transition-transform hover:rotate-12">
              <service.icon className="text-lg sm:text-xl" />
            </div>
            <p className="text-xs sm:text-sm font-medium">{service.text}</p>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity rounded-lg"></div>
          </motion.div>
        ))}
      </div>

      <div className="section-header text-center mb-8">
  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-600">Entrepreneur Mindset Curriculum</h3>
  <p className={`text-xs sm:text-sm ${resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
    We will start training about startups from school level with our "Entrepreneur Mindset Curriculum".
  </p>
</div>

    </div>
  );
};

export default Services;