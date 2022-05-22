import { Flex } from "@chakra-ui/react";
import { Form } from "../components/Form";
import ToggleThemeButton from "../components/ToggleThemeButton";

export function Home() {
  return (
    <Flex height="100vh" width="100vw" p={4}>
      <ToggleThemeButton />
      <Form />
    </Flex>
  );
}
