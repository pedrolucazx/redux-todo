import { Flex, Text } from "@chakra-ui/react";
import ToggleThemeButton from "../components/ToggleThemeButton";

export function Home() {
  return (
    <Flex height="100vh" width="100vw" p={4}>
      <ToggleThemeButton />
    </Flex>
  );
}
