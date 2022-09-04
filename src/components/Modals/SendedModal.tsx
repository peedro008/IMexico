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
    Image,
    Text,
    HStack,
    Container,
    Box
  } from '@chakra-ui/react'


export const SendedModal = (props: any) => {
    return (
        
        <Modal  isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent height={"196px"}>
       
          <ModalCloseButton />
          <ModalBody maxHeight={"130px"}>
            <Text fontSize="15px" fontWeight="700" textAlign="center" color="#5B5B5B" marginTop="25px">¡Mensaje enviado!</Text>
            <Text width="65%" margin="0 auto" fontSize="13px" lineHeight="19px" marginTop="10px" fontWeight="500" textAlign="center" color="#5B5B5B">Nos pondremos en contacto a la brevedad.</Text>
          </ModalBody>
          <ModalFooter maxHeight={"10px"}>
              <HStack margin="0 auto">
                <Button display="flex" height="28px" width="240px" fontSize="12px" fontWeight="500" textAlign="center" color="white" backgroundColor="#104B86" borderRadius="33px" onClick={props.onClose}>Continuar</Button>
              </HStack>
          </ModalFooter>
          
        </ModalContent>
      </Modal>
    )
}