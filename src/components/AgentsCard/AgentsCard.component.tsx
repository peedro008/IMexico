import { Box, Container, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import TEST1 from "../../images/TEST1.png"
import agentCardSun from "../../images/agentCardSun.svg"
export const AgentsCard = (props: any) => {
    
    return (
        <>
        <Box backgroundColor="white" width="156px" height={"244px"}  margin="10px auto" boxShadow="2px 2px 2px rgba(0, 0, 0, 0.25)" borderRadius={"7px"}>
            <Box  padding={0} backgroundImage={agentCardSun} backgroundSize="100%"  minWidth={"100%"} height="80px" display={"flex"}>
                <Image src={TEST1} alt="Agente" marginTop={"10px"} />
            </Box>  
            <Box display={"flex"} flexDirection="column" justifyContent={"center"}>
                <Text textAlign={"center"} fontSize="19px" fontWeight="700" color="black">Juan Rodriguez</Text>
                <Text textAlign={"center"} fontSize="14px" fontWeight="400" color="#666666">Agente</Text>
            </Box>
        </Box>
       
        </>
    )
}
