import AssessmentSection from "@/components/assessment";
import CTA from "@/components/cta";
import { JobReadinessHero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <JobReadinessHero />
      <CTA />
      <AssessmentSection />
    </>
  );
}
