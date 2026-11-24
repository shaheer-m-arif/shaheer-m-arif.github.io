import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Self-hosted fonts: Cormorant for display, Jost for text and labels.
import "@fontsource-variable/cormorant";
import "@fontsource-variable/cormorant/wght-italic.css";
import "@fontsource-variable/jost";
import "./styles/global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
