"use client";
import { AssessmentLineChart } from "@/components/result/assessment-line-chart";
import { CategoryCard } from "@/components/result/category-card";
import { ScoreGauge } from "@/components/result/score-guage";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WarningIcon } from "@/components/svg";
import StartAssessmentBtn from "@/components/home/start-assement-btn";
import Link from "next/link";

interface Statistics {
  overall_score?: number;
  total_score?: number;
  score?: number;
  mastery_level?: string;
  performance_percentage?: number;
  points?: number;
  categories?: Array<{
    title: string;
    score: number;
    total?: number;
    variant?: "teal" | "yellow" | "red";
  }>;
  chart_data?: Array<{
    name: string;
    score: number;
  }>;
  summary?: string;
  [key: string]: any;
}

interface ResultCompProps {
  statistics?: Statistics | null;
}

// Helper function to determine variant based on score
const getVariant = (score: number, total: number = 10): "teal" | "yellow" | "red" => {
  const percentage = (score / total) * 100;
  if (percentage >= 80) return "teal";
  if (percentage >= 60) return "yellow";
  return "red";
};

export function ResultComp({ statistics }: ResultCompProps) {
  // Extract data from statistics with fallbacks
  const overallScore = statistics?.overall_score ?? statistics?.total_score ?? statistics?.score ?? 87;
  const masteryLevel = statistics?.mastery_level ?? "Established";
  const points = statistics?.points ?? overallScore;
  const performancePercentage = statistics?.performance_percentage ?? 80;
  const summary = statistics?.summary ?? "Your current job readiness score shows that you are not yet fully prepared for the competitive tech job market....";
  
  // Default categories if not provided
  const defaultCategories = [
    { title: "Tech Skills", score: 7, total: 10 },
    { title: "Portfolio", score: 7, total: 10 },
    { title: "CV (ATS Compliance)", score: 5, total: 10 },
    { title: "LinkedIn Optimization", score: 7, total: 10 },
    { title: "References", score: 3, total: 10 },
    { title: "Interview Readiness - SEAT", score: 6, total: 10 },
    { title: "Interview Readiness - STAR", score: 4, total: 10 },
  ];

  // Convert categories to array if it's an object
  const normalizeCategories = (cats: any): Array<{ title: string; score: number; total?: number; variant?: "teal" | "yellow" | "red" }> => {
    if (!cats) return defaultCategories;
    
    // If it's already an array, return it
    if (Array.isArray(cats)) {
      return cats.map(cat => ({
        ...cat,
        variant: cat.variant ?? getVariant(cat.score, cat.total ?? 10)
      }));
    }
    
    // If it's an object, convert to array
    if (typeof cats === 'object') {
      return Object.entries(cats).map(([key, value]: [string, any]) => ({
        title: value.title ?? key,
        score: value.score ?? value,
        total: value.total ?? 10,
        variant: value.variant ?? getVariant(value.score ?? value, value.total ?? 10)
      }));
    }
    
    return defaultCategories;
  };

  const categories = normalizeCategories(statistics?.categories);

  // Default chart data if not provided
  const defaultChartData = [
    { name: "0", score: 0 },
    { name: "SKILL", score: 60 },
    { name: "PORTFOLIO", score: 80 },
    { name: "CV", score: 40 },
    { name: "LINKEDIN", score: 60 },
    { name: "REF", score: 50 },
    { name: "SEAT", score: 30 },
    { name: "STAR", score: 75 },
  ];

  const chartData = statistics?.chart_data ?? defaultChartData;
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
          <span className="font-bold">{masteryLevel}</span> with{" "}
          <span className="font-bold">{points} points</span> where your performance is
          better by <span className="font-bold">{performancePercentage}% of what you did</span> in
          the Assessment!
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <AssessmentLineChart data={chartData} />
          </CardContent>
        </Card>

        <div className="flex flex-col items-center space-y-4 text-center">
          <ScoreGauge score={overallScore} />
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900">
              Your Assessment Summary
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {summary}{" "}
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
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            {categories.slice(0, Math.ceil(categories.length / 2)).map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                score={category.score}
                total={category.total}
                variant={category.variant ?? getVariant(category.score, category.total)}
              />
            ))}
          </div>
          <div className="space-y-3">
            {categories.slice(Math.ceil(categories.length / 2)).map((category, index) => (
              <CategoryCard
                key={index + Math.ceil(categories.length / 2)}
                title={category.title}
                score={category.score}
                total={category.total}
                variant={category.variant ?? getVariant(category.score, category.total)}
              />
            ))}
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

