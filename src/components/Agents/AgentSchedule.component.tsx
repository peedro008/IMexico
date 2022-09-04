import { Container, Divider, HStack, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import fuasandra from '../../images/fuasandra.png'
import calendar from '../../images/calendar.png'
import { Link } from 'react-router-dom'

export const AgentSchedule = () => {
    return (
        <Container margin="10px auto" >
            <HStack marginBottom="20px"><Link to="/agents"><ChevronLeftIcon boxSize="30px" color="#1D467C"/></Link><Text paddingX="20%" fontSize="14px" fontWeight="700" color="#5B5B5B">Administrar agentes</Text></HStack>
            <Container minWidth="100%" backgroundColor="white" paddingY="10px">
                <Text fontSize="13px" fontWeight="500" color="#5B5B5B">Agenda de agente</Text>
                <Divider backgroundColor="black" margin="10px auto"/>
                <Image src={fuasandra} margin="0 auto"/>
                <Text fontSize="20px" fontWeight="700" textAlign="center" color="black">Sandra Trejo</Text>
                <Text fontSize="16px" fontWeight="400" textAlign="center" color="#666666">Agente inmobiliaria</Text>
                <Image src={calendar} margin="10px auto"/>
            </Container>
            <Button display="flex" height="28px" width="132px" margin="20px auto" fontSize="12px" fontWeight="700" textAlign="center" border="2px solid #1D467C" color="#1D467C" backgroundColor="white" borderRadius="33px">Enviar mensaje</Button>
        </Container>
    )
}
