import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
