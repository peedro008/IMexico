import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
  } from '@chakra-ui/react'


export const DeleteAgentModal = (props: any) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="20px" fontWeight="700" textAlign="center" color="#5B5B5B">¿Estás seguro de eliminar este agente?</Text> 
          </ModalBody>
          <ModalFooter>         
              <Button display="flex" height="28px" width="132px" margin="10px auto" fontSize="12px" fontWeight="500" textAlign="center"  color="white" backgroundColor="#DE4A5A" borderRadius="33px">Eliminar agente</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}
