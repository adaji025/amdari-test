"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    questions: [
      {
        title:
          "Do you have at least one professional/organizational reference in your preferred career path?",
        options: ["yes", "no"],
      },
    ],
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
  const router = useRouter();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, Record<string, string>>
  >({});
  const currentSection = data[currentSectionIndex];
  const isLastSection = currentSectionIndex === data.length - 1;

  // Convert index to alphabet letter (0 -> A, 1 -> B, etc.)
  const getAlphabetPrefix = (index: number): string => {
    return String.fromCharCode(65 + index); // 65 is ASCII for 'A'
  };

  const handleAnswerChange = (questionTitle: string, answer: string) => {
    const section = currentSection;
    const sectionTitle = section.title;

    setAnswers((prev) => {
      const updated = {
        ...prev,
        [sectionTitle]: {
          ...prev[sectionTitle],
          [questionTitle]: answer,
        },
      };

      // Console log the updated answers object
      console.log("Assessment Answers:", updated);

      return updated;
    });
  };

  // Check if all questions in the current section are answered
  const areAllQuestionsAnswered = () => {
    const sectionTitle = currentSection.title;
    const questions = currentSection.questions || currentSection.qestions || [];
    const sectionAnswers = answers[sectionTitle] || {};

    return questions.every((question) => {
      // Skip questions with empty titles
      if (!question.title || question.title.trim() === "") return true;
      return (
        sectionAnswers[question.title] !== undefined &&
        sectionAnswers[question.title] !== null &&
        sectionAnswers[question.title] !== ""
      );
    });
  };

  const handleNext = () => {
    // Check if all questions are answered before proceeding
    if (!areAllQuestionsAnswered()) {
      return;
    }

    if (currentSectionIndex < data.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      // Scroll is handled by useEffect
    } else {
      // Console log final answers before submitting
      console.log("Final Assessment Answers:", answers);
      router.push("/assessment/success");
    }
  };

  const handleBack = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      // Scroll is handled by useEffect
    }
  };

  const isFirstSection = currentSectionIndex === 0;

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSectionIndex]);

  if (!currentSection) {
    return null;
  }

  const questions = currentSection.questions || currentSection.qestions || [];

  // Remove any existing alphabet prefix and add the correct one based on index
  const titleWithoutPrefix = currentSection.title.replace(/^[A-Z]\.\s*/, "");
  const prefixedTitle = `${getAlphabetPrefix(
    currentSectionIndex
  )}. ${titleWithoutPrefix}`;

  return (
    <div className="bg-gray-100">
      <div className="pt-13.5 pb-20 w-full max-w-258 mx-auto px-4">
        <SkillAcquiredHeader
          title={prefixedTitle}
          currentStep={currentSectionIndex + 1}
          totalSteps={data.length}
        />

        <div className=" text-center text-2xl font-bold text-[#101828] mb-4 mt-10">
          Choose how accurately each Question reflects you.
        </div>

        <div className="space-y-10">
          {questions.map((question, questionIndex) => {
            const sectionTitle = currentSection.title;
            return (
              <QuestionCard
                key={questionIndex}
                title={question.title}
                options={question.options || question.option || []}
                questionId={question.title}
                onAnswerChange={handleAnswerChange}
                initialAnswer={answers[sectionTitle]?.[question.title] || null}
              />
            );
          })}
        </div>

        <div className="text-[#101828] text-center mt-8 mb-10">
          All questions must be answered before you continue.
        </div>

        <div className="flex gap-4">
          {!isFirstSection && (
            <Button
              onClick={handleBack}
              variant="outline"
              size="lg"
              className="flex-1 font-extrabold rounded-xl px-10 py-6 text-base border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
          )}
          <div className={isFirstSection ? "w-full" : "flex-1"}>
            <NextAssessmentBtn
              text={isLastSection ? "Submit" : "Next"}
              onClick={handleNext}
              disabled={!areAllQuestionsAnswered()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
