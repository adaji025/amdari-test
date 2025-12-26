import React from "react";
import { Check } from "lucide-react";
import { SurveyOption } from "./survey-option";

interface QuestionCardProps {
  title: string;
  options: string[];
}

const QuestionCard = ({ title, options }: QuestionCardProps) => {
  return (
    <div className="w-full">
      <div className="w-full rounded-[24px] bg-white p-12 shadow-md">
        <div className="flex flex-col items-center gap-10">
          {title && (
            <h2 className="text-center text-xl font-bold leading-[150%] text-[#1a2b3b] md:text-2xl">
              {title}
            </h2>
          )}

          <div className="flex gap-16 flex-wrap justify-center">
            {options.map((option, index) => {
              const lowerOption = option.toLowerCase();
              const variant = lowerOption === "yes" ? "yes" : lowerOption === "no" ? "no" : "default";
              return (
                <SurveyOption
                  key={index}
                  label={option}
                  variant={variant}
                  icon={lowerOption === "yes" ? <Check className="h-6 w-6 stroke-3" /> : undefined}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
