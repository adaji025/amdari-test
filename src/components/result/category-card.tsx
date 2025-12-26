import { Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  score: number
  total?: number
  variant?: "teal" | "yellow" | "red"
}

export function CategoryCard({ title, score, total = 10, variant = "teal" }: CategoryCardProps) {
  const variants = {
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-500",
      icon: "text-teal-600",
    },
    yellow: {
      bg: "bg-amber-50",
      border: "border-amber-400",
      icon: "text-amber-500",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-400",
      icon: "text-red-500",
    },
  }

  const activeVariant = variants[variant]

  return (
    <div
      className={cn(
        "flex items-center justify-between p-1 pl-3 rounded-lg border-2 shadow-sm transition-all hover:shadow-md",
        activeVariant.bg,
        activeVariant.border,
      )}
    >
      <div className="flex items-center gap-3">
        <Flag className={cn("w-5 h-5 fill-current", activeVariant.icon)} />
        <span className="text-sm font-semibold text-gray-800">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-gray-800">
          {score} <span className="font-normal text-gray-500">/ {total}</span>
        </span>
        <Button
          variant="secondary"
          size="sm"
          className="bg-[#2c7a7b] hover:bg-[#1d4f50] text-white text-[10px] h-8 px-3 rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
        >
          See Feedback
        </Button>
      </div>
    </div>
  )
}
