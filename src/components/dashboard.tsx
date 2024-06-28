import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineSavings } from "react-icons/md";
import { TbTransactionPound } from "react-icons/tb";

export default function Dashboard() {
  const { data, isPending } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const response = await fetch("http://192.168.1.2:3000/dashboard/1", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.json();
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full w-full">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <Card className="max-w-[400px] max-h-[200px]">
          <Skeleton isLoaded={!isPending} className="rounded-lg">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-md">Total Income</p>
              </div>
            </CardHeader>
            <CardBody className="space-y-2">
              <div className="p-4 bg-base-300 rounded-full w-max">
                <FaDollarSign className="text-2xl text-green-500" />
              </div>
              <h2 className="text-2xl">{data.totalIncome}</h2>
            </CardBody>
            <CardFooter>
              <p className="text-small text-default-500">
                Visit source code on GitHub.
              </p>
            </CardFooter>
          </Skeleton>
        </Card>
        <Card className="max-w-[400px] max-h-[200px] bg-green-400">
          <Skeleton isLoaded={!isPending} className="rounded-lg">
            <CardHeader className="flex gap-3 text-white">
              <div className="flex flex-col">
                <p className="text-md">Total Expense</p>
              </div>
            </CardHeader>
            <CardBody className="space-y-2 text-white">
              <div className="p-4 bg-white rounded-full w-max">
                <TbTransactionPound className="text-2xl text-green-500" />
              </div>
              <h2 className="text-2xl">{data.totalExpense}</h2>
            </CardBody>
            <CardFooter className="text-white">
              <p className="text-small">Visit source code on GitHub.</p>
            </CardFooter>
          </Skeleton>
        </Card>
        <Card className="max-w-[400px] max-h-[200px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Total Savings</p>
            </div>
          </CardHeader>
          <CardBody className="space-y-2">
            <div className="p-4 bg-base-300 rounded-full w-max">
              <MdOutlineSavings className="text-2xl text-green-500" />
            </div>
            <h2 className="text-2xl">{data.savings}</h2>
          </CardBody>
          <CardFooter>
            <p className="text-small text-default-500">
              Visit source code on GitHub.
            </p>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
