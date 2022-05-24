import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  useDisclosure,
  IconButton,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { IBtn } from "../../models/Task";
import { updateTask } from "../../redux/taskSlice";

export function BtnUpdate({ task }: IBtn) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [label, setLabel] = useState(task.label);
  const [description, setDescription] = useState(task.description);

  const initialRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  function handleTask() {
    dispatch(
      updateTask({
        ...task,
        label: label,
        description: description,
        updatedAt: new Date().toLocaleDateString("pt"),
      })
    );
  }

  function updated() {
    handleTask();
    onClose();
  }

  return (
    <>
      <IconButton
        aria-label="Editar Tarefa"
        icon={<FiEdit />}
        isRound={true}
        onClick={onOpen}
        hidden={task.completed}
      />
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Atualize sua tarefa </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel htmlFor="rotulo">rótulo</FormLabel>
              <Input
                ref={initialRef}
                value={label}
                placeholder="Digite o rótulo da tarefa"
                onChange={(event) => {
                  setLabel(event.target.value);
                }}
                onFocus={handleTask}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="descrição">descrição</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Digite a descrição da tarefa"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                onFocus={handleTask}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={() => updated()}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
