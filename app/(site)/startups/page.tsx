"use client";
import React from "react";

const startups = [
  {
    name: "DessinRx Healthcare Pvt Ltd",
    description: "Advanced cryogenic technologies for industrial applications.",
    image: "https://via.placeholder.com/150",
    funding: "$500K",
    website: "https://www.dessinrx.com/",
    status: "Mentoring",
  },
  {
    name: "SamparkBindhu Solutions Private Limited",
    description: "Advanced cryogenic technologies for industrial applications.",
    image: "https://via.placeholder.com/150",
    funding: "$500K",
    website: "https://SamparkBindhu.in",
    status: "Mentoring",
  },
  {
    name: "Team Power Infrastructure India Private Limited",
    description: "Leading infrastructure solutions for modern cities.",
    image: "https://via.placeholder.com/150",
    funding: "$2M",
    website: "https://comfortbikes.in/",
    status: "Funded",
  },
  {
    name: "Jesvid Cryo Technologies Private Limited",
    description: "Advanced cryogenic technologies for industrial applications.",
    image: "https://via.placeholder.com/150",
    funding: "$500K",
    status: "Mentoring",
  },
  {
    name: "Tech Atriocare Private Limited",
    description: "Innovative healthcare solutions for a better tomorrow.",
    image: "https://via.placeholder.com/150",
    funding: "$1M",
    website:
      "https://techatriocare.com/?__cf_chl_rt_tk=oCUbH_sqp003La1nDG83QjSgHuatHR1AARd4bvHFy2E-1723268501-0.0.1.1-3754",
    status: "Mentoring",
  },
  {
    name: "Amritattava Nutrition Private Limited",
    description: "Innovative nutrition solutions for a healthier life.",
    image: "https://via.placeholder.com/150",
    funding: "$750K",
    status: "Mentoring",
  },
  {
    name: "Vayu Veda Private Limited",
    description: "Natural and holistic healthcare solutions.",
    image: "https://via.placeholder.com/150",
    funding: "$600K",
    status: "Mentoring",
  },
  {
    name: "Agrika",
    description: "Sustainable agricultural solutions for modern farming.",
    image: "https://via.placeholder.com/150",
    funding: "$900K",
    status: "Mentoring",
  },
  {
    name: "Nutri Revive Pvt Ltd",
    description: "Revolutionizing nutrition with advanced technology.",
    image: "https://via.placeholder.com/150",
    funding: "$1.2M",
    status: "Mentoring",
  },
  {
    name: "VFTB Private Limited (Vidya Technos)",
    description: "Innovative educational technologies for the future.",
    image: "https://via.placeholder.com/150",
    funding: "$1.5M",
    status: "Mentoring",
  },
  {
    name: "Hindustan Recycle Hub Private Limited",
    description: "Leading recycling solutions for a sustainable future.",
    image: "https://via.placeholder.com/150",
    funding: "$2.5M",
    status: "Mentoring",
  },
  {
    name: "Hictech Private Limited",
    description: "Cutting-edge technology solutions for modern businesses.",
    image: "https://via.placeholder.com/150",
    funding: "$1M",
    website: "https://hictech.com/",
    status: "Mentoring",
  },
  {
    name: "Bagmo Private Limited",
    description: "Innovative solutions for blood bag management.",
    image: "https://via.placeholder.com/150",
    funding: "$800K",
    website: "https://bagmo.in/",
    status: "Mentoring",
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {startups.map((startup) => (
        <div
          key={startup.name}
          className="relative w-72 transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
        >
          <div className="h-32 overflow-hidden rounded-t-lg">
            <img
              className="h-full w-full object-cover object-center"
              src={startup.image}
              alt={startup.name}
            />
          </div>
          <div className="p-4">
            <h2 className="text-md font-semibold dark:text-gray-100">
              {startup.name}
            </h2>
            {startup.website && (
              <a
                href={startup.website}
                className="mt-2 text-xs text-blue-500 underline dark:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            )}
          </div>
          <div
            className={`tag absolute left-0 top-0 flex items-center rounded-br-lg px-4 py-2 text-xs font-bold text-white ${
              startup.status === "Funded" ? "bg-green-600" : "bg-blue-600"
            }`}
          >
            <span className="mr-2">{startup.status}</span>
          </div>
        </div>
      ))}
      <style jsx>{`
        .tag {
          position: absolute;
          top: 0;
          left: 0;
          padding-right: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-bottom-right-radius: 12px;
          z-index: 10;
        }
      `}</style>
    </div>
  );
};
const Page = () => {
  return (
    <div className="mx-8 mt-20">
      <h1 className="my-8 text-center text-3xl font-bold">
        Andhra Angel Network Portfolio
      </h1>
      <h2 className="my-4 text-center text-2xl font-semibold">
        Mentored Startups
      </h2>
      <Portfolio />
    </div>
  );
};

export default Page;
