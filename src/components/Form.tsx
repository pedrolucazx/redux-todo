import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { v4 } from "uuid";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export function Form() {
  const dispatch = useDispatch();
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [statusInput, setStatusInput] = useState(true);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const taskLabel = label.trim();
    if (!taskLabel) {
      setStatusInput(false);
      return setLabel("");
    }

    dispatch(
      addTask({
        id: v4(),
        label: taskLabel,
        description,
        createdAt: new Date().toLocaleDateString("pt"),
      })
    );
    setLabel("");
    setDescription("");
  }

  if (label && !statusInput) {
    setStatusInput(true);
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <FormControl isRequired>
        <FormLabel htmlFor="rotulo">rótulo</FormLabel>
        <Input
          borderColor={!statusInput ? "red.300" : "transparent"}
          variant="filled"
          placeholder="Digite o rótulo"
          value={label}
          onChange={(event) => {
            setLabel(event.target.value);
          }}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel htmlFor="descrição">descrição</FormLabel>
        <Input
          variant="filled"
          placeholder="Digite a descrição"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </FormControl>

      <Button width="full" mt={4} type="submit" colorScheme="blue">
        Adicionar
      </Button>
    </form>
  );
}
