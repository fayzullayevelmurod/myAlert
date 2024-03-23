import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  breakpoints: {
    desktop: "62.5em",
    tablet: "885px",
    sm: "640px",
  },
  colors: {
    transparent: "transparent",
    brand: {
      base: "#F55B3D",
      500: "linear-gradient(90deg, #F14141 -0.39%, #FC8935 123.79%)",
    },
    black: {
      base: "#000",
      1: "#212B36",
      2: "#A0AEC0",
      3: "#1A202C",
      4: "#919EAB",
      5: "#637381",
    },
    bg: "#F6F7F8",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
