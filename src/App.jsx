import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
