"use client";
import React from "react";
import { motion } from "framer-motion";

const statistics = [
  {
    id: 1,
    value: "100+",
    label: "مشاريع مكتملة",
    icon: "📂",
  },
  {
    id: 2,
    value: "50+",
    label: "عملاء سعداء",
    icon: "😊",
  },
  {
    id: 3,
    value: "10+",
    label: "سنوات خبرة",
    icon: "⏳",
  },
  {
    id: 4,
    value: "5",
    label: "جوائز مميزة",
    icon: "🏆",
  },
];

const Statistics = () => {
  return (
    <section className="relative overflow-hidden py-12 px-6 sm:px-8 rounded-sm bg-myColorRed">
      {/* Background for Desktop Only */}
      <div className="absolute inset-0 -z-10 hidden sm:block bg-myColorRed-darkRed bg-cover bg-center bg-no-repeat rounded-sm" />

      {/* Section Title */}
      <div className="relative z-10 text-center flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          viewport={{ once: true }}
        >
          إحصائياتنا
        </motion.h2>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {/* Icon */}
              <span className="text-4xl md:text-5xl text-myColorRed mb-2 sm:mb-4">
                {stat.icon}
              </span>

              {/* Value */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * stat.id,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="text-2xl sm:text-3xl font-bold text-gray-800"
              >
                {stat.value}
              </motion.h3>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * stat.id + 0.2,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="text-gray-700 mt-2 text-sm sm:text-lg"
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;