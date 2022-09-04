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
    Spinner,
    Box,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export const RegisterModal = (props: any) => {
  let message = ""
  let loading = true
  if(props?.registerReducer.fetched){
    message=props?.registerReducer?.result
 }


    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          {!props?.registerReducer.fetching?<>
          
            <ModalBody>
            {props.user.user?
            <>
            <Text fontSize="15px" fontWeight="700" textAlign="center" color="#5B5B5B">¡Bienvenido ${props.user.user}!</Text> 
            <Text fontSize="15px" fontWeight="500" textAlign="center" color="#5B5B5B">{props.registerReducer.message}</Text>
            </> 
          :  <Text fontSize="15px" fontWeight="500" textAlign="center" color="#5B5B5B">{props.registerReducer.message}</Text>}
         </ModalBody>
          <ModalFooter display="flex" justifyContent="center" alignItems="center">         
                <Link to="/login">
                  <Button display="flex" height="28px" width="132px" margin="10px auto" fontSize="12px" fontWeight="500" textAlign="center"  color="white"  filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)" borderRadius="33px">Ingresar</Button>
                </Link>
          </ModalFooter>
          </>:
          <Box width="100%" minHeight="110px" display="flex" alignItems="center" justifyContent="center">
          <Spinner size="lg" style={{padding:"15px"}}/>
          </Box>}
        </ModalContent>
      </Modal>
    )
}