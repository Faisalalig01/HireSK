import React from "react";
import Title from "./Title";
import InfoCard from "../Pages/InfoCard";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="about-us"
      className="relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      {/* Background accent */}
      <img
        src={assets.bgImage1}
        alt=""
        className="absolute -top-120 right-[-200px] -z-1 opacity-60 dark:hidden"
      />

      <Title
        title="About HireSk"
        desc="Sales enablement and outbound outreach that drives predictable growth."
      />

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <p className="text-sm text-gray-500 dark:text-white/75 leading-relaxed">
            HireSk is a sales enablement and outbound outreach firm that helps
            growing businesses generate qualified leads, engage decision-makers,
            and maintain a consistent flow of sales opportunities—without
            overloading internal teams.
          </p>

          <p className="text-sm text-gray-500 dark:text-white/75 leading-relaxed">
            We invest our resources, our team, and our tools to fuel your growth —
            the closures are yours.
          </p>

          <p className="text-sm text-gray-500 dark:text-white/75 leading-relaxed">
            Our approach is structured, performance-driven, and focused on real
            outcomes—not vanity metrics.
          </p>

          {/* 🔥 Animated Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <InfoCard
              index={0}
              title="Why HireSk"
              description="Experienced sales professionals with proven outbound processes and consistent, scalable execution."
            />

            <InfoCard
              index={1}
              title="How We Operate"
              description="We operate as an extension of your sales team with clear reporting, accountability, and flexible engagement models."
            />
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={assets.hero_img}
            alt="HireSk Sales Enablement"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
