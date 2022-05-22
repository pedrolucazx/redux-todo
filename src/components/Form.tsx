import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";

export function Form() {
  const [label, setLabel] = useState<string | null>("");
  const [description, setDescription] = useState<string | null>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`i'm first dude no need ${label} and ${description}`);
    console.log(e);
  }
  return (
    <Flex width="full" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading
            p="5"
            fontWeight="extrabold"
            size="xl"
            bgGradient="linear(to-l, teal.300, blue.500)"
            bgClip="text"
          >
            Lista de tarefas
          </Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel htmlFor="rotulo">rótulo</FormLabel>
              <Input
                id="label"
                placeholder="Digite o rótulo"
                onChange={(event) => {
                  setLabel(event.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="descrição">descrição</FormLabel>
              <Textarea
                placeholder="Digite a descrição"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </FormControl>

            <Button width="full" mt={4} type="submit" colorScheme="blue">
              Adicionar
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
