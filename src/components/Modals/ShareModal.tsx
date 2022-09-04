import { Image } from '@chakra-ui/image'
import { HStack, Text } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React from 'react'
import LOGO from "../../images/logocolorD.png"
/* import facecolor from "./images/facecolor.svg" */
//import instcolor from "./images/instcolor.svg"
/* mport twtcolor from "./images/twtcolor.svg"
import linkedincolor from "./images/linkedincolor.svg" */
import { Input } from '@chakra-ui/input'
import { useDisclosure } from '@chakra-ui/react'

export const ShareModal = (props: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        onOpen();
        setTimeout(() => {
            onClose();
        }, 800);
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={false}
                isCentered
            >
                <ModalOverlay />
                <ModalContent w="150px">
                    <ModalBody>
                        <Text textAlign="center">Copiado</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal
                isOpen={props.shareOpen}
                onClose={props.onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent w="500px" maxW="90vw" borderRadius="20px">
                    <ModalHeader>
                        {/* <Image src={LOGO} mx="auto" /> */}
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Text margin="0 auto" color="#585858">Compartir en:</Text>
                        {/* <HStack width="100%" justifyContent="space-around" paddingY="20px">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer">
                                <Image src={facecolor}/> 
                            </a>
                            <Image src={instcolor}/> 
                            <a href={`http://twitter.com/intent/tweet/?url=${window.location.href}`} target="_blank" rel="noreferrer">
                                <Image src={twtcolor}/>
                            </a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noreferrer">
                                <Image src={linkedincolor}/>
                            </a>
                        </HStack>  */}
                        <Input borderColor="#79940D" readOnly mb={3} fontSize="sm" textAlign="center" value={window.location.href}></Input>
                        <Text color="#217537" textDecoration="underline" fontWeight="bold" cursor="pointer" pb={3} onClick={handleCopy}>Copiar link</Text>
                    </ModalBody>
                    </ModalContent>
            </Modal>
        </>
    )
}
