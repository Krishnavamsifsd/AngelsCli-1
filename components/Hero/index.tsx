"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [currentText, setCurrentText] = useState("Investors");
  const [slide, setSlide] = useState(false);

  const texts = ["Investors", "Entrepreneurs", "Internships"];
  let textIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(true);
      setTimeout(() => {
        textIndex = (textIndex + 1) % texts.length;
        setCurrentText(texts[textIndex]);
        setSlide(false);
      }, 500); // Duration of the slide-down effect
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="w-full overflow-hidden pb-20 pt-20 md:pt-24 xl:pb-25 xl:pt-30">
        <div className="w-full px-4 md:px-8 2xl:px-0">
          <div className="grid items-center lg:grid-cols-2 lg:gap-8 xl:gap-32.5">
            <div>
              <h4 className="animate-fade-in mb-4.5 text-xl font-medium text-black dark:text-white">
                🔥 Andhra Angel Networks - Empowering the Future
              </h4>
              <h1 className="animate-slide-in mb-5 pr-16 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-purple-600 xl:text-5xl">
                <strong>Let's</strong> <br />
                <strong>Build</strong> <br />
                <strong>Futures</strong> <br />
                For{" "}
                <span
                  className={`gradient-text relative inline-block ${slide ? "slide-down" : "slide-up"}`}
                >
                  {currentText}
                </span>
              </h1>
              <p className="animate-fade-in text-lg text-black dark:text-gray-400">
  Andhra Angel Networks connects innovative startups with visionary angel investors. We support entrepreneurs from schools by conducting internships and forming tie-ups with educational institutions.
</p>

<div className="mt-10">
  <form onSubmit={handleSubmit}>
    <div className="flex flex-wrap gap-5">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email address"
        className="transform rounded-full border border-gray-300 px-5 py-3 text-base shadow-md transition duration-300 ease-in-out hover:scale-105 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:focus:border-blue-500"
        aria-label="Email address"
      />
      <button
        aria-label="Get started button"
        className="flex items-center justify-center transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 text-base text-white transition duration-300 ease-in-out hover:scale-105 hover:from-purple-600 hover:to-blue-500 dark:bg-gradient-to-r dark:from-blue-700 dark:to-purple-800 dark:hover:from-purple-800 dark:hover:to-blue-700"
      >
        <span className="mr-2">🚀</span> Get Started
      </button>
    </div>
  </form>
</div>
            </div>

           <div className="animate_right hidden lg:block">
  <div className="relative 2xl:-mr-7.5">
    <Image
      src="/images/shape/shape-01.png"
      alt="shape"
      width={46}
      height={246}
      className="absolute -left-11.5 top-0 animate-float"
    />
    <Image
      src="/images/shape/shape-02.svg"
      alt="shape"
      width={36.9}
      height={36.7}
      className="animate-spin-slow absolute bottom-0 right-0 z-10 animate-float"
    />
    <Image
      src="/images/shape/shape-03.svg"
      alt="shape"
      width={21.64}
      height={21.66}
      className="absolute -right-6.5 bottom-0 z-1 animate-pulse animate-float"
    />
    <div className="relative aspect-[700/444] w-full">
      <Image
        className="shadow-solid-l dark:hidden rounded-lg"
        src="/images/hero/hero-light.avif"
        alt="Hero"
        fill
      />
      <Image
        className="hidden shadow-solid-l dark:block rounded-lg dark:filter dark:brightness-75"
        src="/images/hero/hero-light.avif"
        alt="Hero"
        fill
      />
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            45deg,
            #0081ee,
            #01b9e2,
            #fe5b48,
            #f0a039,
            #8026c1,
            #e73598
          );
          background-size: 400%;
          animation: text-gradient 20s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        @keyframes text-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 2s ease-in-out;
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        .slide-down {
          transition:
            transform 0.5s ease-in-out,
            opacity 0.5s ease-in-out;
          transform: translateY(100%);
          opacity: 0;
        }

        .slide-up {
          transition:
            transform 0.5s ease-in-out,
            opacity 0.5s ease-in-out;
          transform: translateY(0);
          opacity: 1;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;