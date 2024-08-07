import React from 'react';
import { FaUsers, FaLightbulb, FaChartLine, FaTrophy, FaShieldAlt, FaBullhorn, FaMoneyCheckAlt, FaDoorOpen, FaClipboardList, FaUserTie } from 'react-icons/fa';

const FundingEligibility: React.FC = () => {
  const criteria = [
    {
      title: "Experienced Team",
      description: "TCA looks to work with coachable and energetic leaders with proven track records. The core team should be made up of people who have experience in their field with credentials to back it up. We also look for passionate founders and co-founders who understand the ins and outs of their business, be it financials or growth strategies.",
      icon: <FaUsers />
    },
    {
      title: "Unique Solutions",
      description: "There has to be a clear answer as to how the startup does things differently, be it the use of disruptive technology or new business models, etc. TCA prefers to work with startups that bring something new to the table. If your startup solves a critical problem for a customer or a business, and solves it in a way that is not only different from competition, but far more effective than existing solutions, you are more than likely to get funded by our investors.",
      icon: <FaLightbulb />
    },
    {
      title: "Large Addressable Market",
      description: "There needs to be a significant demand for the products/solutions. The startup should be capable of capturing a significant portion of the market share. TCA only funds businesses that can scale up over time.",
      icon: <FaChartLine />
    },
    {
      title: "Competition",
      description: "The list of potential and existing competitors needs to be made clear. The startup needs to have significant competitive advantages in order to secure angel funding. Knowing what your competitor does and having a good hindsight into what their next move could be, would be a great bonus when you discuss competitive strategies with our investors. Let us know why someone else isn’t capable of reproducing what you have created.",
      icon: <FaTrophy />
    },
    {
      title: "Intellectual Property",
      description: "Any and all intellectual properties that are used by the startup must be protected and the startup should not infringe on anyone else’s trademarks and patents. TCA performs thorough Due Diligence and it is best to have a clean slate when applying for funding with us.",
      icon: <FaShieldAlt />
    },
    {
      title: "Strategy",
      description: "The startup needs to have a robust sales strategy in place. They need to explain how they are going to achieve further market penetration.",
      icon: <FaBullhorn />
    },
    {
      title: "Financials",
      description: "Founders need to provide honest financial projections and have proper knowledge of the same. This can include cash flow statements, balance sheets and income statements.",
      icon: <FaMoneyCheckAlt />
    },
    {
      title: "Exit Strategy",
      description: "The startup needs to have the potential to provide 10x returns on Angel Investments. The types of exit strategies must be elaborated on.",
      icon: <FaDoorOpen />
    },
    {
      title: "Business Plan",
      description: "All startups that apply for angel funding need to have a professional and methodical plan that perfectly articulates strategies or any key assumptions on how the business is to grow and operate.",
      icon: <FaClipboardList />
    },
    {
      title: "Board of Directors",
      description: "Startups that seek angel investing need to be ready to accommodate the board of directors from the Angel Group.",
      icon: <FaUserTie />
    }
  ];

  return (
<div className="mt-16">
  <h2 className="text-3xl font-bold mb-6 text-center">Angel Funding Eligibility Criteria</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {criteria.map((item, index) => (
        <div key={index} className="flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
  <div className="flex items-center w-full bg-gradient-to-r from-blue-100 to-transparent dark:from-gray-700 dark:to-transparent p-2 rounded-lg mb-4">
    <div className="text-4xl text-blue-600 dark:text-gray-200 mr-4">{item.icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{item.title}</h3>
  </div>
  <p className="text-base text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
</div>
    ))}
  </div>
  <div className="mt-8 text-center">
    <p>If you think you’re ready, fill out the application form on the AGN platform to get started!</p>
  </div>

  <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg mt-10 border border-gray-300 dark:border-gray-700">
  <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4">How to Apply</h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    Welcome to Andhra Angel Networks! We are glad you have approached us and our endeavor will be to provide you with a quick and definite response.
  </p>
  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-200 mb-4">Submit your business plan</h3>
  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
    After you’ve taken a look at our process and funding criteria, you are now ready to fill out our application form and get started. The Chennai Angels use their own platform designed to support the activity of Angel Networks. We prefer that all entrepreneurs apply for funding using the questionnaire in the online application. To apply for funding please visit the <a href="/funding" className="text-blue-500 underline hover:text-blue-700 dark:hover:text-blue-300">Andhra angel networks</a>.
  </p>
  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
    To ensure that we are able to take up your application immediately, please ensure that along with basic information about the Company and Promoter, you must upload a presentation (The presentation format can be seen <a href="" className="text-blue-500 underline hover:text-blue-700 dark:hover:text-blue-300">here</a>).
  </p>
  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
    We have established a Helpdesk for deal upload related matters. You may email <a href="mailto:ceo@andhraangelnetworks.in" className="text-blue-500 underline hover:text-blue-700 dark:hover:text-blue-300">ceo@andhraangelnetworks.in</a> in case you face difficulty accessing the Platform or uploading deals. We wish you all the best for your business and for the funding, and sincerely hope we can partner with you on your journey.
  </p>
  <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-6">
    If you think you’re ready, fill out the application form on the AGN platform to get started!
  </p>
  <a href="/apply-now" className="inline-block px-8 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 dark:from-blue-400 dark:to-blue-600 dark:hover:from-blue-500 dark:hover:to-blue-700 transition duration-300 transform hover:scale-105">
  Apply Now
</a>
</div>
</div>
  );
};

export default FundingEligibility;