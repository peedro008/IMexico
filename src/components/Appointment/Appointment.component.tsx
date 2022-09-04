import { Container, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import apponimg from '../../images/apponimg.png'
import { AppointmentCardController } from '../../controllers/Appointment'
import Sandra from '../../images/Sandra.png'
import calendar from '../../images/calendar.png'

export const Appointment = () => {
    let mobile = window.innerWidth
    return (
        <Container margin="10px auto" minWidth="80%" padding="0">
            <HStack marginBottom="20px"><Link to="/search"><ChevronLeftIcon boxSize="30px" color="#1D467C"/></Link><Text paddingX={mobile < 750 ? "25%" : "40%"} fontSize="19px" fontWeight="700" color="#1D467C">Agendar cita</Text></HStack>
            <Container width="90%" backgroundColor="white" paddingY="10px">
                <Text fontSize={mobile < 750 ? "14px" : "16px"} textAlign="center" color="#1D467C">Vimos que te interesa este inmueble.</Text>
                <HStack paddingY="5px">
                    <Image src={apponimg} alt="propiedad"/>
                    <VStack>
                        <Text fontSize={mobile < 750 ? "12px" : "16px"} color="#181725">Rosa Azul 006</Text>
                        <Text fontSize={mobile < 750 ? "14px" : "16px"} fontWeight="700" color="black">$ 252,107 USD</Text>
                    </VStack>
                </HStack>
            </Container>
            <Text width="90%" margin="0 auto" fontSize={mobile < 750 ? "14px" : "16px"} marginTop="20px" color="#181725">Nuestros agentes quieren ayudarte.</Text>
            <Divider width="90%" height="1px" backgroundColor="#7A7A7A" margin="10px auto"/>
            <Container minWidth="100%" padding="0" display="flex" flexWrap="wrap">
                <AppointmentCardController image={Sandra} calendar={calendar} name="Sandra Trejo" role="Agente inmobiliario"/>
                <AppointmentCardController image={Sandra} calendar={calendar} name="Sandra Trejo" role="Agente inmobiliario"/>
                <AppointmentCardController image={Sandra} calendar={calendar} name="Sandra Trejo" role="Agente inmobiliario"/>
                <AppointmentCardController image={Sandra} calendar={calendar} name="Sandra Trejo" role="Agente inmobiliario"/>
            </Container>
        </Container>
    )
}
