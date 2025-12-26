"use client";

import { useEffect } from "react";
import Image from "next/image";
import StartAssessmentBtn from "../start-assement-btn";
import Link from "next/link";
import Aos from "aos";

export function JobReadinessHero() {
   useEffect(() => {
    Aos.init({
      // duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Image
        src={"/images/svgs/hero-ellipse.svg"}
        height={826}
        width={584}
        alt="ellipse"
        className="absolute"
        data-aos="fade-right"
      />
      <div className="w-full py-4.5 px-4 md:px-8  mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8" data-aos="zoom-in">
          <h1 className="text-5xl font-clash-display md:text-6xl font-black tracking-tight leading-tight text-gray-900">
            Are You Really <br />
            <span className="inline-block">Job Ready?</span>
          </h1>
          <p className="text-xl md:text-4xl font-semibold text-[#344054] max-w-lg leading-relaxed">
            Answer a few questions to find out and get a free customized plan to
            get you <span className="font-bold text-gray-900">Job-Ready!</span>
          </p>
          <Link href="/assessment">
            <StartAssessmentBtn text="Start My Free Assessment" />
          </Link>
        </div>

        {/* Right Visual Section */}
        <div>
          <Image
            src={"/images/pngs/hero-img.png"}
            width={632}
            height={498}
            alt="hero"
            className="w-full h-full object-cover rounded-[3rem]"
            data-aos="zoom-out"
          />
        </div>
        {/* <div className="relative aspect-square w-full max-w-xl mx-auto">
          <Image
            src={"/images/svgs/hero-img.svg"}
            width={632}
            height={498}
            alt="hero"
            className="w-full h-full object-cover rounded-[3rem]"
          />

          <Image
            src={"/images/pngs/portfolio.png"}
            width={168}
            height={58}
            alt="Portfolio"
            className="absolute top-[40%] left-6 md:left-8 w-[120px] h-[40px] sm:w-[168px] sm:h-[58px]"
          />

          <Image
            src={"/images/pngs/cta-compliance.png"}
            width={160}
            height={152}
            alt="CV ATS Compliance"
            className="absolute bottom-12 left-10 md:left-14 animate-bounce w-[70px] h-[70px] xs:w-[100px] xs:h-[100px] sm:w-[160px] sm:h-[152px]"
          />

          <Image
            src={"/images/svgs/job-readiness.svg"}
            width={180}
            height={190}
            alt="Job Readiness"
            className="absolute top-1/4 right-4 md:right-4 w-[70px] h-[70px] xs:w-[100px] xs:h-[100px] sm:w-[180px] border rounded-md sm:h-[180px]"
          />
          <Image
            src={"/images/pngs/interview-readiness.png"}
            width={203}
            height={54}
            alt="Interview Readiness"
            className="absolute bottom-20 right-5 w-[140px] h-[40px] sm:w-[203px] sm:h-[54px]"
          />
        </div> */}
      </div>
    </div>
  );
}
