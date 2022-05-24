import { Heading, VStack } from "@chakra-ui/react";
import { TaskList } from "../components/TaskList";
import ToggleThemeButton from "../components/ToggleThemeButton";
import { store } from "../redux/store";

export function Home() {
  store.subscribe(() => {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks));
    localStorage.setItem("tab", store.getState().table.table);
  });
  return (
    <>
      <VStack p={4} minH="100vh">
        <ToggleThemeButton />
        <Heading
          p="5"
          fontWeight="extrabold"
          size="xl"
          bgGradient="linear(to-l, teal.300, blue.500)"
          bgClip="text"
        >
          Lista de tarefas
        </Heading>
        <TaskList />
      </VStack>
    </>
  );
}
