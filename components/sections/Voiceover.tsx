"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { voiceoverProjects } from "@/constants";



const Voiceover = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  // Prevent hydration issues
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Prevent rendering during SSR phase
  }

  return (
    <section
      id="voiceover"
      className="relative overflow-hidden py-16 px-6 sm:px-12 flex flex-col gap-12"
    >
      {/* Animated Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "50%" }}
        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-t-4 border-myColorRed mx-auto"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-myColorRed text-center"
      >
        خدمات التعليق الصوتي 🎙️
      </motion.h2>

      {/* Voiceover Cards */}
      {voiceoverProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-lg border border-gray-300 p-8"
        >
          {/* Text and Audio Section */}
          <div className="flex flex-col justify-center w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-right text-myColorRed-darkRed mb-4">
              {project.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 text-right">
              {project.description}
            </p>

            {/* Audio Player */}
            <audio controls className="w-full">
              <source src={project.audio} type="audio/mp3" />
              متصفحك لا يدعم تشغيل الصوت.
            </audio>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Navigate to Services Button */}
      <motion.div className="flex justify-center items-center mt-6 sm:mt-10" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <motion.button onClick={() => router.push("/services")} className="px-4 py-2 sm:px-5 sm:py-3 bg-myColorRed text-white font-bold rounded-lg shadow-md hover:bg-myColorRed-dark transition-transform transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base" whileHover={{ scale: 1.05 }}>
            احصل علي خدماتنا
          </motion.button>
        </motion.div>
    </section>
  );
};

export default Voiceover;