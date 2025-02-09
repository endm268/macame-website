"use client";

import {  MessagesSquare } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { MAIN_TITLE, NAV_ITEMS, PHONE_NUMBER, SOCIAL_MEDIA, SUB_TITLE } from "@/constants";

export const Navbar = () => {
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);

  // Copy phone number to clipboard
  const handleCopyPhoneNumber = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}`, "_blank");
  };

  return (
    <div
      ref={navbarRef}
      className="sm:px-16 hidden md:flex w-full py-4 relative rounded-sm bg-myColorRed-lightRed2 shadow-md z-50 font-jenine"
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo and Navigation Links */}
        <div className="flex items-center justify-start gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={36}
              height={36}
              className="w-[36px] h-[36px]"
            />
            <p>
              <span className="text-[12px] md:text-[24px] text-myColorRed font-semibold">
                {MAIN_TITLE}
              </span>{" "}
              {SUB_TITLE}
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={item.href}
                  className={`px-4 py-2 transition-all duration-300 ${
                    pathname === item.href
                      ? "border-b-2 border-myColorRed text-myColorRed"
                      : "border-b-2 border-transparent text-gray-800 hover:border-myColorRed hover:text-myColorRed"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media and Phone */}
        <div className="hidden lg:flex items-center gap-4">
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
          <Button
            variant={"link"}
            className="bg-myColorRed p-2 px-4 rounded-sm text-white flex items-center gap-2"
            onClick={handleCopyPhoneNumber}
          >
            <MessagesSquare className="w-5 h-5" />
            {PHONE_NUMBER}
          </Button>
        </div>
      </div>
    </div>
  );
};