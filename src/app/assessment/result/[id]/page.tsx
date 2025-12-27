"use client";
import { ResultComp } from "@/components/assessment/result";
import Success from "@/components/assessment/success";
import { useState } from "react";

function Result() {
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="pt-13.5 pb-20 w-full max-w-213.75 mx-auto px-4">
      {showResult ? <ResultComp /> : <Success setShowResult={setShowResult} />}
    </div>
  );
}

export default Result;
