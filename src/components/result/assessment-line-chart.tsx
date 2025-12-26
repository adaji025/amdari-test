"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { name: "0", score: 0 },
  { name: "SKILL", score: 60 },
  { name: "PORTFOLIO", score: 80 },
  { name: "CV", score: 40 },
  { name: "LINKEDIN", score: 60 },
  { name: "REF", score: 50 },
  { name: "SEAT", score: 30 },
  { name: "STAR", score: 75 },
]

export function AssessmentLineChart() {
  return (
    <div className="h-75 w-full border">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} dy={10} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
            tickFormatter={(value) => `${value} Points`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 border border-gray-200 rounded shadow-sm text-xs">
                    <p className="font-medium">{payload[0].payload.name}</p>
                    <p className="text-teal-600">{payload[0].value} Points</p>
                  </div>
                )
              }
              return null
            }}
          />
          <Line
            type="linear"
            dataKey="score"
            stroke="#0d9488"
            strokeWidth={2}
            dot={{ r: 4, fill: "#0d9488", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
