"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
          <motion.div
  variants={{
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.5, delay: 0.1 }}
  viewport={{ once: true }}
  className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 bg-pastel-blue p-4 rounded-2xl"
>
<Image
  src="/images/about/about-light.avif"
  alt="About"
  className="rounded-2xl dark:hidden w-32 h-auto mx-auto"
  fill
/>
<Image
  src="/images/about/about-light.avif"
  alt="About"
  className="hidden rounded-2xl filter dark:block dark:brightness-75 dark:contrast-125 w-32 h-auto mx-auto"
  fill
/>
</motion.div>
<motion.div
  variants={{
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 0.5, delay: 0.1 }}
  viewport={{ once: true }}
  className="animate_right md:w-1/2"
>
  <span className="font-medium uppercase text-black dark:text-white">
    <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white">
      New
    </span>{" "}
    Bridging Investors and Entrepreneurs
  </span>
  <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
    Empowering Growth for
    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
      Startups
    </span>
  </h2>
  <p>
    At Andhra Angles, we connect visionary entrepreneurs with discerning angel investors, fostering innovation and growth.
  </p>

  <div className="mt-7.5 flex items-center gap-5">
    <div className="dark:bg-darkblue-900 flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark">
      <p className="text-metatitle2 font-semibold text-black dark:text-white">
        01
      </p>
    </div>
    <div className="w-3/4">
      <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
        Extensive Network
      </h3>
      <p>Connecting startups with a vast network of investors to fuel their growth.</p>
    </div>
  </div>
  <div className="mt-7.5 flex items-center gap-5">
    <div className="dark:bg-darkblue-900 flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark">
      <p className="text-metatitle2 font-semibold text-black dark:text-white">
        02
      </p>
    </div>
    <div className="w-3/4">
      <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
        Personalized Support
      </h3>
      <p>Offering tailored resources and guidance to ensure startup success.</p>
    </div>
  </div>
</motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Fast-Track Your Startup Journey
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Essential {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Integrations
                </span>{" "}
                for Success
              </h2>
              <p>
                Gain access to critical tools and networks designed to propel
                your startup to the next level.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Learn More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
  variants={{
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 1, delay: 0.1 }}
  viewport={{ once: true }}
  className="animate_right relative mx-auto hidden aspect-[4/3] md:block md:w-1/2"
>
  <Image
    src="/images/about/integration.jpg"
    alt="About"
    className="rounded-2xl dark:hidden w-3/4 h-auto mx-auto"
    layout="fill"
  />
  <Image
    src="/images/about/integration.jpg"
    alt="About"
    className="hidden rounded-2xl filter dark:block dark:brightness-75 dark:contrast-125 w-3/4 h-auto mx-auto"
    layout="fill"
  />
</motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
