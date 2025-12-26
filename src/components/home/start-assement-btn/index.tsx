import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartAssessmentBtn = ({ text }: { text: string }) => {
  return (
    <Button
      size="lg"
      className="text-white font-extrabold rounded-[14px] px-10 py-6 text-base transition-all hover:scale-105 active:scale-95 relative overflow-hidden"
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
          0px 4px 14.2px 0px rgba(20, 99, 116, 0.25),
          inset 0px 1px 0px 0px rgba(255, 255, 255, 0.3),
          inset 0px -1px 0px 0px rgba(0, 0, 0, 0.2)
        `,
      }}
    >
      <span className="relative z-10">{text}</span>
      <div
        className="absolute top-0 left-0 right-0 h-1/3 rounded-t-[14px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
    </Button>
  );
};

export default StartAssessmentBtn;
