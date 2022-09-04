import { Box, Container, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillStarFill } from 'react-icons/bs'


export const ClientCardComponent = (props: any) => {
    let client = props?.client
    let star :  string[] = []
    for(let i=0;i<client.rate; i++){
        star.push("i")
}
    
    return(
    <Container borderRadius={"7px"}  padding={0} backgroundColor={"#FFFFFF"} height={"287px"} minWidth={"259px"} display={"flex"} marginRight="20px" flexDirection={"column"}  alignItems={"center"} boxShadow={"lg"}>
            <Box borderColor={"#D3D3D3"} borderWidth={"3px"} borderRadius={"50%"} display="flex" marginY="15px">
                <Image objectFit={"cover"} src={client?.pic} width={"84.21px"} height={"84.21px"} borderRadius={"50%"}  borderWidth={"4px"} borderColor={"red"}/>
            </Box>
        <Box width={"50,84px"} display={"flex"} justifyContent={"space-between"}  >
            {
            star.map(e=>{
                return <BsFillStarFill color={"#E81D2C"}/>
           })
            }
            
            
        </Box>

        <Text fontSize={"13px"} fontWeight={700} color={"#5B5B5B"}>{client?.name}</Text>
        <Text fontSize={"13px"} fontWeight={400} color={"#5B5B5B"}>{client?.country}</Text>
        <Divider width={"80%"}  color={"#A4A4A4"}  alignSelf={"center"} marginY={"10px"}/>
        <Text textAlign={"center"} fontSize={"13px"} fontWeight={400} lineHeight={"17px"} paddingX={"15px"}>{client?.comment}</Text>
    </Container>)
}
