"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NextAssessmentBtn from "@/components/next-btn";
import { SkillAcquiredHeader } from "@/components/assessment/test/header";
import QuestionCard from "@/components/assessment/test/question-card";

interface Question {
  title: string;
  options?: string[];
  option?: string[];
}

interface Section {
  title: string;
  questions?: Question[];
  qestions?: Question[];
}

const Test = () => {
  const router = useRouter();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<
    Record<string, Record<string, string>>
  >({});
  const [data, setData] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch questions from API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        
        if (!apiUrl) {
          throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
        }

        const response = await fetch(`${apiUrl}/questions`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch questions: ${response.statusText}`);
        }

        const questionsData = await response.json();
        setData(questionsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load questions");
        console.error("Error fetching questions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

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

  const submitAnswers = async () => {
    try {
      setSubmitting(true);
      setSubmitError(null);
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      
      if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
      }

      const response = await fetch(`${apiUrl}/answers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Failed to submit answers: ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("Answers submitted successfully:", result);
      
      // Redirect to success page after successful submission
      router.push("/assessment/result/1");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit answers");
      console.error("Error submitting answers:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = async () => {
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
      // Submit answers to API
      await submitAnswers();
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

  // Show loading state
  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#101828] mb-4">Loading questions...</div>
          <div className="text-[#344054]">Please wait while we load your assessment.</div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-2xl font-bold text-red-600 mb-4">Error loading questions</div>
          <div className="text-[#344054] mb-6">{error}</div>
          <Button
            onClick={() => window.location.reload()}
            className="font-extrabold rounded-xl px-10 py-6 text-base"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  // Show message if no data
  if (!data || data.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#101828] mb-4">No questions available</div>
          <div className="text-[#344054]">Please check back later.</div>
        </div>
      </div>
    );
  }

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
              text={isLastSection ? (submitting ? "Submitting..." : "Submit") : "Next"}
              onClick={handleNext}
              disabled={!areAllQuestionsAnswered() || submitting}
            />
            {submitError && (
              <div className="mt-4 text-center">
                <p className="text-red-600 text-sm font-medium">{submitError}</p>
                <Button
                  onClick={submitAnswers}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Retry Submission
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
