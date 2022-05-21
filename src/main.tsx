import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { App } from "./App";

const config = {
  initialColorMode: localStorage.getItem("chakra-ui-color-mode") || "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
