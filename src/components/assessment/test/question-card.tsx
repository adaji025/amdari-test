"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { SurveyOption } from "./survey-option";

interface QuestionCardProps {
  title: string;
  options: string[];
  questionId: string;
  onAnswerChange?: (questionId: string, answer: string) => void;
  initialAnswer?: string | null;
}

const QuestionCard = ({ title, options, questionId, onAnswerChange, initialAnswer }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(initialAnswer || null);

  // Sync selectedOption with initialAnswer when it changes (e.g., when navigating back)
  useEffect(() => {
    setSelectedOption(initialAnswer || null);
  }, [initialAnswer]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onAnswerChange?.(questionId, option);
  };

  return (
    <div className="w-full">
      <div className="w-full rounded-[24px] bg-white p-6 xl:p-12 shadow-md">
        <div className="flex flex-col items-center gap-10">
          {title && (
            <h2 className="text-center sm:text-xl font-bold leading-[150%] text-[#1a2b3b] md:text-2xl">
              {title}
            </h2>
          )}

          <div className="flex gap-16 flex-wrap justify-center">
            {options.map((option, index) => {
              const lowerOption = option.toLowerCase();
              const variant = lowerOption === "yes" ? "yes" : lowerOption === "no" ? "no" : "default";
              const isSelected = selectedOption === option;
              return (
                <SurveyOption
                  key={index}
                  label={option}
                  variant={variant}
                  icon={isSelected ? <Check className="h-6 w-6 stroke-3" /> : undefined}
                  selected={isSelected}
                  onClick={() => handleOptionSelect(option)}
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
