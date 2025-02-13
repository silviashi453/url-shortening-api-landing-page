"use client";
import React, { useState } from "react";

const ShortenBox = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState<
    { id: string; original: string; short: string; copied: boolean }[]
  >([]);

  const handleShorten = async () => {
    if (!url.trim()) return;

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) throw new Error("Failed to shorten URL");

      const data = await response.json();
      setShortenedUrls([
        {
          id: Date.now().toString(36),
          original: url,
          short: data.result_url,
          copied: false,
        },
        ...shortenedUrls,
      ]);
      setUrl("");
    } catch (error) {
      console.error("Error shortening URL: ", error);
    }
  };

  const handleCopy = (shortUrl: string) => {
    try {
      if (typeof window !== "undefined") {
        navigator.clipboard.writeText(shortUrl).then(() => {
          setShortenedUrls(
            shortenedUrls.map((item) => ({
              ...item,
              copied: item.short === shortUrl,
            }))
          );
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:w-[1110px] w-[327px] ">
      <div className="absolute md:w-[1110px] w-[327px] top-[-84px] left-1/2 transform -translate-x-1/2 rounded-md bg-[#3A3054]">
        <div
          className="md:h-[168px] rounded-md bg-[url('/assets/bg-shorten-mobile.svg')] bg-cover bg-no-repeat md:bg-[url('/assets/bg-shorten-desktop.svg')] 
        flex flex-col gap-y-[24px] p-[24px] md:flex-row md:justify-center md:items-center md:gap-x-[24px] md:py-[52px] md:px-[64px]"
        >
          <input
            placeholder="Shorten a link here..."
            type="text"
            className="px-[32px] py-[14px] rounded-md w-full bg-white h-[48px] md:h-[64px] md:w-[769px]"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <button
            className="h-[48px] md:h-[64px] rounded-md px-[24px] py-[9px] text-white bg-blue 
        hover:bg-gray-blue cursor-pointer"
            onClick={handleShorten}
          >
            Shortein It!
          </button>
        </div>
      </div>
      <div className="mt-[104px] w-full">
        {shortenedUrls.map((url) => {
          return (
            <div
              key={url.id}
              className="top-full flex flex-col w-full bg-white rounded-md md:h-[72px] mt-[24px] md:flex-row md:justify-between md:items-center"
            >
              <p className="py-[18px] px-[32px]">{url.original}</p>
              <hr className="md:hidden block border-gray" />
              <div className="py-[18px] px-[32px] flex flex-col gap-y-[13px] md:flex-row md:justify-between md:items-center md:gap-x-[24px]">
                <p className="text-blue">{url.short}</p>
                <button
                  onClick={() => handleCopy(url.short)}
                  className={`rounded-md px-[24px] py-[9px] text-white cursor-pointer ${
                    url.copied ? "bg-purple" : "bg-blue hover:bg-gray-blue"
                  }`}
                >
                  {url.copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShortenBox;
