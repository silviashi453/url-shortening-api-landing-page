import React from "react";

const statisticsData = [
  {
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    icon: "/assets/icon-brand-recognition.svg",
  },
  {
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: "/assets/icon-detailed-records.svg",
  },
  {
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: "/assets/icon-fully-customizable.svg",
  },
];

const Statistics = () => {
  return (
    <div className="px-[24px] pb-[80px] md:px-[165px] flex flex-col items-center">
      <div className="flex flex-col justify-center items-center md:max-w-[540px] mb-[100px]">
        <h1 className="mt-[80px] md:mt-[120px] text-center pt-[80px] pb-[16px] font-bold text-[28px] leading-[48px] tracking-[-0.7px]">
          Advanced Statistics
        </h1>
        <p className="text-center text-[16px] font-medium leading-[28px] tracking-[0.11px] text-dark-gray">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-[30px] gap-y-[92px]">
        {statisticsData.map((data, idx) => {
          return (
            <div
              className="relative bg-white rounded-md px-[32px] pt-[77px] pb-[41px]"
              key={idx}
            >
              <div
                className="bg-purple w-[88px] h-[88px] rounded-full absolute top-[-44px] 
                  left-1/2 transform -translate-x-1/2 flex justify-center items-center"
              >
                <img src={data.icon} alt="icon" />
              </div>
              <h2 className="text-center font-bold text-[22px] mb-[12px]">
                {data.title}
              </h2>
              <p className="text-center font-normal text-[15px] leading-[26px] text-dark-gray">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
