"use client";
import { AppBarChart } from "@/components/AppBarChart";
import { ChartAreaGradient } from "@/components/ChartAreaGradient";
import { ChartPieDonutText } from "@/components/ChartPieDonutText";
import { CardDemo } from "@/components/CardDemo";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <ChartAreaGradient/></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <ChartPieDonutText />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <CardDemo />
      </div>
    </div>
  );
}
