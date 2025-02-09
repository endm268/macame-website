"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { servicesData2 } from "@/constants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Send } from "lucide-react";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { NAV_ITEMS, PHONE_NUMBER, SOCIAL_MEDIA } from "@/constants";

const ServicesALL = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-16 text-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-myColorRed">
            خدماتنا
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            اكتشف مجموعة خدماتنا المميزة التي تلبي احتياجاتك.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {servicesData2.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-gray-50 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center text-center md:text-left gap-4 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardAnimation}
            >
              {/* Service Image */}
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-auto object-cover mb-4 rounded-sm"
              />
              <div className="flex flex-col justify-start items-start gap-4 text-right">
                {/* Service Title */}
                <h3 className="text-xl font-semibold text-myColorRed mb-2">
                  {service.title}
                </h3>
                {/* Service Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {service.description}
                </p>
                {/* Service List */}
                {service.list && service.list.length > 0 && (
                  <ul className="text-gray-700 text-sm sm:text-base list-disc list-inside text-right">
                    {service.list.map((item) => (
                      <li key={item.id} className="mt-1">
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MobileNav = () => {
  const pathname = usePathname();
  const { toast } = useToast();

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}`, "_blank");
  };

  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col gap-6 bg-white md:hidden"
        >
          <SheetHeader className="hidden">
            <SheetTitle>التنقل</SheetTitle>
          </SheetHeader>

          <div className="flex items-center justify-start gap-8">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={36}
                height={36}
                className="w-[36px] h-auto"
              />
              <p>
                <span className="text-[24px] text-myColorRed font-semibold">
                  مقام
                </span>{" "}
                للخدمات الإعلانية
              </p>
            </div>
          </div>
          <Separator className="border border-gray-50" />
          <ul className="flex w-full flex-col items-start gap-5">
            {NAV_ITEMS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.href}
                  className={`${
                    isActive ? "text-primary-500" : "text-gray-800"
                  }`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ul>

          {/* Social Media and Phone */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex justify-center items-center gap-2">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-myColorRed p-2 rounded-sm text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <Button
              variant="link"
              className="bg-myColorRed p-2 px-4 rounded-sm text-white flex items-center gap-2"
              onClick={handleWhatsAppRedirect}
            >
              <Send className="w-5 h-5" />
              {PHONE_NUMBER}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export { ServicesALL, MobileNav };