"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { EMAIL, LOCATION, PHONE_NUMBER, SOCIAL_MEDIA, TITLE } from "@/constants";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 md:px-16 flex flex-col w-full py-12 bg-myColorRed-lightRed2 shadow-lg rounded-t-lg font-jenine text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Company Info Section */}
        <div className="space-y-6 text-right">
          <h2 className="text-2xl font-bold text-myColorRed-darkRed">شركتنا</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            نحن نقدم خدمات احترافية في التسويق الإلكتروني وتصميم المحتوى.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-6 text-right">
          <h2 className="text-2xl font-bold text-myColorRed-darkRed">
            صفحات 
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/services">
                <span className="cursor-pointer hover:underline hover:text-myColorRed-darkRed transition-all">
                  الخدمات
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="cursor-pointer hover:underline hover:text-myColorRed-darkRed transition-all">
                  من نحن
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="cursor-pointer hover:underline hover:text-myColorRed-darkRed transition-all">
                  تواصل معنا
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media Section */}
        <div className="space-y-6 text-right">
          <h2 className="text-2xl font-bold text-myColorRed-darkRed">
            تواصل معنا
          </h2>
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-gray-700">
              <Phone size={20} className="text-myColorRed-darkRed" /> {PHONE_NUMBER}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Mail size={20} className="text-myColorRed-darkRed" /> {EMAIL}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin size={20} className="text-myColorRed-darkRed" /> {LOCATION}
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {SOCIAL_MEDIA.map((social) => (
              <Link key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
                <motion.span whileHover={{ scale: 1.1 }}>
                  {social.icon}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600 w-full">
        © {new Date().getFullYear()} جميع الحقوق محفوظة | {" "}
        <Link href="/" className="hover:text-myColorRed-darkRed transition-all">
          الشركة {TITLE}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;