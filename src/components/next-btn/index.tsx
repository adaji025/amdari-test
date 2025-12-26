import { Button } from "@/components/ui/button";
import React from "react";

const NextAssessmentBtn = ({
  text = "Next",
  onClick,
}: {
  text?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      size="lg"
      className="text-white w-full font-extrabold rounded-xl px-10 py-6 text-base transition-all hover:scale-105 active:scale-95 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(0deg, #146374, #146374),
          linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)
        `,
        border: "1px solid transparent",
        borderImageSource:
          "linear-gradient(180deg, #FFFFFF -20.83%, rgba(255, 255, 255, 0) 15.62%)",
        borderImageSlice: 1,
        boxShadow: `
          0px 0px 0px 1px rgba(20, 99, 116, 0.25),
          0px 4px 14.2px 0px rgba(20, 99, 116, 0.25)
        `,
      }}
    >
      {text}
    </Button>
  );
};

export default NextAssessmentBtn;
