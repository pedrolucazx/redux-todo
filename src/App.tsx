import { ChakraProvider, theme } from "@chakra-ui/react";
import { Home } from "./page/Home";

export function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Home />
    </ChakraProvider>
  );
}
