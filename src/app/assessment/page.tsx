import NextAssessmentBtn from "@/components/next-btn";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Guidelines = () => {
  return (
    <div className="flex flex-col jc items-center text-center gap-10 mt-20 pb-20">
      <Image
        src="/images/svgs/guideline.svg"
        height={274}
        width={284}
        alt="assesment guidleines"
      />
      <div className="font-black text-[32px] xl:text-[48px]">
        Assessment guidelines
      </div>
      <div className="flex flex-col items-center gap-2 justify-center text-[#101828] text-xl sm:text-2xl">
        <div className="flex gap-2">
          <CheckCheck className="w-6 h-6 text-primary" />
          <div>
            Answer eash question based on how accurately it represents you
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CheckCheck className="w-6 h-6 text-primary" />
          <div>You cannot skip questions, answer all questions</div>
        </div>
      </div>
      <div>
        <Link href="/assessment/test">
          <NextAssessmentBtn text="Start Assessment" />
        </Link>
      </div>
    </div>
  );
};

export default Guidelines;
