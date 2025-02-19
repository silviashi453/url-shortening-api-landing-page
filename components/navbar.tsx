"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 px-[24px] pt-[40px] md:px-[167px] md:pt-[48px]">
      <div className="relative container mx-auto flex justify-between md:justify-start gap-x-[46px] items-center">
        <Image
          src={"/assets/logo.svg"}
          alt={"logo"}
          width={121}
          height={33}
          className="cursor-pointer"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          <Menu className="w-[24px] h-[24px] text-gray-700 cursor-pointer" />
        </button>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full bg-purple rounded-xl py-[20px] md:py-0 mt-[20px] md:mt-0 md:bg-transparent md:relative flex-col items-center justify-center md:flex-row md:justify-between md:items-center w-full`}
        >
          <div className="flex flex-col items-center gap-y-[20px] mb-[20px] md:flex-row md:gap-x-[37px] md:mb-0">
            <Link
              href="#features"
              className="text-white md:text-dark-gray text-[15px] font-bold md:hover:text-black"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-white md:text-dark-gray text-[15px] font-bold md:hover:text-black"
            >
              Pricing
            </Link>
            <Link
              href="#resources"
              className="text-white md:text-dark-gray text-[15px] font-bold md:hover:text-black"
            >
              Resources
            </Link>
          </div>
          <hr className="border-t border-dark-gray w-[279px] mb-[20px] md:hidden" />
          <div className="flex flex-col items-center gap-y-[20px] md:flex-row md:gap-x-[37px]">
            <Link
              href="#login"
              className="text-white md:text-dark-gray text-[15px] font-bold md:hover:text-black"
            >
              Login
            </Link>
            <button className="rounded-full px-[24px] py-[9px] text-white bg-blue hover:bg-gray-blue cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
