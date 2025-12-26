import NextAssessmentBtn from "@/components/next-btn";
import { SkillAcquiredHeader } from "@/components/test/header";
import QuestionCard from "@/components/test/question-card";
import React from "react";

const Test = () => {
  return (
    <div className="bg-gray-100">
      <div className="pt-13.5 pb-20 w-full max-w-258 mx-auto px-4">
        <SkillAcquiredHeader
          title="A. Tech Skill Acquired"
          currentStep={1}
          totalSteps={7}
        />

        <div className=" text-center text-2xl font-bold text-[#101828] mb-4 mt-10">
          Choose how accurately each Question reflects you.
        </div>

        <div className="space-y-6">
          <QuestionCard />
          <QuestionCard />
        </div>

        <div className="text-[#101828] text-center mt-4 mb-10">
          All questions must be answered before you continue.
        </div>

        <NextAssessmentBtn />
      </div>
    </div>
  );
};

export default Test;
