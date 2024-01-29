"use client";
import { Button } from "@material-tailwind/react";
import { AreaChart, Card, Title } from "@tremor/react";
import React from "react";
import { GreetingCard } from "@/components/dashboard/pcr/greeting.card";

const chartdata2 = [
  {
    date: "Jan 23",

    "2023": 78,
  },
  {
    date: "Feb 23",

    "2023": 71,
  },
  {
    date: "Mar 23",

    "2023": 80,
  },
  {
    date: "Apr 23",

    "2023": 65,
  },
  {
    date: "May 23",

    "2023": 58,
  },
  {
    date: "Jun 23",

    "2023": 62,
  },
  {
    date: "Jul 23",

    "2023": 54,
  },
  {
    date: "Aug 23",

    "2023": 49,
  },
  {
    date: "Sep 23",

    "2023": 52,
  },
  {
    date: "Oct 23",

    "2023": 12,
  },
  {
    date: "Nov 23",

    "2023": 89,
  },
  {
    date: "Dec 23",

    "2023": 745,
  },
  {
    date: "Jan 23",

    "2023": 1000,
  },
];

const AreaChartInteractiveExample = () => {
  const [value, setValue] = React.useState(null);
  return (
    <Card>
      <Title>Average BPM</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata2}
        index="date"
        categories={["2023"]}
        colors={["indigo"]}
        yAxisWidth={30}
        onValueChange={(v) => setValue(v as any)}
        connectNulls={true}
      />
    </Card>
  );
};
export default function Page() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full justify-between mb:gap-2 gap-6 ">
        <GreetingCard />
        <AreaChartInteractiveExample />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between mb:gap-2 gap-6 ">
        <GreetingCard />
        <AreaChartInteractiveExample />
      </div>
    </>
  );
}
