"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaProjectDiagram,
  FaBusinessTime,
  FaBook,
  FaLightbulb,
  FaTools,
  FaChalkboardTeacher,
  FaCode,
  FaDatabase,
  FaRobot,
  FaBullhorn,
  FaTasks,
  FaPalette,
  FaChartLine,
  FaMoneyBillWave,
  FaUserTie,
  FaHandshake,
  FaBalanceScale,
  FaLaptopCode,
  FaRocket,
  FaSeedling,
} from "react-icons/fa"; // Added icons for new sections
import { useTheme } from "next-themes";
import EntrepreneurMindsetCurriculum from "@/components/emp/Emp";
// import EntrepreneurMindsetCurriculum from "components/emp/EntrepreneurMindsetCurriculum.tsx";

const services = [
  {
    icon: FaUsers,
    text: "Co-working Space",
    animation: "fade-up-right",
  },
  {
    icon: FaProjectDiagram,
    text: "Conference Rooms with LCD Projectors",
    animation: "slide-up",
  },
  {
    icon: FaBusinessTime,
    text: "Shared Office Infrastructure",
    animation: "slide-up",
  },
  {
    icon: FaBook,
    text: "Library and Learning Resources",
    animation: "fade-up-right",
  },
  {
    icon: FaLightbulb,
    text: "Prototyping Laboratory",
    animation: "slide-up",
  },
  {
    icon: FaTools,
    text: "Testing Infrastructure",
    animation: "slide-up",
  },
];

const skills = [
  { text: "Web Development", icon: FaCode },
  { text: "Data Science", icon: FaDatabase },
  { text: "Machine Learning", icon: FaRobot },
  { text: "Digital Marketing", icon: FaBullhorn },
  { text: "Project Management", icon: FaTasks },
  { text: "UI/UX Design", icon: FaPalette },
  { text: "Business Strategy", icon: FaChartLine },
  { text: "Financial Planning", icon: FaMoneyBillWave },
  { text: "Leadership", icon: FaUserTie },
  { text: "Sales", icon: FaHandshake },
  { text: "Customer Service", icon: FaChalkboardTeacher },
  { text: "Legal Compliance", icon: FaBalanceScale },
];

const additionalServices = [
  { text: "Hackathon", icon: FaLaptopCode },
  { text: "Internship Accelerator Program", icon: FaRocket },
  { text: "Incubator Service", icon: FaSeedling },
];

const Services = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents rendering until the theme is loaded

  return (
    <div className={`container mx-auto px-4 py-8 pt-20 sm:pt-24`}>
      {" "}
      {/* Adjusted padding at the top */}
      <div className="section-header mb-8 text-center">
        <h3 className="mb-2 text-xl font-bold text-indigo-600 sm:text-2xl">
          Coworking Space
        </h3>
        <p
          className={`text-xs sm:text-sm ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}
        >
          Explore our range of services designed to help you succeed.
        </p>
      </div>
      <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative rounded-lg border p-3 text-center shadow-md ${resolvedTheme === "dark" ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-800"} transform transition-transform hover:scale-105 hover:bg-indigo-100 hover:shadow-2xl dark:hover:bg-indigo-900`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mx-auto mb-2 flex h-8 w-8 transform items-center justify-center rounded-full bg-indigo-500 text-white transition-transform hover:rotate-12 sm:h-10 sm:w-10">
              <service.icon className="text-lg sm:text-xl" />
            </div>
            <p className="text-xs font-medium sm:text-sm">{service.text}</p>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity hover:opacity-20"></div>
          </motion.div>
        ))}
      </div>
      <div className="section-header mb-8 text-center">
        <h3 className="mb-2 text-xl font-bold text-indigo-600 sm:text-2xl">
          Skill Training
        </h3>
        <p
          className={`text-xs sm:text-sm ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}
        >
          Enhance your skills with our comprehensive training programs,
          including essential skills for startups.
        </p>
      </div>
      <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`relative rounded-lg border p-3 text-center shadow-md ${resolvedTheme === "dark" ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-800"} transform transition-transform hover:scale-105 hover:bg-indigo-100 hover:shadow-2xl dark:hover:bg-indigo-900`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mx-auto mb-2 flex h-8 w-8 transform items-center justify-center rounded-full bg-indigo-500 text-white transition-transform hover:rotate-12 sm:h-10 sm:w-10">
              <skill.icon className="text-lg sm:text-xl" />
            </div>
            <p className="text-xs font-medium sm:text-sm">{skill.text}</p>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity hover:opacity-20"></div>
          </motion.div>
        ))}
      </div>
      <div className="section-header mb-8 text-center">
        <h3 className="mb-2 text-xl font-bold text-indigo-600 sm:text-2xl">
          Additional Services
        </h3>
        <p
          className={`text-xs sm:text-sm ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"}`}
        >
          We also offer hackathons, internship accelerator programs, and
          incubator services to support your growth.
        </p>
      </div>
      <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {additionalServices.map((service, index) => (
          <motion.div
            key={index}
            className={`relative rounded-lg border p-3 text-center shadow-md ${resolvedTheme === "dark" ? "border-gray-700 bg-gray-800 text-white" : "border-gray-200 bg-white text-gray-800"} transform transition-transform hover:scale-105 hover:bg-indigo-100 hover:shadow-2xl dark:hover:bg-indigo-900`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mx-auto mb-2 flex h-8 w-8 transform items-center justify-center rounded-full bg-indigo-500 text-white transition-transform hover:rotate-12 sm:h-10 sm:w-10">
              <service.icon className="text-lg sm:text-xl" />
            </div>
            <p className="text-xs font-medium sm:text-sm">{service.text}</p>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity hover:opacity-20"></div>
          </motion.div>
        ))}
      </div>
      <EntrepreneurMindsetCurriculum resolvedTheme={resolvedTheme} />
    </div>
  );
};

export default Services;
