"use client";

import { useState } from "react";
import NextAssessmentBtn from "@/components/next-btn";
import { SkillAcquiredHeader } from "@/components/test/header";
import QuestionCard from "@/components/test/question-card";

const data = [
  {
    title: "Tech Skill Acquired",
    qestions: [
      {
        title:
          "Have You Taken a Course in any of these Career Paths (Data Analytics, Data Science, Data Engineering, Ethical Hacking, SOC Analyst, GRC, Business Analysis, Project Management)",
        options: ["yes", "no"],
      },
      {
        title: "Which career path?",
        options: [
          "Data Analytics",
          "Data Science",
          "Data Engineering",
          "SOC Analyst",
          "GRC",
          "Ethical Hacking",
          "Business Analysis",
          "Project Management",
        ],
      },
    ],
  },
  {
    title: "Portfolio",
    questions: [
      {
        title: "Do you have a professional portfolio showcasing your work?",
        options: ["yes", "no"],
      },
      {
        title: "How many projects are currently in your portfolio?",
        option: ["0 Project", "1-5 Projects", "5-10 Projects", "10+ Projects"],
      },
    ],
  },
  {
    title: "CV (ATS Compliance)",
    questions: [
      {
        title:
          "Is your CV keyword-optimized for Applicant Tracking Systems (ATS)?",
        options: ["yes", "no"],
      },
      {
        title:
          "On a scale of 1–5, how confident are you that your CV matches job descriptions in your field?",
        options: ["1", "2", "3", "4", "5"],
      },
    ],
  },
  {
    title: "LinkedIn Optimization",
    questions: [
      {
        title:
          "Do you have an optimized LinkedIn profile that highlights your skills and achievements in your preferred career path selected in question 1?",
        options: ["yes", "no"],
      },
      {
        title: "Do recruiters reach out to you on LinkedIn?",
        options: ["yes", "no"],
      },
    ],
  },
  {
    title: "References",
    questions: [{ title: "", options: ["yes", "no"] }],
  },
  {
    title: "Interview Readiness – SEAT",
    questions: [
      {
        title:
          "Do you know how to use the SEAT (Skills, Experience, Achievements, Traits) approach to answer 'Tell me about yourself'?",
        options: ["yes", "no"],
      },
      {
        title:
          "On a scale of 1–5, how confident are you in applying SEAT during interviews?",
        options: ["1", "2", "3", "4", "5"],
      },
    ],
  },
  {
    title: "G. Interview Readiness – STAR",
    questions: [
      {
        title:
          "Do you know how to use the STAR (Situation, Task, Action, Result) method to answer competency-based questions?",
        options: ["yes", "no"],
      },
      {
        title:
          "On a scale of 1–5, how confident are you in applying STAR during interviews?",
        options: ["1", "2", "3", "4", "5"],
      },
    ],
  },
];

const Test = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const currentSection = data[currentSectionIndex];
  const isLastSection = currentSectionIndex === data.length - 1;

  const handleNext = () => {
    if (currentSectionIndex < data.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  if (!currentSection) {
    return null;
  }

  const questions = currentSection.questions || currentSection.qestions || [];

  return (
    <div className="bg-gray-100">
      <div className="pt-13.5 pb-20 w-full max-w-258 mx-auto px-4">
        <SkillAcquiredHeader
          title={currentSection.title}
          currentStep={currentSectionIndex + 1}
          totalSteps={data.length}
        />

        <div className=" text-center text-2xl font-bold text-[#101828] mb-4 mt-10">
          Choose how accurately each Question reflects you.
        </div>

        <div className="space-y-6">
          {questions.map((question, questionIndex) => (
            <QuestionCard
              key={questionIndex}
              title={question.title}
              options={question.options || question.option || []}
            />
          ))}
        </div>

        <div className="text-[#101828] text-center mt-4 mb-10">
          All questions must be answered before you continue.
        </div>

        <NextAssessmentBtn
          text={isLastSection ? "Submit" : "Next"}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Test;
