import { useState } from "react";
import loginImage from "../assets/login.png";
import logoData from "../assets/logo.png";
import { Button, Input, Spinner } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const response = await axios.post("http://192.168.1.137:3000/login", {
        email,
        password,
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
      router("/home");
    },
  });

  const handleSubmit = () => {
    mutate();
  };

  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 place-items-center overflow-auto">
      <div className="space-y-6 flex flex-col items-start justify-center p-10">
        <img src={logoData} alt="company logo" className="md:w-1/3 mx-auto" />
        <h1 className="text-3xl md:text-5xl">Welcome</h1>
        <p>Please login to continue</p>
        <Input
          variant="bordered"
          type="email"
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          variant="bordered"
          type="password"
          label="Password"
          placeholder="Enter your email"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="w-full"
          variant="solid"
          color="primary"
          onClick={() => handleSubmit()}
        >
          {isPending ? <Spinner size="sm" color="white" /> : "Login"}
        </Button>
      </div>
      <img
        src={loginImage}
        className="w-full h-full object-cover hidden md:block"
      />
    </div>
  );
}
