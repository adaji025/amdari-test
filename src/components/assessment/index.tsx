import { Check, ArrowRight, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FeatureCard } from "./feature-card";

export default function AssessmentSection() {
  return (
    <section className="py-16 px-4 md:px-8 xl:px-16 max-w-7xl mx-auto font-sans">
      <h2 className="text-4xl md:text-6xl font-clash-display font-extrabold tracking-tight text-[#1A1A1A] mb-12 max-w-xl leading-[1.1]">
        Here&apos;s What You Get In 10 Minutes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <FeatureCard
          imageQuery="/images/svgs/assessment/job-ready.svg"
          caption="A clear score showing how 'job-ready' you are."
        />
        <FeatureCard
          imageQuery="/images/svgs/assessment/result.svg"
          caption="Insights into the exact gaps holding you back."
        />
        <FeatureCard
          imageQuery="/images/svgs/assessment/roadmap.svg"
          caption="A personalized diagnostic roadmap with practical next steps."
        />
        <FeatureCard
          imageQuery="/images/svgs/assessment/result-1.svg"
          caption="Direct recommendations for programs that fix those gaps fast."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
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

        <div className="lg:col-span-2 bg-[#2BD4CD29] rounded-2xl p-4 md:p-5 flex flex-col justify-between">
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
          <Button className="w-full bg-[#3A7B7B] hover:bg-[#2C5E5E] text-white py-8 rounded-xl text-lg font-bold shadow-lg group">
            Start My Free Assessment
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
