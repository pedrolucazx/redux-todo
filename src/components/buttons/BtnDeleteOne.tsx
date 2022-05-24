import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { IBtn } from "../../models/Task";
import { deleteOneTask } from "../../redux/taskSlice";

export function BtnDeleteOne({ task }: IBtn) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  return (
    <>
      <IconButton
        aria-label="Apagar tarefa"
        icon={<FiTrash2 />}
        isRound={true}
        onClick={onOpen}
      />
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Você realmente deseja excluir a tarefa?</ModalHeader>
          <ModalBody>
            <Flex direction="column" justifyContent="center">
              <span>{task.label}</span>
              <span>{task.description}</span>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Não
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => dispatch(deleteOneTask(task))}
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
