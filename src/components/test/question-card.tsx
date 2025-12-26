import React from "react";
import { Check } from "lucide-react";
import { SurveyOption } from "./survey-option";

const QuestionCard = () => {
  return (
    <div className="w-full">
      <div className="w-full rounded-[24px] bg-white p-12 shadow-md">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-center text-xl font-bold leading-[150%] text-[#1a2b3b] md:text-2xl">
            Have You Taken a Course in any of these Career Paths (Data
            Analytics, Data Science, Data Engineering, Ethical Hacking, SOC
            Analyst, GRC, Business Analysis, Project Management)
          </h2>

          <div className="flex gap-16">
            <SurveyOption
              label="Yes"
              variant="yes"
              icon={<Check className="h-6 w-6 stroke-3" />}
            />
            <SurveyOption label="No" variant="no" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
