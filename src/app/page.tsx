import AssessmentSection from "@/components/home/assessment";
import CTA from "@/components/home/cta";
import { JobReadinessHero } from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <JobReadinessHero />
      <CTA />
      <AssessmentSection />
    </>
  );
}
