import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Image,
  } from '@chakra-ui/react'


export const FullscreenModal = (props: any) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} > 
        <ModalOverlay />
        <ModalContent minWidth={"fit-content"} minHeight={"fit-content"}>
          <ModalCloseButton size={'sm'} style={{borderWidth:"0", backgroundColor:"white", marginRight:"-5px"}}/>
          <ModalBody>
             <Image marginY={"15px"} src={props.src} minWidth="100%" minHeight="100%"/>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
}
