import { cn } from "@/lib/utils"

interface SkillAcquiredHeaderProps {
  title: string
  currentStep: number
  totalSteps: number
}

export function SkillAcquiredHeader({
  title = "A. Tech Skill Acquired",
  currentStep = 1,
  totalSteps = 7,
}: SkillAcquiredHeaderProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200">
        <h2 className="text-xl font-bold text-[#0F172A] tracking-tight">{title}</h2>
        <div className="flex items-center gap-1.5" aria-label={`Step ${currentStep} of ${totalSteps}`}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-12 rounded-full transition-colors",
                i < currentStep
                  ? "bg-[#086171]" // Dark teal/cyan color from image
                  : "bg-gray-200",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
