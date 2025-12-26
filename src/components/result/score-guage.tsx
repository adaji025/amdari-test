"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface ScoreGaugeProps {
  score: number
}

export function ScoreGauge({ score }: ScoreGaugeProps) {
  const data = [{ value: score }, { value: 100 - score }]

  const COLORS = ["#0d9488", "#e5e7eb"]

  return (
    <div className="relative h-45 w-45 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={225}
            endAngle={-45}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-gray-900">{score}</span>
        <span className="text-sm text-gray-500 font-medium">Out of 100</span>
      </div>
      {/* Dots on the gauge track */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 25, 50, 75, 100].map((step, i) => {
          const angle = 225 - (step / 100) * 270
          const radius = 70
          const x = 90 + radius * Math.cos((angle * Math.PI) / 180)
          const y = 90 - radius * Math.sin((angle * Math.PI) / 180)
          return (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white border border-gray-300"
              style={{ left: `${x}px`, top: `${y}px`, transform: "translate(-50%, -50%)" }}
            />
          )
        })}
      </div>
    </div>
  )
}
