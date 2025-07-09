import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./style/style.scss";
import App from "./App.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpeedInsights />
    <App />
  </StrictMode>
);
