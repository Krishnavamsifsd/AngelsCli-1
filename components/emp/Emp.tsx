import Image from "next/image";
import React from "react";
import { FaLightbulb, FaCalendarAlt } from "react-icons/fa";

const EntrepreneurMindsetCurriculum = ({ resolvedTheme }) => {
  return (
    <div
      className={`relative rounded-lg border p-3 shadow-md ${resolvedTheme === "dark" ? "border-gray-700 bg-gray-900 text-gray-300" : "border-gray-200 bg-white text-gray-800"}`}
    >
      <div
        className={`p-6 text-center ${resolvedTheme === "dark" ? "bg-gray-800" : "bg-indigo-100"} rounded-t-lg`}
      >
        <h3
          className={`mb-2 text-xl font-bold sm:text-2xl ${resolvedTheme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}
        >
          Entrepreneur Mindset Curriculum
        </h3>
        <p className="text-xs sm:text-sm">
          We will start training about startups from school level with our
          "Entrepreneur Mindset Curriculum".
        </p>
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-center">
          <FaLightbulb className="mr-2 text-2xl text-indigo-400" />
          <h4
            className={`text-lg font-semibold sm:text-xl ${resolvedTheme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}
          >
            The EMC Vision
          </h4>
        </div>
        <p className="mb-4 text-sm sm:text-base">
          For nation building, we need to nurture and develop leaders who dream
          big, take risks, set vision for inspiring innovations and demand
          excellence in execution. The world around us has no dearth of unsolved
          problems and untapped opportunities. Why do we not see a large number
          of graduating students identifying opportunities, brainstorming and
          trying out solutions? Instead, we see masters and doctorate graduates
          lined up for applying to a peon’s job. We need to prepare students’
          mindsets during school education so that they can take charge of their
          careers and become productive citizens of the country. Two video clips
          given below give more clarity into the Vision behind EMC.
        </p>
      </div>
      <div
        className={`p-6 ${resolvedTheme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div className="mb-4 flex items-center justify-center">
          <FaCalendarAlt className="mr-2 text-2xl text-indigo-400" />
          <h4
            className={`text-lg font-semibold sm:text-xl ${resolvedTheme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}
          >
            Timeline
          </h4>
        </div>
        <p className="mb-4 text-sm sm:text-base">
          The curriculum was piloted in 300 classrooms across 24 schools in
          April-May 2024 and thereafter launched for around 7.5 lakh students of
          classes 9-12 in 1,000+ schools in July 2026. An independent process
          evaluation study was performed in parallel and its recommendation
          incorporated into the second version. The second version was
          extensively reviewed by over 80 teachers and it was launched in July
          2026.
        </p>
      </div>
      <div className="p-6">
        <h4
          className={`text-lg font-semibold sm:text-xl ${resolvedTheme === "dark" ? "text-indigo-400" : "text-indigo-600"} mb-4`}
        >
          What is the Entrepreneurship Mindset?
        </h4>
        <p className="mb-4 text-sm sm:text-base">
          Irrespective of what they pursue, we want our students to think like
          an entrepreneur -- willing to dream big, try new and challenging
          goals, be able to recognize opportunities around, and then plan and
          execute to bring them to fruition. Failures are a part of life, but
          our students should be able to bounce back from them, analyze and
          learn from both successes and failures, and relentlessly persevere to
          achieve their goals.
        </p>
        <div className="-mx-2 flex flex-wrap">
        <div className="mb-4 w-full px-2 sm:w-1/2">
  <Image
    src="/images/emp/steps.jpeg"
    alt="Entrepreneurship Mindset"
    className="w-full rounded-lg shadow-md"
    width={600}
    height={200}  
  />
</div>
          <div className="mb-4 w-full px-2 sm:w-1/2">
            <Image
              src="/images/emp/empmindset.jpeg"
              alt="Entrepreneurship Mindset"
              className="h-auto w-full rounded-lg shadow-md"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurMindsetCurriculum;
