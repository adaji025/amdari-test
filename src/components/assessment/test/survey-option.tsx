import { cn } from "@/lib/utils"

interface SurveyOptionProps {
  label: string
  icon?: React.ReactNode
  variant: "yes" | "no" | "default"
  selected?: boolean
  onClick?: () => void
}

export function SurveyOption({ label, icon, variant, selected = false, onClick }: SurveyOptionProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={onClick}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer",
          variant === "yes" 
            ? selected
              ? "bg-[#135d66] text-white ring-4 ring-[#135d66]/30 shadow-lg"
              : "bg-[#135d66] text-white hover:ring-2 hover:ring-[#135d66]/30"
            : variant === "no"
            ? selected
              ? "border-2 border-[#ff7a7a] bg-[#ff7a7a] text-white ring-4 ring-[#ff7a7a]/30 shadow-lg"
              : "border-2 border-[#ff7a7a] bg-[#fee2e2] hover:bg-[#ff7a7a] hover:text-white"
            : selected
            ? "border-2 border-[#135d66] bg-[#135d66] text-white ring-4 ring-[#135d66]/30 shadow-lg"
            : "border-2 border-gray-300 bg-white hover:border-[#135d66]",
        )}
      >
        {icon}
      </button>
      <span className={cn(
        "text-sm font-medium transition-colors",
        selected ? "text-[#135d66] font-bold" : "text-[#64748b]"
      )}>{label}</span>
    </div>
  )
}