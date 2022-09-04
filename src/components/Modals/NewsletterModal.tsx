import React, { useState }from 'react';
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
    VStack,
    Input,
		Spinner
  } from '@chakra-ui/react'
	
	//images

	import logomodal from '../../images/logomodal.png'
import { Container } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NewsletterModal = (props: any) => {

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
					<ModalOverlay />
					<ModalContent paddingX="25px" paddingY="10px">
						<ModalHeader display="flex" flexDir="column" justifyContent="center" alignItems="center" margin="-10px 0">
							<Image src={logomodal} margin="0 auto" width="71px" height="56.7px"  alt="IMéxico"/>
							<VStack marginTop="20px">
									<Text fontSize="18px" textAlign="center" >Solicitud de newsletter</Text>
									<Text color="#5B5B5B" fontWeight="500" fontSize="16px" textAlign="center" >
                    {
                      props?.newsletterReducer?.fetched && props?.newsletterReducer?.data ? "Fuiste suscripto a nuestro newsletter exitosamente!" : "Recordá que tenes que estar logueado para subscribirte!" 
                    } 
                  </Text>
							</VStack>
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
              {props?.newsletterReducer.fetching ? 
                <Container flexDirection='column' justifyContent='center' display="flex" alignItems='center' minWidth="100%" h="100%"><Spinner size="lg" /></Container>  
                : 
                <>
                  <Container flexDirection='column' display="flex" justifyContent='center' alignItems='center' minWidth="100%">	
                      {
                        !props?.newsletterReducer?.fetched && 
                        <>
                        <NavLink to="/login"><Button><Text textAlign='center'>Iniciar sesión</Text></Button></NavLink>
                       <Text textAlign='center' marginTop="15px" fontSize="12px">¿No eres Miembro?  <NavLink to="/register"><strong>Regístrate</strong></NavLink></Text>
                        </>
                      }
                    
                  </Container>
                </>
              }
							
						</ModalBody>
					
					</ModalContent>
        </Modal>
    )
}