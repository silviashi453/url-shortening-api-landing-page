import React from "react";
import Image from "next/image";

const menuItems = [
  {
    title: "Features",
    items: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    items: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    items: ["About", "Our Teams", "Careers", "Contact"],
  },
];

const socialIcons = [
  { src: "/assets/icon-facebook.svg", alt: "logo fb" },
  { src: "/assets/icon-twitter.svg", alt: "logo twitter" },
  { src: "/assets/icon-pinterest.svg", alt: "logo pinterest" },
  { src: "/assets/icon-instagram.svg", alt: "logo ig" },
];

const Footer: React.FC = () => {
  return (
    <div>
      <div>
        <div className="bg-[#3A3054]">
          <div
            className="bg-[url('/assets/bg-boost-desktop.svg')] w-full h-[300px] md:h-[250px] bg-cover bg-center 
      flex flex-col gap-y-[16px] justify-center items-center"
          >
            <h1 className="font-bold text-[28px] leading-[48px] tracking-[-0.7px] md:text-[40px] md:leading-[48px] md:tracking-[-1px] text-white">
              Boost your links today
            </h1>
            <button className="md:mt-[38px] rounded-full px-[24px] py-[9px] text-white bg-blue hover:bg-gray-blue cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="text-white bg-neutral-950 flex-col md:flex-row md:items-start py-[56px] items-center gap-y-[58px] md:h-[310px] flex md:py-[71px] md:px-[165px] md:gap-x-[262px]">
        <Image
          src={"/assets/logo.svg"}
          alt={"logo"}
          width={121}
          height={33}
          className="cursor-pointer invert"
        />
        <div className="flex flex-col md:flex-row md:items-start items-center gap-y-[40px] md:gap-x-[78px]">
          {menuItems.map((menu) => (
            <ul
              key={menu.title}
              className="flex flex-col items-center md:items-start md:justify-start gap-y-[10px]"
            >
              <a className="mb-[10px] font-bold hover:text-blue" href="#">
                {menu.title}
              </a>
              {menu.items.map((item, idx) => (
                <a
                  className="font-normal text-dark-gray hover:text-blue"
                  key={idx}
                  href="#"
                >
                  {item}
                </a>
              ))}
            </ul>
          ))}

          <div className="flex flex-row items-center gap-x-[24px]">
            {socialIcons.map((icon) => {
              return (
                <Image
                  src={icon.src}
                  width={24}
                  height={24}
                  alt={icon.alt}
                  key={icon.src}
                  className="cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
