"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DESCRIPTION, MAIN_TITLE } from "@/constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse h-96 gap-12 md:gap-0 sm:flex-row items-center justify-between py-12 px-4 sm:py-16 sm:px-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 hidden sm:block bg-red-gradient bg-cover bg-center bg-no-repeat rounded-sm" />
      <div className="absolute inset-0 -z-10 md:hidden bg-myColorRed bg-cover bg-center bg-no-repeat rounded-sm" />

      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center sm:text-left text-white max-w-xl z-10"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold leading-tight font-jenine"
        >
          مرحبًا بكم في{" "}
          <span className="text-white">  {MAIN_TITLE} </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg leading-relaxed"
        >
         {DESCRIPTION}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4"
        >
          <a
            href="#services"
            className="px-5 py-3 bg-white text-myColorRed-activeRed rounded-md hover:bg-myColorRed-lightRed2 transition-all font-jenine"
          >
            اكتشف خدماتنا
          </a>
          <a
            href="#contact"
            className="px-5 py-3 border border-white text-white rounded-md hover:bg-myColorRed-lightRed2 hover:text-myColorRed-activeRed transition-all font-jenine"
          >
            تواصل معنا
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;