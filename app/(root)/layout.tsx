import Footer from "@/components/shared/Footer";
import { MobileNav } from "@/components/shared/MobileNav";
import { Navbar } from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { MAIN_TITLE, SUB_TITLE } from "@/constants";
import Image from "next/image";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col py-4 px-4 md:px-12 gap-6 font-jenine">
      <Navbar />
      <div className="md:hidden flex justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex items-center justify-start gap-8">
          {/* Logo */}
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
                {MAIN_TITLE}
              </span>{" "}
              {SUB_TITLE}
            </p>
          </div>
        </div>
        <MobileNav />
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
      <Toaster />
    </div>
  );
}