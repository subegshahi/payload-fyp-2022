import React from "react";
import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "Rara",
    sales: 9800,
  },
  {
    name: "Jumla",
    sales: 4567,
  },
  {
    ticket: "Dolpa",
    sales: 3908,
  },
  {
    ticket: "Humla",
    sales: 2400,
  },
];

const valueFormatter = (number) => `$ ${Intl.NumberFormat("npr").format(number).toString()}`;

export const AdminDonutChart = () => {
  return (
    <div>
      <Card className="max-w-lg">
        <Title>Total Ticket Sales</Title>
        <DonutChart
          className="mt-6 h-[20rem]"
          data={cities}
          category="sales"
          index="ticket"
          valueFormatter={valueFormatter}
          colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
        />
      </Card>
    </div>
  );
};
