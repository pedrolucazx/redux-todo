import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteAllTasks } from "../../redux/taskSlice";

export function BtnDeleteAll() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  return (
    <>
      <Button
        colorScheme="gray"
        px="8"
        h="45"
        color="gray.500"
        mt="8"
        onClick={onOpen}
      >
        Excluir Tarefas
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Confirma a exclusão de todas as tarefas?</ModalHeader>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Não
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => dispatch(deleteAllTasks())}
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
