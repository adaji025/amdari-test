import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

interface IProps {
  handleBack: () => void;
}
const BackButton = ({ handleBack }: IProps) => {
  return (
    <Button
      onClick={handleBack}
      variant="outline"
      size="lg"
      className="flex-1 font-extrabold rounded-xl px-10 py-6 text-base transition-all hover:scale-105 cursor-pointer active:scale-95 relative overflow-hidden"
      style={{
        background: `
                  linear-gradient(0deg, #ffffff, #ffffff),
                  linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)
                `,
        border: "1px solid transparent",
        borderImageSource:
          "linear-gradient(180deg, #FFFFFF -20.83%, rgba(255, 255, 255, 0) 15.62%)",
        borderImageSlice: 1,
        boxShadow: `
                  0px 0px 0px 1px rgba(209, 213, 219, 0.5),
                  0px 4px 14.2px 0px rgba(0, 0, 0, 0.1),
                  inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
                  inset 0px -1px 0px 0px rgba(0, 0, 0, 0.1)
                `,
        color: "#374151",
      }}
    >
      <span className="relative z-10 flex items-center">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </span>
      <div
        className="absolute top-0 left-0 right-0 h-1/3 rounded-t-xl pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />
    </Button>
  );
};

export default BackButton;
