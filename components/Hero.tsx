"use client";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaDownload } from "react-icons/fa6";
import { LinkPreview } from "./ui/LinkPerview";
import { image } from "@/data";
import { toast } from "react-toastify";
// import { useEffect, useState } from "react";

const Hero = () => {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const handleResume = () => {
    // if (!mounted) return;
    
    try {
      const loaderToast = toast.loading("Downloading...");
      // Create link element only after confirming we're on client side
      const RESUME_URL = "";
      
      // Creating and clicking link in a safer way
      const downloadAndOpen = () => {
        const link = document.createElement("a");
        link.href = RESUME_URL;
        link.setAttribute("download", "Your Name Resume.pdf");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
          toast.update(loaderToast, {
            render: "Download done",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });

          setTimeout(() => {
            window.open(RESUME_URL, "_blank");
          }, 1000);
        }, 1000);
      };

      // Execute download function
      downloadAndOpen();
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while downloading the resume");
    }
  };

  // Don't render buttons until client-side hydration is complete
  const renderButtons = () => {
    // if (!mounted) return null;

    return (
      <div className="flex items-center justify-center gap-10">
        <a href="#projects">
          <MagicButton
            title="查看我的项目"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <a>
          <MagicButton
            handleClick={handleResume}
            title="我的简历"
            icon={<FaDownload />}
            position="right"
          />
        </a>
      </div>
    );
  };

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="对前端开发充满热情 能够与协作人员良好沟通 注重用户体验"
          />
          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello, 我是
            <LinkPreview url="https://github.com/">
              <span className="ml-2 text-purple font-bold sm:ml-1"> 花不卷,</span>
            </LinkPreview>
            一个高级前端开发工程师，目前居住在
            <LinkPreview url={image.beijing}>
              <span className="ml-2 text-purple font-bold sm:ml-1">北京</span>
            </LinkPreview>
          </div>

          <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 mb-5 lg:mb-0">
            <div className="inline-block w-3 h-3 mr-2 bg-green-500 rounded-full relative">
              <span className="block w-3 h-3 me-1 bg-green-500 opacity-70 rounded-full animate-blink"></span>
            </div>
            随时准备好工作
          </span>

          {renderButtons()}
        </div>
      </div>
    </div>
  );
};

export default Hero;