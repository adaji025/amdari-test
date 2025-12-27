"use client";
import { AssessmentLineChart } from "@/components/result/assessment-line-chart";
import { CategoryCard } from "@/components/result/category-card";
import { ScoreGauge } from "@/components/result/score-guage";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WarningIcon } from "@/components/svg";
import StartAssessmentBtn from "@/components/home/start-assement-btn";
import Link from "next/link";

export function ResultComp() {
  return (
    <div>
      {/* Top Section */}
      <div className="min-h-20 p-3 flex items-center gap-2 bg-primary rounded-xl text-white">
        <Avatar className="border-4 h-12 w-12">
          <AvatarImage
            className="h-16 w-16"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          Your mastery level in this domain is{" "}
          <span className="font-bold">Established</span> with{" "}
          <span className="font-bold">75 points</span> where your performance is
          better by <span className="font-bold">80% of what you did</span> in
          the Assessment!
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <AssessmentLineChart />
          </CardContent>
        </Card>

        <div className="flex flex-col items-center space-y-4 text-center">
          <ScoreGauge score={87} />
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900">
              Your Assessment Summary
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Your current job readiness score shows that you are not yet fully
              prepared for the competitive tech job market....{" "}
              <a
                href="#"
                className="text-[#0d9488] font-bold underline decoration-2 underline-offset-2"
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid items-start grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
        {/* Category Cards Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <CategoryCard title="Tech Skills" score={7} variant="teal" />
            <CategoryCard title="Portfolio" score={7} variant="teal" />
            <CategoryCard title="References" score={3} variant="red" />
            <CategoryCard
              title="Interview Readiness - STAR"
              score={4}
              variant="red"
            />
          </div>
          <div className="space-y-3">
            <CategoryCard
              title="CV (ATS Compliance)"
              score={5}
              variant="yellow"
            />
            <CategoryCard
              title="LinkedIn Optimization"
              score={7}
              variant="teal"
            />
            <CategoryCard
              title="Interview Readiness - SEAT"
              score={6}
              variant="yellow"
            />
          </div>
        </div>

        {/* Status Legend */}
        <div className="flex flex-col justify-center">
          <Card className="border shadow-none rounded-md border-[#D9D9D9]">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between p-2 rounded bg-teal-50 text-teal-900 text-xs font-bold border border-teal-100">
                <span>Needs Preparation-</span>
                <span className="text-teal-600/70 font-normal">
                  {"<60 points"}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-teal-100 text-teal-900 text-xs font-bold border border-teal-200">
                <span>Almost Ready -</span>
                <span className="text-teal-600/70 font-normal">
                  60 - 79 points
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-[#134e4a] text-white text-xs font-bold">
                <span>Job Ready -</span>
                <span className="text-teal-100 font-normal">
                  80 - 100 points
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-[#FEF9E6] p-3 rounded-xl text-sm font-semibold min-h-15 mt-10 flex items-center gap-2">
        <WarningIcon />
        <div>
          You’re close! Work on weak areas highlighted above for each category
          by clicking the “See Feedback” buttons.
        </div>
      </div>
      <Link href="/assessment" className="mt-10 block">
        <StartAssessmentBtn text="Start here…." />
      </Link>
    </div>
  );
}

