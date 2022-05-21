import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

export function Form() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="rotulo">Rótulo</FormLabel>
      <Input id="label" placeholder="Digite rótulo da tarefa" />
    </FormControl>
  );
}
