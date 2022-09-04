import React, { useState } from 'react'
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
    HStack
  } from '@chakra-ui/react'
  import logomodal from '../../images/logomodal.png'

export const ServiceModal = (props: any) => {
  const handleCopy = () => {
    navigator.clipboard.writeText("+52 1 984 218 1599");
    setCopied(!copied)
  }

  const [ copied, setCopied ] = useState(false)

  return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Image src={logomodal} margin="0 auto" alt="IMéxico"/></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="20px" fontWeight="700" textAlign="center" color="#5B5B5B">Comunícate con nosotros</Text>
            <Text width="65%" margin="0 auto" fontSize="16px" lineHeight="19px" fontWeight="700" textAlign="center" color="#1D467C">Un asesor de Venta estará a disposición</Text>
          </ModalBody>
          <ModalFooter>
              <HStack margin="0 auto">
                <Button onClick={handleCopy} disabled={copied} display="flex" height="28px" width="132px" margin="10px auto" fontSize="12px" fontWeight="500" textAlign="center" border="2px solid #1D467C" color="#1D467C" backgroundColor="white" borderRadius="33px">{ copied ? "Copiado" : "Llamar" }</Button>
                <a href="https://wa.link/zfmin0" target="_blank"><Button display="flex" height="28px" width="132px" margin="10px auto" fontSize="12px" fontWeight="500" textAlign="center" color="white" backgroundColor="#1D467C" borderRadius="33px"><Text fontSize="13px" color="white">Whatsapp</Text></Button></a>
              </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}
