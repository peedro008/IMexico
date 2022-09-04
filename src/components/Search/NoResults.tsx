import { Button, Container, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { NavLink } from 'react-router-dom';

export const NoResults = () => {
    let mobile = window.innerWidth
    return (
        <Container width={mobile < 750 ? "80%" : "100%"} display="flex" margin="10px auto 30px">
        <Container borderRadius="15px 15px 0px 0px">
          <Container paddingY="30px" bgGradient="linear-gradient(180deg, #007BB8 0%, #1D467C 100%);" borderRadius="15px 15px 0px 0px">
              <HStack justifyContent="space-between">
                  <Text fontSize="14px" fontWeight="700" width="100%" margin="0 auto" textAlign="center" color="white" lineHeight="16px">
                  Lo sentimos. No se encontraron resultados para tu búsqueda.
                  </Text>
              </HStack>
            </Container>
          <Container backgroundColor="white">
            <VStack paddingY="30px">
                      <Text fontSize="14px" textAlign="center" fontWeight="700" color="#1D467C">¡Pero queremos mantenerte al tanto de las novedades!</Text>
                        <Text fontSize="12px" textAlign="center" fontWeight="700" color="#545454">Puedes registrarte para que podamos avisarte cuando haya nuevas propiedades en tu zona de búsqueda.</Text>
            </VStack>
          </Container>
          <Container backgroundColor="white">
              <HStack margin="0 auto">
             <Button  display="flex" height="28px" width="240px" margin="10px auto" fontSize="14px" fontWeight="700" textAlign="center" color="white" backgroundColor="#1D467C" borderRadius="33px" _hover={{bgGradient:"linear-gradient(180deg, #007BB8 0%, #1D467C 100%);"}}> <NavLink to="/register" >Quiero registrarme</NavLink></Button>
              </HStack>
          </Container>
        </Container>
      </Container>
    )
}
