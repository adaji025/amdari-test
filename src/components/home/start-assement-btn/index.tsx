import { Button } from "@/components/ui/button";
import React from "react";

const StartAssessmentBtn = () => {
  return (
    <Button
      size="lg"
      className="bg-[#2D7D8E] hover:bg-[#246473] text-white rounded-xl px-10 py-7 text-lg font-semibold shadow-xl shadow-cyan-900/20 transition-all hover:scale-105 active:scale-95"
    >
      Start My Free Assessment
    </Button>
  );
};

export default StartAssessmentBtn;
