import NavbarComp from "../components/navbar";
import imageData from "../assets/expense.png";
import cloudImage from "../assets/cloud.png";
import familyImage from "../assets/family.png";
import scooterImage from "../assets/scooter.png";
import { Button, Card, CardBody } from "@nextui-org/react";
import { GiPlatform } from "react-icons/gi";
import { TbCloudDataConnection } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

export default function LandingPage() {
  return (
    <div className="h-screen w-screen overflow-auto">
      <NavbarComp />
      <section className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center">
        <div className="p-10 space-y-4 font-bold text-md md:text-2xl">
          <h1>Track your Expenses to Save Money</h1>
          <p className="text-gray-500">
            Helps you keep track of your expenses and save money.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
        <div className="">
          <img
            src={imageData}
            alt="this is a picture of a person saving money"
          />
        </div>
      </section>
      <section className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Box 1</h2>
              <p className="text-gray-700">Content for box 1 goes here.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Box 2</h2>
              <p className="text-gray-700">Content for box 2 goes here.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Box 3</h2>
              <p className="text-gray-700">Content for box 3 goes here.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Box 4</h2>
              <p className="text-gray-700">Content for box 4 goes here.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center">
        <div className="p-10 space-y-4 font-bold text-md md:text-2xl">
          <h1>Real Time Support with Cloud</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde
            eveniet dolore distinctio omnis mollitia ad at vitae numquam
            dolorem.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
        <div className="">
          <img
            src={cloudImage}
            alt="this is a picture of a person saving money"
          />
        </div>
      </section>
      <section className=" w-full grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center">
        <div className="">
          <img
            src={familyImage}
            alt="this is a picture of a person saving money"
          />
        </div>
        <div className="p-10 space-y-4 font-bold text-md md:text-2xl">
          <h1>Real Time Support with Cloud</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde
            eveniet dolore distinctio omnis mollitia ad at vitae numquam
            dolorem.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </section>
      <section className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center">
        <div className="p-10 space-y-4 font-bold text-md md:text-2xl">
          <h1>Use anytime, anywhere, when you want</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde
            eveniet dolore distinctio omnis mollitia ad at vitae numquam
            dolorem.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
        <div className="">
          <img
            src={scooterImage}
            alt="this is a picture of a person saving money"
          />
        </div>
      </section>
      <section className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center p-10 space-y-4 font-bold text-md md:text-2xl">
        <h1>Product we work with.</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat
          corporis reiciendis molestias, magnam minima sequi hic labore vel
          reprehenderit voluptatibus optio aperiam architecto quos provident
          aliquam, sapiente nisi libero?
        </p>
      </section>
      <section className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 p-10 justify-center items-center">
        <Card className="h-60">
          <CardBody className="flex justify-center items-center space-y-4">
            <TbCloudDataConnection className="text-6xl text-blue-500" />
            <h2 className="text-3xl">Cloud Platform</h2>
          </CardBody>
        </Card>
        <Card className="h-60">
          <CardBody className="flex justify-center items-center space-y-4">
            <GiPlatform className="text-6xl text-purple-500" />
            <h2 className="text-3xl">Cross Plaform</h2>
          </CardBody>
        </Card>
        <Card className="h-60">
          <CardBody className="flex justify-center items-center space-y-4">
            <IoLogoJavascript className="text-6xl text-yellow-500" />
            <h2 className="text-3xl">Pure javascript</h2>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
