import { AssessmentLineChart } from "@/components/result/assessment-line-chart";
import { CategoryCard } from "@/components/result/category-card";
import { ScoreGauge } from "@/components/result/score-guage";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function Result() {
  return (
    <div className="bg-gray-100">
      <div className="pt-13.5 pb-20 w-full max-w-258 mx-auto px-4">
         <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <AssessmentLineChart />
            </CardContent>
          </Card>

          <div className="flex flex-col items-center space-y-4 text-center">
            <ScoreGauge score={87} />
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900">Your Assessment Summary</h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Your current job readiness score shows that you are not yet fully prepared for the competitive tech job
                market....{" "}
                <a href="#" className="text-[#0d9488] font-bold underline decoration-2 underline-offset-2">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <CategoryCard title="Tech Skills" score={7} variant="teal" />
              <CategoryCard title="Portfolio" score={7} variant="teal" />
              <CategoryCard title="References" score={3} variant="red" />
              <CategoryCard title="Interview Readiness - STAR" score={4} variant="red" />
            </div>
            <div className="space-y-3">
              <CategoryCard title="CV (ATS Compliance)" score={5} variant="yellow" />
              <CategoryCard title="LinkedIn Optimization" score={7} variant="teal" />
              <CategoryCard title="Interview Readiness - SEAT" score={6} variant="yellow" />
            </div>
          </div>

          {/* Status Legend */}
          <div className="flex flex-col justify-center">
            <Card className="border border-gray-200">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between p-2 rounded bg-teal-50 text-teal-900 text-xs font-bold border border-teal-100">
                  <span>Needs Preparation-</span>
                  <span className="text-teal-600/70 font-normal">{"<60 points"}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-teal-100 text-teal-900 text-xs font-bold border border-teal-200">
                  <span>Almost Ready -</span>
                  <span className="text-teal-600/70 font-normal">60 - 79 points</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#134e4a] text-white text-xs font-bold">
                  <span>Job Ready -</span>
                  <span className="text-teal-100 font-normal">80 - 100 points</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Result;
