"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart,CartesianGrid,XAxis,YAxis } from "recharts"
import { ChartConfig, ChartContainer,ChartTooltip, ChartTooltipContent,ChartLegend, ChartLegendContent } from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-5)", // this color was found in global.css just change the last digit to change the color
  },
} satisfies ChartConfig

export function AppBarChart() {
  return (
    <div>
    <h2 className="text-md text-center font-medium">Monthly Active Users</h2>
    <p className="text-sm text-center text-gray-500">showing data for the last 6 months</p>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        
      <BarChart accessibilityLayer className="min-h-[200px] w-full" data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
     <div className="items-center gap-2 leading-none font-medium">
     <h3> Trending up by 5.2% this month </h3>
    </div>
      <TrendingUp className="h-16 w-16 text-green-500" />
      <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2025
            </div>
    </div>
  )
}
