"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="w-full pt-20 pb-20 " id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          fill
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          如果您对我的 <span className="text-purple">项目技术</span> 感兴趣
          请让我知道随时联系我
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          您可以随时联系我，让我们共同构建你的项目实现目标
        </p>
        <a href="mailto:your-emial@qq.com">
          <MagicButton
            title="联系我"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Your Name
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                onClick={() => handleClick(info.url)}
                style={{ cursor: "pointer" }}
                src={info.img}
                alt="icons"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
