import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf, MdOutlineSavings } from "react-icons/md";
import { TbTransactionPound } from "react-icons/tb";

export default function Dashboard() {
  return (
    <div className="h-full w-full">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-10 p-10">
        <Card className="max-w-[400px] max-h">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Total Income</p>
            </div>
          </CardHeader>
          <CardBody className="space-y-2">
            <div className="p-4 bg-base-300 rounded-full w-max">
              <FaDollarSign className="text-2xl text-green-500" />
            </div>
            <h2 className="text-3xl">45000</h2>
          </CardBody>
          <CardFooter>
            <p className="text-small text-default-500">
              Visit source code on GitHub.
            </p>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] max-h bg-green-400">
          <CardHeader className="flex gap-3 text-white">
            <div className="flex flex-col">
              <p className="text-md">Total Expense</p>
            </div>
          </CardHeader>
          <CardBody className="space-y-2 text-white">
            <div className="p-4 bg-white rounded-full w-max">
              <TbTransactionPound className="text-2xl text-green-500" />
            </div>
            <h2 className="text-3xl">27450</h2>
          </CardBody>
          <CardFooter className="text-white">
            <p className="text-small">Visit source code on GitHub.</p>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] max-h">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Total Savings</p>
            </div>
          </CardHeader>
          <CardBody className="space-y-2">
            <div className="p-4 bg-base-300 rounded-full w-max">
              <MdOutlineSavings className="text-2xl text-green-500" />
            </div>
            <h2 className="text-3xl">17550</h2>
          </CardBody>
          <CardFooter>
            <p className="text-small text-default-500">
              Visit source code on GitHub.
            </p>
          </CardFooter>
        </Card>
        <Card className="max-w-[400px] max-h">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Most Spending</p>
            </div>
          </CardHeader>
          <CardBody className="space-y-2">
            <div className="p-4 bg-base-300 rounded-full w-max">
              <MdOutlineEnergySavingsLeaf className="text-2xl text-green-500" />
            </div>
            <h2 className="text-3xl">1150</h2>
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
