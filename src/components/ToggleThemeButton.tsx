import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle tema"
      icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
      isRound={true}
      onClick={toggleColorMode}
      size="md"
    />
  );
}
