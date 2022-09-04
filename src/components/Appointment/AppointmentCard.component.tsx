import { Button, Container, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const AppointmentCard = (props: any) => {
    return (
        <Container boxShadow="1px 1px 5px 1px #0000004e" backgroundColor="white"  borderRadius="10px" maxWidth="165px" height="241px" padding="20px" marginY="10px">
        <HStack justifyContent="flex-start" >
            <Image src={props.image} alt="Agente" />
        <VStack>
        <Text fontSize="12px" fontWeight="700" color="black">{props.name}</Text>
        <Text fontSize="8px" fontWeight="400" color="#666666">{props.role}</Text>
        </VStack>
        </HStack>
        <Image src={props.calendar} alt="Calendario"/>
        <Button display="flex" height="28px" width="132px" margin="20px auto" fontSize="12px" fontWeight="500" textAlign="center"  color="white" backgroundColor="#1D467C" borderRadius="33px" _hover={{bgGradient:"linear-gradient(180deg, #007BB8 0%, #1D467C 100%);"}}>Elegir agente</Button>
    </Container>
    )
}
