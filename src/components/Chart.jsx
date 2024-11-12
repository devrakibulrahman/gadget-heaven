"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { name: "Samsung", price: 80, total: 25, rating: 4.9 },
  { name: "Iphone", price: 100, total: 150, rating: 4.9 },
  { name: "Google", price: 80, total: 130, rating: 4.7 },
  { name: "Apple Watch", price: 98, total: 120, rating: 4.8 },
  { name: "Samsung Galaxy Watch ", price: 58, total: 50, rating: 4.6 },
  { name: "Surface Laptop", price: 85, total: 75, rating: 4.7 },
  { name: "MacBook", price: 115, total: 180, rating: 4.9 },
  { name: "Cameras", price: 96, total: 60, rating: 4.9 },
  { name: "Buds", price: 73, total: 190, rating: 4.7 },
  { name: "Accessories", price: 200, total: 180, rating: 4.0 },
]

const chartConfig = {
  total: {
    label: "Total",
    color: "#BF87EE",
  },
  rating: {
    label: "Rating",
    color: "#0B0B0B",
  },
  price: {
    label: "Price",
    color: "#9538E2",
  }
}

const BarChartDesign = () => {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <BarChart accessibilityLayer data={chartData} barGap={10}>
        <CartesianGrid stroke="#F2F4F7" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tick={{fill: "#0B0B0BB3", fontSize: 12, fontWeight: 500, fontFamily: "Sora, sans-serif"}}
          tickMargin={12}
          axisLine={false}
        />
        <YAxis
          dataKey="price"
          tickLine={false}
          tickMargin={8}
          tick={{fill: "#0B0B0B", fontSize: 14, fontWeight: 500, fontFamily: "Sora, sans-serif"}}
          axisLine={false} 
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} wrapperStyle={{paddingTop: '22px', paddingBottom: '25px'}}/>
        <Bar dataKey="price" fill={chartConfig.price.color} radius={4} barSize={60} />
        <Bar dataKey="total" fill={chartConfig.total.color} radius={4} barSize={60} />
        <Bar dataKey="rating" fill={chartConfig.rating.color} radius={4} barSize={60} />
      </BarChart>
    </ChartContainer>
  );
};

export default BarChartDesign;