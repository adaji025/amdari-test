import { Dispatch, SetStateAction } from "react";
import NextAssessmentBtn from "@/components/next-btn";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  setShowResult: Dispatch<SetStateAction<boolean>>;
}
const Success = ({ setShowResult }: IProps) => {
  return (
    <div className="flex flex-col jc items-center text-center gap-10 mt-20 pb-20">
      <Image
        src="/images/svgs/guideline.svg"
        height={274}
        width={284}
        alt="assesment guidleines"
      />
      <div className="font-black text-[32px] xl:text-[48px]">
        Congratulations!
      </div>
      <div className="text-[#101828] text-xl sm:text-2xl text-center">
        You’ve completed the Job Readiness Assessment
      </div>
      <div>
        <NextAssessmentBtn
          text="Get My Results"
          onClick={() => setShowResult(true)}
        />
      </div>
    </div>
  );
};

export default Success;
