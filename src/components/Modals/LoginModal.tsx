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
    Container,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export const LoginModal = (props: any) => {
  let message = ""
  let loading = true
  if(props?.loginReducer?.fetched){
    message=props?.loginReducer.data.message
 }


    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent maxHeight={"192px"}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          
            
            <ModalBody>
           {
            props?.loginReducer.fetching? <Container w="100%" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center"><Spinner size="md" style={{padding:"15px"}}/></Container> :
            props?.user ?
              <>
              <Text fontSize="15px" marginBottom={"5px"} marginTop={"-5px"} fontWeight="700" textAlign="center" color="#5B5B5B">{props.loginReducer.message}!</Text> 
              
              </> 
            :  <Text fontSize="15px" fontWeight="500" textAlign="center" color="#5B5B5B">{props.loginReducer.data.message}</Text>
            
            }
            </ModalBody>
            <ModalFooter display="flex" justifyContent="center" marginTop="-20px">         
                  <Link to="/">
                    <Button display="flex" height="28px" width="132px" margin="10px auto" fontSize="12px" fontWeight="500" textAlign="center"  color="white"  filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))" background="linear-gradient(180deg, #007BB8 0%, #1D467C 100%)" borderRadius="33px">Continuar</Button>
                  </Link>
            </ModalFooter> 
      
        </ModalContent>
      </Modal>
    )
}