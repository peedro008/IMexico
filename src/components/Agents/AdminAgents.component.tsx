import { Container, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AgentCardController } from '../../controllers/Agents'
import admin from '../../images/admin.svg'
import Sandra from '../../images/Sandra.png'

export const AdminAgents = ({agentList}: any) => {
    return (
        <>
        <Container >
            <Text display="flex" margin="10px auto" justifyContent="center" alignItems="center" fontSize="19px" fontWeight="700" textAlign="center" color="#1D467C"><Image src={admin} alt="Administrar agentes"/>Administrar agentes</Text>
            <Container backgroundColor="white" padding="20px"><Text fontSize="13px" lineHeight="17px" color="#545454">Desde este panel podrás administrar a loss agentes a tu cargo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna ligula, tincidunt at suscipit sed, pellentesque sed arcu. Cras facilisis tellus ut est faucibus feugiat. Sed libero enim, lacinia ut massa id, iaculis vestibulum ligula.</Text></Container>
        </Container>
        <AgentCardController image={Sandra} name="Sandra Trejo" role="Agente inmobiliaria"/>
        <AgentCardController image={Sandra} name="Sandra Trejo" role="Agente inmobiliaria"/>
        <AgentCardController image={Sandra} name="Sandra Trejo" role="Agente inmobiliaria"/>
        <AgentCardController image={Sandra} name="Sandra Trejo" role="Agente inmobiliaria"/>
        <AgentCardController image={Sandra} name="Sandra Trejo" role="Agente inmobiliaria"/>
        </>
    )
}
