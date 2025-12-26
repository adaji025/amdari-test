import { cn } from "@/lib/utils"

interface SurveyOptionProps {
  label: string
  icon?: React.ReactNode
  variant: "yes" | "no" | "default"
  onClick?: () => void
}

export function SurveyOption({ label, icon, variant, onClick }: SurveyOptionProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={onClick}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105 active:scale-95 cursor-pointer",
          variant === "yes" 
            ? "bg-[#135d66] text-white" 
            : variant === "no"
            ? "border-2 border-[#ff7a7a] bg-[#fee2e2]"
            : "border-2 border-gray-300 bg-white hover:border-[#135d66]",
        )}
      >
        {icon}
      </button>
      <span className="text-sm font-medium text-[#64748b]">{label}</span>
    </div>
  )
}