"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { servicesData } from "@/constants";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetElement = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...new Set([...prev, Number(targetElement.dataset.index)])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".service-image").forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div className="text-center mb-6 sm:mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-myColorRed">خدماتنا</motion.h2>
          <motion.p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">اكتشف مجموعة خدماتنا المميزة التي تلبي احتياجاتك.</motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6, ease: "easeOut" } },
              }}
              className="bg-gray-50 rounded-lg shadow-md p-4 sm:p-5 flex flex-col items-center text-center gap-3 sm:gap-4"
            >
              {/* Service Image with Lazy Loading */}
              <div className="w-full h-[200px] relative overflow-hidden rounded-sm service-image" data-index={index}>
                {visibleImages.includes(index) ? (
                 <Image
                 src={service.image}
                 alt={service.title}
                 fill
                 className="object-cover "
                 priority={false} // تحسين الأداء عبر تحميل الصور عند الحاجة
                 loading="lazy" // تحميل الصور عند الحاجة فقط
               />
                ) : (
                  <Image
                    src={service.blurImage as string} // صورة ضبابية Placeholder
                    alt={service.title}
                    fill
                    className="object-cover blur-lg"
                  />
                )}
              </div>
              {/* Service Title */}
              <h3 className="text-base sm:text-lg font-semibold text-myColorRed">{service.title}</h3>
              {/* Service Description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigate to Services Button */}
        <motion.div className="flex justify-center items-center mt-6 sm:mt-10" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <motion.button onClick={() => router.push("/services")} className="px-4 py-2 sm:px-5 sm:py-3 bg-myColorRed text-white font-bold rounded-lg shadow-md hover:bg-myColorRed-dark transition-transform transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base" whileHover={{ scale: 1.05 }}>
            احصل علي خدماتنا
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;