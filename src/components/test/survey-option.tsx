import { cn } from "@/lib/utils"

interface SurveyOptionProps {
  label: string
  icon?: React.ReactNode
  variant: "yes" | "no"
  onClick?: () => void
}

export function SurveyOption({ label, icon, variant, onClick }: SurveyOptionProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={onClick}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105 active:scale-95 cursor-pointer",
          variant === "yes" ? "bg-[#135d66] text-white" : "border-2 border-[#ff7a7a] bg-[#fee2e2]",
        )}
      >
        {icon}
      </button>
      <span className="text-sm font-medium text-[#64748b]">{label}</span>
    </div>
  )
}