import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { skills, icons } from "@/data";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animatedTooltip";
import IconCloud from "./ui/IconCloud";

const Skills = () => {
  return (
    <div className="py-20" id="myskills">
      <h1 className="heading">
        我的
        <span className="text-purple"> 技能</span>
      </h1>
      <div className="flex items-center justify-around flex-col md:flex-col lg:flex-row">
        <div className="flex items-center justify-center flex-row mt-3 max-lg:mt-10">
          <IconCloud iconSlugs={icons} />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-8 lg:w-28 ">
          <AnimatedTooltip items={skills} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
