import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Summit Air",
    "Ticket Sold": 248,
  },
  {
    name: "Yeti Ailines",
    "Ticket Sold": 414,
  },
  {
    name: "Sita Air",
    "Ticket Sold": 754,
  },
];

const dataFormatter = (number) => {
  return " " + Intl.NumberFormat("us").format(number).toString();
};

export const AdminBarGraph = () => {
  return (
    <div>
      <Card>
        <Title>Ticket Sales</Title>
        <Subtitle>For The Year of 2023</Subtitle>
        <BarChart
          className="mt-6 h-[18.5rem]"
          data={chartdata}
          index="name"
          categories={["Ticket Sold"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
        />
      </Card>
    </div>
  );
};
