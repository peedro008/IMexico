import { Container, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { DeleteAgentModal } from '../Modals/DeleteAgentModal'
import calendar from '../../images/calendar.svg'
import msg from '../../images/msg.svg'
import thrash from '../../images/thrash.svg'
import { useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const AgentCard = (props: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Container backgroundColor="white" width="90%" padding="10px" margin="10px auto">
            <HStack justifyContent="space-between" >
                <Image src={props.image} alt="Agente" />
                <HStack width="50%" justifyContent="space-around">
                        <Link to="/agents/schedule"><Image src={calendar} alt="Ver Agenda"/></Link>
                        <Image src={msg} alt="Enviar Mensaje"/>
                        <Image src={thrash} alt="Eliminar Agente" onClick={onOpen}/>    
                </HStack>
            </HStack>
            <Text fontSize="19px" fontWeight="700" color="black">{props.name}</Text>
            <Text fontSize="14px" fontWeight="400" color="#666666">{props.role}</Text>
        </Container>
        <DeleteAgentModal isOpen={isOpen} onClose={onClose}/>
        </>
    )
}
