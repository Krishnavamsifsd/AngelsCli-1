"use client";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import hemanthImage from 'public/images/team/hemanth.jpeg';
import sasankImage from 'public/images/team/sasank.jpeg';
import guptaImage from 'public/images/team/gupta.jpeg';
import roseImage from 'public/images/team/rose.jpeg';

const teamMembers = [
  {
    name: "Hemanth Adigopula",
    role: "Business Development - Intern",
    image: hemanthImage,
    linkedin: "",
    twitter: "",
    youtube: "",
  },
  {
    name: "Sasank Mangamuri",
    role: "Digital Media - Intern",
    image: sasankImage,
    linkedin: "",
    twitter: "",
    youtube: "",
  },
  {
    name: "A. Gupta",
    role: "Startup Coordinator",
    image: guptaImage,
    linkedin: "",
    twitter: "",
    youtube: "",
  },
  {
    name: "Rose Evangeline A",
    role: "Business Development (Lead)",
    image: roseImage,
    linkedin: "",
    twitter: "",
    youtube: "",
  },
  // Add more team members here
];

const Page = () => {
  return (
    <div className="mt-10 min-h-screen pt-16 text-gray-900 transition-colors duration-300 dark:text-gray-100">
      <div className="container mx-auto p-4">
      <div>
  <p className="text-gray-500 text-sm text-center font-normal pb-3 dark:text-gray-400">OUR TEAM</p>
  <h1 className="xl:text-lg text-md text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto dark:text-gray-100">
    The Talented People Behind the Scenes of the Organization
  </h1>
</div>
<style jsx>{`
  .hover-scale {
    transition: transform 0.3s ease-in-out;
  }
  .hover-scale:hover {
    transform: scale(1.3);
  }
`}</style>

<div className="flex flex-wrap justify-center gap-6">
  {teamMembers.map((member) => (
    <div
      key={member.name}
      className="relative mt-8 w-72 transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
    >
      <div className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-lg"></div>
      </div>
      <div className="relative z-10">
        <div className="h-32 overflow-hidden rounded-t-lg">
          <img
            className="h-full w-full object-cover object-top"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="relative mx-auto -mt-12 h-24 w-24 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 hover-scale">
          <Image
            className="h-full w-full object-cover object-center hover-scale"
            src={member.image}
            alt={`${member.name}'s profile`}
            width={96}
            height={96}
          />
        </div>
        <div className="mt-2 text-center">
          <h2 className="text-lg font-semibold dark:text-gray-100">{member.name}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {member.role}
          </p>
        </div>
        <ul className="mt-4 flex items-center justify-around py-4 text-gray-700 dark:text-gray-400">
          <li>
            <a
              href={member.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 transition-colors duration-300 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href={member.twitter}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition-colors duration-300 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200"
            >
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a
              href={member.youtube}
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 transition-colors duration-300 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300"
            >
              <FaYoutube size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Page;