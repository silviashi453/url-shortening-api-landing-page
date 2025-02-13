import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="flex flex-col-reverse gap-y-[60px] md:flex-row md:justify-between mx-[24px] my-[40px] 
    md:ml-[165px] md:my-[78px] md:gap-x-[100px] md:mr-0 pb-[168px] md:pb-[152px]"
    >
      <div className="flex flex-col gap-y-[15px] justify-center items-center md:items-start md:max-w-[563px]">
        <h1
          className="text-center md:text-start font-bold text-[42px] leading-[48px] tracking-[-1.05px] 
        md:text-[70px] md:leading-[90px] md:tracking-[-2px]"
        >
          More than just shorter links
        </h1>
        <p
          className="text-center text-[18px] leading-[30px] tracking-[0.12px] 
        md:text-start font-medium md:leading-[36px] md:tracking-[0.15px] text-dark-gray"
        >
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="md:mt-[38px] rounded-full px-[24px] py-[9px] text-white bg-blue hover:bg-gray-blue cursor-pointer">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-[733px] md:h-[482px] flex items-center justify-center md:overflow-hidden">
        <img
          src={"/assets/illustration-working.svg"}
          alt={"ilustrasi"}
          className="w-full md:w-full md:h-full md:object-cover md:object-left"
        />
      </div>
    </div>
  );
};

export default Hero;
