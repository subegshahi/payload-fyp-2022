import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    Ashim: 28900,
    Subeg: 23380,
  },
  {
    date: "Feb 22",
    Ashim: 27560,
    Subeg: 21036,
  },
  {
    date: "Mar 22",
    Ashim: 33227,
    Subeg: 21949,
  },
  {
    date: "Apr 22",
    Ashim: 34704,
    Subeg: 21408,
  },
  {
    date: "May 22",
    Ashim: 34757,
    Subeg: 18152,
  },
  {
    date: "Jun 22",
    Ashim: 31298,
    Subeg: 27263,
  },
];

const dataFormatter = (number) => {
  return "Rs " + Intl.NumberFormat("us").format(number).toString();
};

export const AdminAreaChart = () => {
  return (
    <div>
      <Card>
        <Title>Contractor's Ticket Sales</Title>
        <AreaChart
          className="mt-4 h-[30rem]"
          data={chartdata}
          index="date"
          categories={["Ashim", "Subeg"]}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      </Card>
    </div>
  );
};
