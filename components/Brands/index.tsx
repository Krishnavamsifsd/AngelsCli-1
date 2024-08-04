"use client";
import React from "react";
import ServiceItem from "./SingleBrand";
import servicesData from "./brandData";

const Services = () => {
  return (
    <>
      {/* <!-- ===== Services Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {servicesData.map((service, key) => (
              <ServiceItem
                key={key}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                animationDelay={service.animationDelay}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Services End ===== --> */}
    </>
  );
};

export default Services;