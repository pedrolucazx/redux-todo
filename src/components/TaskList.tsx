import {
  HStack,
  Stack,
  VStack,
  Flex,
  Text,
  StackDivider,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { ITable } from "../models/Table";
import { IState, ITask, ITasks } from "../models/Task";
import { Form } from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { updateTable } from "../redux/TableSlice";
import { toggleComplete } from "../redux/taskSlice";
import { BtnDeleteOne } from "./buttons/BtnDeleteOne";
import { BtnDeleteAll } from "./buttons/BtnDeleteAll";

export function TaskList() {
  const dispatch = useDispatch();
  const tab = useSelector((state: ITable) => state.table.table);
  const tasks = useSelector((state: IState) => state.tasks.tasks);

  function filterTasks(): ITasks {
    return tasks
      .filter((task) => {
        switch (tab) {
          case "andamento":
            return !task.completed;
          case "concluídas":
            return task.completed;
          default:
            return task;
        }
      })
      .sort((task) => (task.completed ? 1 : -1));
  }

  const myTask = (task: ITask) => {
    const op: string = task.completed ? "0.2" : "1";
    const as: any = task.completed ? "del" : "";

    return (
      <HStack key={task.id} opacity={op}>
        <Checkbox
          colorScheme="green"
          defaultChecked={task.completed}
          onChange={() => dispatch(toggleComplete(task))}
        />
        <Flex direction="column" justifyContent="center" w="100%" p="8px">
          <Text textAlign="left" fontWeight="bold" as={as}>
            {task.label}
          </Text>
          <Text textAlign="left" as={as}>
            {task.description}
          </Text>
          <Text textAlign="left" color="gray.500" as={as}>
            {`Criação: ${task.createdAt}`}
          </Text>
        </Flex>
        <BtnDeleteOne task={task} />
      </HStack>
    );
  };

  if (!filterTasks().length) {
    return (
      <>
        <Form />
        <Stack spacing={2} direction="row" align="center">
          <Button
            colorScheme="purple"
            size="xs"
            onClick={() => dispatch(updateTable("andamento"))}
            isActive={tab === "andamento"}
            variant="outline"
          >
            Em Andamento
          </Button>
          <Button
            colorScheme="green"
            size="xs"
            onClick={() => dispatch(updateTable("concluídas"))}
            isActive={tab === "concluídas"}
            variant="outline"
          >
            Concluídas
          </Button>
          <Button
            colorScheme="blue"
            size="xs"
            onClick={() => dispatch(updateTable("todas"))}
            isActive={tab === "todas"}
            variant="outline"
          >
            Todas
          </Button>
        </Stack>
      </>
    );
  }
  return (
    <>
      <Form />
      <Stack spacing={2} direction="row" align="center">
        <Button
          colorScheme="purple"
          size="xs"
          onClick={() => dispatch(updateTable("andamento"))}
          isActive={tab === "andamento"}
          variant="outline"
        >
          Em Andamento
        </Button>
        <Button
          colorScheme="green"
          size="xs"
          onClick={() => dispatch(updateTable("concluidas"))}
          isActive={tab === "concluidas"}
          variant="outline"
        >
          Concluídas
        </Button>
        <Button
          colorScheme="blue"
          size="xs"
          onClick={() => dispatch(updateTable("todas"))}
          isActive={tab === "todas"}
          variant="outline"
        >
          Todas
        </Button>
      </Stack>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
      >
        {filterTasks().map(myTask)}
      </VStack>

      <Flex>
        <BtnDeleteAll />
      </Flex>
    </>
  );
}
