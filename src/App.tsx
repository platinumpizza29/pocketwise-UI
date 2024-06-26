import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
