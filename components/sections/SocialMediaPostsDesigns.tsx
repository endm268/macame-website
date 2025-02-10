"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialMediaDesigns } from "@/constants";



const SocialMediaPostsDesigns = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-16 px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col gap-12"
    >
      {/* Animated Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "50%" }}
        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-t-4 border-myColorRed mx-auto"
      />

      {/* Section Heading */}
      <div className="relative z-10 text-center flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-myColorRed"
        >
          شاهد إبداعاتنا ❗
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-gray-600"
        >
          تصميمات السوشيال ميديا
        </motion.h2>
      </div>

      {/* Posts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2  gap-12"
      >
        {SocialMediaDesigns.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-sm w-full h-[400px] shadow-lg bg-muted"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
           
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SocialMediaPostsDesigns;
