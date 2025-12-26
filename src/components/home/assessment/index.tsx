"use client";
import { CheckCheck } from "lucide-react";
import { FeatureCard } from "./feature-card";
import StartAssessmentBtn from "../start-assement-btn";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";

export default function AssessmentSection() {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <section  className="py-16 px-4 md:px-8  max-w-7xl mx-auto font-sans">
      <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-clash-display font-extrabold tracking-tight text-[#1A1A1A] mb-12 max-w-xl leading-[1.1]">
        Here&apos;s What You Get In 10 Minutes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <FeatureCard
          imageQuery="/images/svgs/assessment/job-ready.svg"
          caption="A clear score showing how 'job-ready' you are."
          delay={1000}
        />
        <FeatureCard
          imageQuery="/images/svgs/assessment/result.svg"
          caption="Insights into the exact gaps holding you back."
          delay={1200}
        />
        <FeatureCard
          imageQuery="/images/svgs/assessment/roadmap.svg"
          caption="A personalized diagnostic roadmap with practical next steps."
          delay={1400}
        />
        <FeatureCard
          imageQuery="/images/svgs/assessment/result-1.svg"
          caption="Direct recommendations for programs that fix those gaps fast."
          delay={1600}
        />
      </div>

      <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-[#2BD4CD29] rounded-2xl p-6 sm:p-5 flex flex-col justify-center">
          <h3 className="text-4xl md:text-5xl font-clash-display font-extrabold text-[#1A1A1A] mb-6">
            Why This Matters
          </h3>
          <p className="text-base text-[#344054] font-semibold leading-relaxed max-w-xl">
            Every failed application chips away at your confidence. But the real
            reason you&apos;re not getting hired is often invisible to you but
            obvious to recruiters. We&apos;ll help you uncover it with feedback
            from this test, and then fix it.
          </p>
        </div>

        <div data-aos="fade-down" className="lg:col-span-2 bg-[#2BD4CD29] rounded-2xl p-4 md:p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-extrabold font-clash-display text-[#1A1A1A] mb-6 leading-tight">
              Ready To Stop Guessing And Start Winning?
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <CheckCheck className="w-4 h-4 text-[#3A7B7B]" />
                <span className="text-[#4A4A4A] font-medium text-sm">
                  Take the Job Readiness Assessment today.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCheck className="w-4 h-4 text-[#3A7B7B]" />
                <span className="text-[#4A4A4A] font-medium text-sm">
                  Your next role starts with knowing where you stand.
                </span>
              </li>
            </ul>
          </div>
          <div className="max-w-78 mt-2">
            <Link href="/assessment">
              <StartAssessmentBtn text="Start My Free Assessment" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
