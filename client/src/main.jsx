import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@fontsource/poppins";

import App from "./App.jsx";

import { Toaster } from "react-hot-toast";

import {
  SettingsProvider,
} from "./context/SettingsContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <SettingsProvider>

      <App />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fcf4f4",
            color: "#151617",
            borderRadius: "16px",
            padding: "16px",
            fontWeight: "600",
          },
        }}
      />

    </SettingsProvider>

  </React.StrictMode>
);