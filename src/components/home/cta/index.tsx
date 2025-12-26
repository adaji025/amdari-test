import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import StartAssessmentBtn from "../start-assement-btn";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 ">
      <div className="pl-4 rounded-xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 mt-20 bg-[#A6FFFB47]">
        {/* Left Column: Content */}
        <div className="space-y-8 z-10 flex-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-balance leading-[1.1] font-clash-display">
            Take The Job Readiness Assessment
          </h1>

          <div className="space-y-6 max-w-lg font-semibold text-[#344054]">
            <p className="text-base leading-relaxed text-pretty">
              Still sending applications with no callback? Wondering why
              recruiters keep overlooking you? The truth is: it's not always
              your CV. It's about job readiness the skills, proof, and
              confidence employers want to see.
            </p>
            <p className="leading-relaxed text-pretty">
              With Amdari's Job Readiness Assessment, you'll finally get clarity
              on what the problem is and how to fix it.
            </p>
          </div>

          <div className="max-w-78 mt-2">
            <StartAssessmentBtn text="Start My Free Assessment" />
          </div>
        </div>

        {/* Right Column: Laptop Mockup */}
        <div className="flex-1 w-full flex items-end lg:justify-end">
          <Image
            src={"/images/pngs/laptop.png"}
            height={700}
            width={1000}
            alt="laptop"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
