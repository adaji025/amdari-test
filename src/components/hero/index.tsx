"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function JobReadinessHero() {
  return (
    <div className="relative">
      <Image
        src={"/images/svgs/hero-ellipse.svg"}
        height={826}
        width={584}
        alt="ellipse"
        className="absolute"
      />
      <div className="w-full py-4.5 px-4 md:px-8 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-gray-900">
            Are You Really <br />
            <span className="inline-block">Job Ready?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed">
            Answer a few questions to find out and get a free customized plan to
            get you <span className="font-bold text-gray-900">Job-Ready!</span>
          </p>
          <Button
            size="lg"
            className="bg-[#2D7D8E] hover:bg-[#246473] text-white rounded-xl px-10 py-7 text-lg font-semibold shadow-xl shadow-cyan-900/20 transition-all hover:scale-105 active:scale-95"
          >
            Start My Free Assessment
          </Button>
        </div>

        {/* Right Visual Section */}
        <div className="relative">
          <Image
            src={"/images/pngs/cta-compliance.png"}
            width={160}
            height={152}
            alt="hero"
            className="absolute"
          />
          <Image
            src={"/images/pngs/portfolio.png"}
            width={168}
            height={58}
            alt="hero"
            className="absolute"
          />

          {/* main hero image */}
          <Image
            src={"/images/pngs/hero-img1.png"}
            width={632}
            height={498}
            alt="hero"
          />

          <Image
            src={"/images/pngs/job-readiness.png"}
            width={180}
            height={190}
            alt="hero"
            className="absolute right-10 top-1/2"
          />
          <Image
            src={"/images/pngs/interview-readiness.png"}
            width={203}
            height={54}
            alt="hero"
            className="absolute right-10 top-1/2"
          />
        </div>
      </div>
    </div>
  );
}
